import React from 'react'
import { connect } from 'react-redux';
import { fetchAlert, createAlert} from '../actions';
import PhoneNumber from './phone-number';
import Horizontal from './range-slider';
import AlertContainer from './alert-container';
import Submit from './submit-button';

function mapStateToProps(state) {
    return {
        modalTitle: state.modalTitle,
        modalType: state.modalType,
        phoneNumber: state.phoneNumber,
        alertPrice: state.alertPrice,

    };
}

export class ModalContent extends React.Component {
    constructor(props) {
        super(props);
        this.submitEditHandler = this.submitEditHandler.bind(this);
        this.submitCreateHandler = this.submitCreateHandler.bind(this);
    }

    submitEditHandler() {
        this.props.dispatch(fetchAlert(this.props.phoneNumber));
        
    }
    submitCreateHandler() {
        const number = this.props.phoneNumber.replace(/\D/g,'')
        if(number === '') {
            alert('Please enter a valid phone number')
        } else {
            this.props.dispatch(createAlert(number, this.props.alertPrice));
        }
    }

    render() {
        let modalContent
        if (this.props.modalType === 'info') {
            modalContent = <div className="width-100">
                                <Horizontal />
                                <Submit action={this.submitCreateHandler} />
                            </div>
        } else if (this.props.modalType === 'danger') {
            modalContent =  <div className="width-100">
                                <AlertContainer />
                                <Submit action={this.submitEditHandler} />
                            </div>
        }
        return (
            <div className="modal-content">
                <h2 className="modal-title">{this.props.modalTitle}</h2>
                <hr />
                <PhoneNumber />
                {modalContent}
                
            </div>
        );
    }

}

export default connect(
    mapStateToProps,
)(ModalContent);