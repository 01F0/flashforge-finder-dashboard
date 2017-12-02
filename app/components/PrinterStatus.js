var React = require('react');
var PropTypes = require('prop-types');
import { Button } from 'react-bootstrap';

function PrinterStatus (props) {
  var machineStatus = ""
  var headStatus = ""
  if (props.props.MachineStatus == "BUILDING_FROM_SD") {
    machineStatus = "Building from SD card"
  }

  if (props.props.MachineStatus == "READY") {
    machineStatus = "Ready"
  }

  if (props.props.MoveMode == "READY") {
    headStatus = "Ready"
  }

  if (props.props.MoveMode == "MOVING") {
    headStatus = "Moving"
  }
  else {
    headStatus = machineStatus;
  }

  return (
    <div>
      <div className="inlinelist">
        <p>{"Machine Status: " + machineStatus}</p>
      </div>
       <div className="inlinelist">
        <p>{"Head status: " + headStatus}</p>
        </div>
    </div>
  )
}

PrinterStatus.propTypes = {
  props : PropTypes.object.isRequired
}

module.exports = PrinterStatus;