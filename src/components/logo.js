import React from 'react';
import './logo.css';


const Logo = () => {
    return (
        <img className='logo' src={require('../bitalert.png')} alt='bitalert logo'/>
    );
};

export default Logo;