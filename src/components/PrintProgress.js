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
        </ProgressBar>

        {this.props.percentage_completed === 100 &&
            <Confetti width={2000} height={2000} numberOfPieces='50' 
            initialVelocityX={{min: 0, max: 0}} 
            gravity={0.1}
            confettiSource={{
              w: this.state.w,
              h: this.state.h,
              x: this.state.x,
              y: 0,
            }} />}

      </div>
    )
  }

}

PrintProgress.propTypes = {
  percentage_completed: PropTypes.number.isRequired
}
