import React, { Component } from 'react';
import Refresh from './refresh';
import { connect } from 'react-redux';
import { getPrice } from '../actions';
import './price.css';


function mapStateToProps(state) {
    return {
        priceHistory: state.priceHistory
    };
}

class Price extends Component {
    componentDidMount() {
        this.props.dispatch(getPrice());
    }

    render() {
        let currentPrice = this.props.priceHistory.length - 1
        return (
            <div className="price-container">
                <h1 className='price'>BTC ${this.props.priceHistory[currentPrice]}</h1>
                <Refresh />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Price);