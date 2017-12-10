import React, { Component } from 'react';
import Refresh from './refresh';
import { connect } from 'react-redux';
import './price.css';


function mapStateToProps(state) {
    return {
        priceHistory: state.priceHistory
    };
}

class Price extends Component {
    componentDidMount() {
        this.getPrice();
    }
    getPrice () {
        /* fetch('https://api.coinbase.com/v2/prices/spot?currency=USD')
            .then(res => {
                console.log(res);
            }) */
            console.log('GET PRICE')

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