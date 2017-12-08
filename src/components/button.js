import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    render() {
        return (
            <div>
                <button className={this.props.buttonType}>{this.props.buttonMessage}</button>
            </div>
        );
    }
}

export default Button;