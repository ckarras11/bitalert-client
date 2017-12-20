import React from 'react'
import { connect } from 'react-redux';
import PhoneNumber from './phone-number';
import Button from './button';
import Horizontal from './range-slider';
import Alert from './alert'

function mapStateToProps(state) {
    return {
        modalTitle: state.modalTitle,
        modalType: state.modalType,

    };
}

export function ModalContent(props) {
    let modalContent
    if (props.modalType === 'info') {
        modalContent = <Horizontal />
    } else if (props.modalType === 'danger'){
        modalContent = <Alert />
    }
        return (
            <div className="modal-content">
                <h2 className="modal-title">{props.modalTitle}</h2>
                <hr />
                <PhoneNumber />
                {modalContent}
                <Button buttonMessage={'Submit'} buttonType={'success'} />
                
            </div>
        );
    }

export default connect(
    mapStateToProps,
)(ModalContent);