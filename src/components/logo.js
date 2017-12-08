import React from 'react';
import './logo.css';

export default function Logo() {
    return(
        <img className='logo' src={require('../bitalert.png')} alt='bitalert logo'/>
    )
}