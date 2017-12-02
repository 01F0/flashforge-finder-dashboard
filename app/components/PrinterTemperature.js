var React = require('react');
var PropTypes = require('prop-types');
import { ProgressBar, Label } from 'react-bootstrap';

function PrinterTemperature (props) {
  return (
      <div>
        <ProgressBar bsStyle="danger" now={parseInt(props.props.Temperature)} max={parseInt(props.props.TargetTemperature)} label={"Temp: " + props.props.Temperature + " / " + props.props.TargetTemperature + "°C"}/>
      </div>
  )
}

PrinterTemperature.propTypes = {
  props : PropTypes.object.isRequired
}

module.exports = PrinterTemperature;