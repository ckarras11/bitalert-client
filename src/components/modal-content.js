import React from 'react'
import { connect } from 'react-redux';
import { fetchAlert } from '../actions';
import PhoneNumber from './phone-number';
import Horizontal from './range-slider';
import AlertContainer from './alert-container';
import Submit from './submit-button';

function mapStateToProps(state) {
    return {
        modalTitle: state.modalTitle,
        modalType: state.modalType,
        phoneNumber: state.phoneNumber

    };
}

export class ModalContent extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler() {
        this.props.dispatch(fetchAlert(this.props.phoneNumber));
        
    }

    render() {
        let modalContent
        if (this.props.modalType === 'info') {
            modalContent = <Horizontal />
        } else if (this.props.modalType === 'danger') {
            modalContent = <AlertContainer />
        }
        return (
            <div className="modal-content">
                <h2 className="modal-title">{this.props.modalTitle}</h2>
                <hr />
                <PhoneNumber />
                {modalContent}
                <Submit action={this.submitHandler} />
            </div>
        );
    }

}

export default connect(
    mapStateToProps,
)(ModalContent);