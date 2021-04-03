import PropTypes from 'prop-types'

export default function PrinterStatus(props)
{
  var machineStatus = ""
  var headStatus = ""
  if (props.props.MachineStatus === "BUILDING_FROM_SD")
  {
    machineStatus = "Building from SD card 💾"
  }

  if (props.props.MachineStatus === "READY")
  {
    machineStatus = "Ready ✔"
  }

  if (props.props.MoveMode === "READY")
  {
    headStatus = "Ready ✔"
  }

  if (props.props.MoveMode === "MOVING")
  {
    headStatus = "Moving 🏃‍♀️"
  }
  else
  {
    headStatus = machineStatus;
  }

  return (
    <div>
      <div className="inlinelist">
        <p><b>Machine Status: </b>{machineStatus}</p>
      </div>
      <div className="inlinelist">
        <p><b>Head Status: </b>{headStatus}</p>
      </div>
    </div>
  )
}

PrinterStatus.propTypes = {
  props: PropTypes.object.isRequired
}
