import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

export default function PrintProgress(props)
{
  return (
    <div>
      <ProgressBar variant="success"
        now={props.props.PercentageCompleted}
        label={props.props.PercentageCompleted + "%"} />
    </div>
  )
}

PrintProgress.propTypes = {
  props: PropTypes.object.isRequired
}
