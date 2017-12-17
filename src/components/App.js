import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Modal from './modal'
import Logo from './logo';
import Button from './button';
import Footer from './footer';
import Price from './price';
import Chart from './chart';

export function App(props) {
  let modal;
  if (props.showModal) {
      modal = <Modal />;
  }
    return (
      <section className="App">
        {modal}
        <Logo />
        <Price />
        <Chart />
        <Button buttonMessage={'Set New Alert'} buttonType={'info'} />
        <Button buttonMessage={'Edit Alerts'} buttonType={'danger'} />
        <Footer />
      </section>
    );
  }

const mapStateToProps = state => ({
  showModal: state.showModal
});

export default connect(mapStateToProps)(App);
