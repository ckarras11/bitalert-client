import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleModal} from '../actions';
import './button.css';

export class Button extends Component {
    showModal(e) {
        e.preventDefault();
        this.props.dispatch(toggleModal(this.props.buttonType));
    }
    render() {
        return (
            <div className="button-container">
                <button onClick={e => {this.showModal(e)}}className={`${this.props.buttonType} button`}>{this.props.buttonMessage}</button>
            </div>
        );
    }
}

export default connect()(Button);