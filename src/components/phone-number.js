import React, { Component } from 'react';

class PhoneNumber extends Component {
    render() {
        return (
            <div>
                <label>Phone Number</label>
                <input type='tel' placeholder='(999)-999-9999'></input>
            </div>
        );
    }
}

export default PhoneNumber;