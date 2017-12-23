import React, { Component } from 'react';
import './button.css';

class SubmitButton extends Component {
    render() {
        return (
            <div>
                <input type="submit" className="success button" onClick={this.props.action}/>
            </div>
        );
    }
}

export default SubmitButton;