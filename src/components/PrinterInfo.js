import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap';

export default function PrinterInfo(props)
{
  return (
    <Card eventKey="1" >
      <Card.Header as="h5">Printer Overview</Card.Header>
      <Card.Body>
        <p><b>Firmware:</b> {props.props.Firmware}</p>
        <p><b>S/N:</b> {props.props.SN}</p>
        <p><b>Tool Count:</b> {props.props['Tool Count']}</p>
        <p><b>Type:</b> {props.props.X}</p>
      </Card.Body>
    </Card>
  )
}

PrinterInfo.propTypes = {
  props: PropTypes.object.isRequired,
}
