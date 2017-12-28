import React from 'react';
import './alert.css';
import { connect } from 'react-redux';
import { removeAlert } from '../actions';


export class Alert extends React.Component {
    handleRemove(e) {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete this alert?') === true) {
            this.props.dispatch(removeAlert(e.currentTarget.id, this.props.number));
        }
    }

    render() {
        return (
            <div className='alert'>
                <h1 className='alert-price'>${this.props.price}</h1>
                <span id={this.props.alertId} number={this.props.number} onClick={e => this.handleRemove(e)} className='close'>&times;</span>
            </div>
        );
    }
}

export default connect()(Alert);
