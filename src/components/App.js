import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Modal from './modal'
import Logo from './logo';
import Button from './button';
import Footer from './footer';
import Price from './price';
import Chart from './chart';
import Spinner from 'react-spinkit';

export function App(props) {
  let modal;
  let chart;
  if (props.showModal) {
      modal = <Modal />;
  }
  if(props.isLoading) {
    chart = <Spinner name="circle"/>
  } else if (props.isLoading === false) {
    chart = <Chart />
  }
    return (
      <section className="App">
        {modal}
        <Logo />
        <Price />
        {chart}
        <Button buttonMessage={'Set New Alert'} buttonType={'info'} />
        <Button buttonMessage={'Edit Alerts'} buttonType={'danger'} />
        <Footer />
      </section>
    );
  }

const mapStateToProps = state => ({
  showModal: state.showModal,
  isLoading: state.isLoading
});

export default connect(mapStateToProps)(App);
