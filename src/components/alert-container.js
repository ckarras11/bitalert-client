import React from 'react';
import './alert.css';
import Alert from './alert'
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        alerts: state.alerts,
        serverMessage: state.serverMessage
    };
}

export class AlertContainer extends React.Component {
    
    render() {
        let message;
        if(this.props.serverMessage) {
            message = <h1 className="error-msg">{this.props.serverMessage}</h1>
        }
        const userAlerts = this.props.alerts.map((alert, index) => {
           return  <Alert key={index} number={alert.phoneNumber} price={alert.alert.price} alertId={alert.id}/> 
            
        })
        return (
            <div className="alert-container">
                <h1 className="alert-title">Alerts</h1>
                {userAlerts}
                {message}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(AlertContainer);