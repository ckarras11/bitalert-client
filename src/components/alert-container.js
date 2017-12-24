import React from 'react';
import './alert.css';
import Alert from './alert'
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        alerts: state.alerts
    };
}

export class AlertContainer extends React.Component {
    
    render() {
        const userAlerts = this.props.alerts.map((alert, index) => {
           return  <Alert key={index} number={alert.phoneNumber} price={alert.alert.price} alertId={alert.id}/> 
            
        })
        return (
            <div className="alert-container">
                <h1 className="alert-title">Alerts</h1>
                {userAlerts}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(AlertContainer);