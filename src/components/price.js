import React, { Component } from 'react';
import Refresh from './refresh';
import './price.css';

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
        return (
            <div className="price-container">
                <h1 className='price'>BTC $17500.99</h1>
                <Refresh />
            </div>
        );
    }
}

export default Price;