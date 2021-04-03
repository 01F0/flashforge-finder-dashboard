import React from 'react';
import { getTemp, getStatus, getProgress, getInfo } from '../utils/api';
import PrinterInfo from './PrinterInfo';
import PrinterStatus from './PrinterStatus';
import PrintProgress from './PrintProgress';
import PrinterTemperature from './PrinterTemperature';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'react-bootstrap';

export default class Printer extends React.Component
{

  constructor(props)
  {
    super(props);
    this.props = props;

    this.state = {
      info: null,
      status: null,
      progress: null,
      temp: null,
      connected: false
    };

    this.handleConnect = this.handleConnect.bind(this);
    this.pollingMethod = this.pollingMethod.bind(this);
  }

  async pollingMethod()
  {
    await getTemp(this.props.ip_address)
      .then(function (data)
      {
        if (!data)
        {
          return;
        }
        this.setState(() =>
        {
          return {
            temp: data
          }
        });

      }.bind(this));

    await getProgress(this.props.ip_address)
      .then(function (data)
      {
        if (!data)
        {
          return;
        }

        this.setState(() =>
        {
          return {
            isLoading: false,
            progress: data
          }
        });

      }.bind(this));


    await getStatus(this.props.ip_address)
      .then(function (data)
      {
        if (!data)
        {
          return;
        }
        this.setState(() =>
        {
          return {
            status: data
          }
        });
      }.bind(this));

    await getInfo(this.props.ip_address)
      .then(function (data)
      {
        if (!data)
        {
          return;
        }
        this.setState(() =>
        {
          return {
            info: data
          }
        });
      }.bind(this));

  }

  startPolling()
  {
    this.interval = window.setInterval(async () =>
    {
      await this.pollingMethod()
    }, 10000);
  }

  componentDidMount()
  {
    this.pollingMethod();
    this.handleConnect();
  }

  handleConnect()
  {
    this.setState({
      connected: !this.state.connected
    });

    if (this.state.connected)
    {
      this.interval = window.clearInterval(this.interval);
    }
    else
    {
      this.startPolling();
    }

  }

  render()
  {

    return (
      <div className='container'>
        <div style={{"opacity": this.state.connected ? 1 : 0.3}}>
        <h1 className='container-item'>{this.props.name}</h1>
        <h5 className='container-item'>({this.props.ip_address})</h5>
        <div className='container-item' >
          {this.state.status ? <PrinterStatus props={this.state.status} /> : <Spinner animation="border" role="status" size="sm" />}
          <div className='container-item' >
            <b>Temp</b>: {this.state.temp ? <PrinterTemperature props={this.state.temp} /> : <Spinner animation="border" role="status" size="sm" />}
          </div>
          <div className='container-item' >
            <b>Progress</b>: {this.state.progress ? <PrintProgress props={this.state.progress} /> : <Spinner animation="border" role="status" size="sm" />}
          </div>
        </div>
        <div className='container-item'>
          {this.state.info ? <PrinterInfo props={this.state.info} /> : <Spinner animation="border" role="status" size="sm" />}
        </div>
        </div>
        <div className='container-item'>
          <Button variant={this.state.connected ? "warning" : "success"} onClick={this.handleConnect}>
            {!this.state.connected && <strong> Connect </strong>} {this.state.connected && <strong> Disconnect </strong>}
          </Button>
        </div>
        
      </div>)
  }
}

Printer.propTypes = {
  ip_address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}