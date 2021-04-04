import PropTypes from 'prop-types';
import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Confetti from 'react-confetti'

export default class PrintProgress extends React.Component
{
  constructor(props)
  {
    super(props);

    this.props = props;

    this.elementReference = React.createRef(this);

    this.state = {
      w: 0,
      h: 0,
      x: 0,
      y: 0,
    };

  }

  componentDidMount()
  {
    const rect = this.elementReference.current.getBoundingClientRect();

    this.setState({
      w: rect.width,
      h: rect.height,
      x: rect.x,
      y: rect.y
    });
  }


  render()
  {
    return (

      <div>
        <ProgressBar ref={this.elementReference} variant="success"
          now={this.props.percentage_completed}
          label={this.props.percentage_completed + "%"}>

          {this.props.percentage_completed > 98 &&
            <Confetti width={2000} height={2000} numberOfPieces='20' confettiSource={{
              w: this.state.w / 2,
              h: this.state.h / 2,
              x: this.state.x,
              y: this.state.y,
            }} />}
        </ProgressBar>

      </div>
    )
  }

}

PrintProgress.propTypes = {
  percentage_completed: PropTypes.number.isRequired
}
