import React, { Component } from 'react';
import Refresh from './refresh';
import { connect } from 'react-redux';
import { getPrice } from '../actions';
import './price.css';


function mapStateToProps(state) {
    console.log(state)
    return {
        priceHistory: state.priceHistory,
    };
}

class Price extends Component {

    componentWillMount() {
        this.props.dispatch(getPrice());
    }
    getCurrentPrice(e) {
        e.preventDefault();
        this.props.dispatch(getPrice());
    }
    componentWillUpdate() {
        console.log(this.props.priceHistory.length)
    }

    render() {
        console.log(this.props.priceHistory)
        console.log(this.props.priceHistory.length)

        return (
            <div className="price-container">
                <h1 className='price'>BTC ${this.props.priceHistory}</h1>
                <Refresh onClick={e => { this.getCurrentPrice(e) }} />
            </div>
        );

    }
}

export default connect(
    mapStateToProps,
)(Price);