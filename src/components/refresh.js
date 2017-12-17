import React, { Component } from 'react';

class Refresh extends Component {
    render() {
        return (
            <div className="refresh-container">
                <button onClick={e => console.log('refresh')}className="refresh"><i className="fa fa-refresh" aria-hidden="true"></i></button>
            </div>
        );
    }
}

export default Refresh;