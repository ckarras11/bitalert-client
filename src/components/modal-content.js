import React from 'react';
import { connect } from 'react-redux';
import { fetchAlert, createAlert } from '../actions';
import Horizontal from './range-slider';
import AlertContainer from './alert-container';
import Submit from './submit-button';
import AlertForm from './alert-form';
import { renderField } from './alert-form';
function mapStateToProps(state) {
    return {
        modalTitle: state.reducer.modalTitle,
        modalType: state.reducer.modalType,
        phoneNumber: state.reducer.phoneNumber,
        alertPrice: state.reducer.alertPrice,
        contactType: state.reducer.contactType,

    };
}

export class ModalContent extends React.Component {
    constructor(props) {
        super(props);
        this.submitEditHandler = this.submitEditHandler.bind(this);
        this.submitCreateHandler = this.submitCreateHandler.bind(this);
    }

    submitEditHandler() {
        if(this.props.contactType === 'phoneNumber') {
            const number = this.props.phoneNumber.replace(/\D/g, '');
            if (number === '') {
                alert('Please enter a valid phone number');
            } else {
                this.props.dispatch(fetchAlert(number));
            }
        } else {
            console.log('not a phone number')
        }
    }
    submitCreateHandler() {
        if(this.props.contactType === 'phoneNumber') {
            const number = this.props.phoneNumber.replace(/\D/g, '');
            if (number === '') {
                alert('Please enter a valid phone number');
            } else {
                this.props.dispatch(createAlert(number, this.props.alertPrice));
            }
        } else {
            console.log('not a phoneNumber')
        }
    }

    render() {
        let modalContent;
        if (this.props.modalType === 'info') {
            modalContent =  <div className='width-100'>
                                <Submit action={this.submitCreateHandler} />
                            </div>;
        } else if (this.props.modalType === 'danger') {
            modalContent =  <div className='width-100'>
                                <AlertContainer />
                                <Submit action={this.submitEditHandler} />
                            </div>;
        }
        return (
            <div className='modal-content'>
                <h2 className='modal-title'>{this.props.modalTitle}</h2>
                <hr />
                <AlertForm />
                {modalContent}
            </div>
        );
    }

}

export default connect(mapStateToProps)(ModalContent);