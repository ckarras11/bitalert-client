import React, { Component } from 'react';
import './App.css';
import Logo from './logo';
import Button from './button';
import Refresh from './refresh';
import PhoneNumber from './phone-number'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Button buttonMessage={'Set New Alert'} buttonType={'info button'} />
        <Button buttonMessage={'Edit Alerts'} buttonType={'danger button'} />
        <Button buttonMessage={'Submit'} buttonType={'success button'} />
        <Refresh />
        <PhoneNumber />
        <Footer />
      </div>
    );
  }
}

export default App;
