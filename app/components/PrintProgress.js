var React = require('react');
var PropTypes = require('prop-types');
import { ProgressBar, Label } from 'react-bootstrap';

function PrintProgress (props) {
  return (
    <div>
      <ProgressBar active bsStyle="success"
          now={props.props.PercentageCompleted}
          label={"Progress: " + props.props.PercentageCompleted + "%"}/>
    </div>
  )
}

PrintProgress.propTypes = {
  props : PropTypes.object.isRequired
}

module.exports = PrintProgress;