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
           return  <Alert key={index} price={alert.alert.price} />
            
        })
        return (
            <div className="alert-container">
                {userAlerts}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(AlertContainer);