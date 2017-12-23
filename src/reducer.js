import {
    TOGGLE_MODAL,
    FETCH_PRICE_SUCCESS,
    FETCH_ALERT_SUCCESS,
    SET_PHONENUMBER
} from './actions'


const initialState = {
    showModal: false,
    modalTitle: '',
    alerts: [],
    modalType: '',
    priceHistory: [],
    phoneNumber: 0

}

export default (state, action) => {
    state = state || initialState;

    if(action.type === TOGGLE_MODAL) {
        if (action.modalContent === 'info') {
            state = Object.assign({}, state, {
                showModal: !state.showModal,
                modalTitle: 'Set New Alert',
                modalType: 'info'
            });
        } else if (action.modalContent === 'danger') {
            state = Object.assign({}, state, {
                showModal: !state.showModal,
                modalTitle: 'Edit Alerts',
                modalType: 'danger',
            });
        } else {
            state = Object.assign({}, state, {
                showModal: false,
                alerts: [],
                phoneNumber: 0
            });
        }
        return state;
    }
    if(action.type === FETCH_PRICE_SUCCESS) {
        state = Object.assign({}, state, {
            priceHistory: action.res
        })
        return state;
    }
    if(action.type === FETCH_ALERT_SUCCESS) {
        state = Object.assign({}, state, {
            alerts: action.res
        })
    }
    if(action.type === SET_PHONENUMBER) {
        state = Object.assign({}, state, {
            phoneNumber: action.phoneNumber
        })
    }
   return state;
    
}