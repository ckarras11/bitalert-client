import React from 'react';
import './alert.css';

export default function Alert(props) {
    return (
        <div className="alert">
            <h1>{props.price}</h1>
        </div>
    );
};
