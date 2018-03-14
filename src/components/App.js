import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Modal from './modal';
import Logo from './logo';
import Button from './button';
import Footer from './footer';
import Price from './price';
import Chart from './chart';
import Loader from './loader';

function mapStateToProps(state) {
  return {
    showModal: state.reducer.showModal,
    isLoading: state.reducer.isLoading,
  };
}

export function App(props) {
  let modal;
  let chart;
  if (props.showModal) {
    modal = <Modal />;
  }
  if (props.isLoading) {
    chart = <Loader />;
  } else if (props.isLoading === false) {
    chart = <Chart />;
  }
  return (
    <section className='App'>
      {modal}
      <Logo />
      {/* <h1 className='weather'>Due to weather conditions this service may be temporarily unavailable</h1> */}
      <Price />
      {chart}
      <Button buttonMessage="Set New Alert" buttonType="info" />
      <Button buttonMessage="Edit Alerts" buttonType="danger" />
      <Footer />
    </section>
  );
}

export default connect(mapStateToProps)(App);
