import React from 'react'
import PropTypes from 'prop-types'
import { ProgressBar } from 'react-bootstrap';

export default function PrinterTemperature(props)
{

  if (props.props.TargetTemperature === "0")
  {
    return (<div>
      <ProgressBar variant="danger" now={parseInt(props.props.Temperature)} max={220} label={props.props.Temperature + "°C"} />
    </div>
    )
  }
  return (
    <div>
      <ProgressBar variant="danger" now={parseInt(props.props.Temperature)} max={parseInt(props.props.TargetTemperature)} label={props.props.Temperature + " / " + props.props.TargetTemperature + "°C"} />
    </div>
  )
}

PrinterTemperature.propTypes = {
  props: PropTypes.object.isRequired
}
