import React from 'react';
import './alert.css';


import { connect } from 'react-redux';
import { fetchAlert } from '../actions';

function mapStateToProps(state) {
    return {

    };
}

export class Alert extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAlert());
    }
    render() {
        return (
            <div className="alert-container">
                <h1>Price</h1>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Alert);