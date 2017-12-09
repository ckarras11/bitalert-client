import React, { Component } from 'react';
import './phone-number.css';
class PhoneNumber extends Component {
    render() {
        return (
            <div className='phone-number-container'>
                <label>Phone Number:</label>
                <input type='tel' placeholder='(999)-999-9999'></input>
            </div>
        );
    }
}

export default PhoneNumber;