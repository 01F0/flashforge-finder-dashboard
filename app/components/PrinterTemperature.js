var React = require('react');
var PropTypes = require('prop-types');
import { ProgressBar, Label } from 'react-bootstrap';

function PrinterTemperature (props) {

  if (props.props.TargetTemperature == "0") {
    return (<div>
        <ProgressBar bsStyle="danger" now={parseInt(props.props.Temperature)} max={220} label={props.props.Temperature + "°C"}/>
      </div>
      )
  }
  return (
      <div>
        <ProgressBar bsStyle="danger" now={parseInt(props.props.Temperature)} max={parseInt(props.props.TargetTemperature)} label={props.props.Temperature + " / " + props.props.TargetTemperature + "°C"}/>
      </div>
  )
}

PrinterTemperature.propTypes = {
  props : PropTypes.object.isRequired
}

module.exports = PrinterTemperature;