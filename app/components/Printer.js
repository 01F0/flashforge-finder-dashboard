var React = require('react');
var ReactDOM = require('react-dom')
var api = require('../../utils/api')
var PrinterInfo = require('../components/PrinterInfo')
var PrinterStatus = require('../components/PrinterStatus')
var PrintProgress = require('../components/PrintProgress')
var PrinterTemperature = require('../components/PrinterTemperature')
var PropTypes = require('prop-types');
import { PageHeader, Button, Glyphicon} from 'react-bootstrap';

class Printer extends React.Component {

  constructor(props) {
    super(props)
    this.props = {
      ip_address : props.ip_address,
      name : props.name
    };

    this.state = {
      info : null,
      status : null,
      progress : null,
      temp : null,
      connected : false
    };

    this.handleConnect = this.handleConnect.bind(this);
    this.pollingMethod = this.pollingMethod.bind(this);
  }

  // TODO: Add mobx store for these properties and move the api calls.
  pollingMethod() {
      api.getTemp(this.props.ip_address)
        .then(function (data) {
          this.setState(() => {
            return {
                  temp : data
                }});

      }.bind(this));

       api.getProgress(this.props.ip_address)
      .then(function (data) {

          this.setState(() => {
            return {
              progress : data
            }});

        }.bind(this));


        api.getStatus(this.props.ip_address)
          .then(function (data) {
                this.setState(() => {
                  return {
                    status : data
                  }});
          }.bind(this));

       api.getInfo(this.props.ip_address)
        .then(function (data) {
            this.setState(() => {
              return {
                info : data
              }});
      }.bind(this));

    }

  startPolling() {
    this.interval = window.setInterval(this.pollingMethod, 5000);
  }

  componentDidMount() {
    this.pollingMethod();
  }

  handleConnect() {
    this.setState( {
      connected : !this.state.connected
    });

     if (this.state.connected) {
      this.interval = window.clearInterval(this.interval);
    }
    else {
      this.startPolling();
    }

  }

  render() {
    if (!this.state.info || !this.state.status || !this.state.progress || !this.state.temp) {
       return (<div>
        <p>LOADING</p>
      </div>)
    }

    return (
      <div className='container'>
       <PageHeader>{this.props.name} <small>({this.props.ip_address})</small></PageHeader>
          <div style={{"opacity": this.state.connected ? 1 : 0.3}}>
          <PrinterStatus props={this.state.status}/>
          <PrinterTemperature props={this.state.temp}/>
          <PrintProgress props={this.state.progress}/>
        </div>
        <PrinterInfo props={this.state.info}/>
        <div className='connect-button'>
          <Button bsStyle={this.state.connected ? "warning" : "success"} onClick={this.handleConnect}>
            {!this.state.connected && <strong> Connect </strong>} {this.state.connected && <strong> Disconnect </strong>}
          </Button>
        </div>
      </div>)
    }
  }

Printer.propTypes = {
  ip_address: PropTypes.string.isRequired,
  name : PropTypes.string.isRequired
}

module.exports = Printer;