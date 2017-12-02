var React = require('react');
var PropTypes = require('prop-types');
import { PanelGroup, Panel } from 'react-bootstrap';

function PrinterInfo (props) {
  return (
      <Panel collapsible header="Printer info" eventKey="1" className="test">
        <p>Firmware: {props.props.Firmware}</p>
        <p>S/N: {props.props.SN}</p>
        <p>Tool Count: {props.props['Tool Count']}</p>
        <p>Type: {props.props.X}</p>
      </Panel>
  )
}

PrinterInfo.propTypes = {
  props: PropTypes.object.isRequired,
}

module.exports = PrinterInfo;