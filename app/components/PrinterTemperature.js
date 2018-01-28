var React = require('react');
var PropTypes = require('prop-types');
import { ProgressBar, Label } from 'react-bootstrap';

function PrinterTemperature (props) {
  var targetTemperature = parseInt(props.props.TargetTemperature);

  var temperature = parseInt(props.props.Temperature);

  if (targetTemperature == 0) {
    return (<div>
        <ProgressBar bsStyle="danger" now={temperature} max={220} label={"Temp: " + temperature + "°C"}/>
      </div>
      )
  }
  return (
      <div>
        <ProgressBar bsStyle="danger" now={temperature} max={targetTemperature} label={"Temp: " + temperature + " / " + targetTemperature + "°C"}/>
      </div>
  )
}

PrinterTemperature.propTypes = {
  props : PropTypes.object.isRequired
}

module.exports = PrinterTemperature;