var React = require('react');
var ReactDOM = require('react-dom')
var api = require('../../utils/api')
var PrinterInfo = require('../components/PrinterInfo')
var PrinterStatus = require('../components/PrinterStatus')
var PrintProgress = require('../components/PrintProgress')
var PrinterTemperature = require('../components/PrinterTemperature')
var PropTypes = require('prop-types');
import { PageHeader } from 'react-bootstrap';

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
      temp : null
    };
  }

  componentDidMount() {

  this.interval = window.setInterval(function () {

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

    }.bind(this), 2000);
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
        <PrinterStatus props={this.state.status}/>
        <PrinterTemperature props={this.state.temp}/>
        <PrintProgress props={this.state.progress}/>
        <PrinterInfo props={this.state.info}/>
      </div>)
    }
  }

Printer.propTypes = {
  ip_address: PropTypes.string.isRequired,
  name : PropTypes.string.isRequired
}

module.exports = Printer;