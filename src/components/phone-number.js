import React from 'react';
import { connect } from 'react-redux';
import './phone-number.css';
import { setPhonenumber } from '../actions';


export class PhoneNumber extends React.Component {

    setNumber(e) {
        e.preventDefault();
        this.props.dispatch(setPhonenumber(e.target.value));
    }

    render() {
        return (
            <div className='phone-number-container'>
                <label>Phone Number:</label>
                <input type='tel' onChange={e => this.setNumber(e)} placeholder='(999)-999-9999'></input>
            </div>
        );
    }
}

export default connect()(PhoneNumber);