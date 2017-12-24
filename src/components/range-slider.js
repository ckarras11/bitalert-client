import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-rangeslider';
import './range-slider.css';
import {setAlertPrice} from '../actions'

function mapStateToProps(state) {
  return {
    priceHistory: state.priceHistory,
    alertPrice: state.alertPrice
  };
}

class Horizontal extends React.Component {

  /* handleChangeStart = () => {
    console.log('Change event started')
  }; */

  handleChange = value => {
    this.props.dispatch(setAlertPrice(value))
  };

  /* handleChangeComplete = () => {
    console.log('Change event completed')
  }; */

  render() {
    let value = this.props.alertPrice
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={this.props.priceHistory[this.props.priceHistory.length -1].price * 2}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(Horizontal);