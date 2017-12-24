import {
    TOGGLE_MODAL,
    FETCH_PRICE_SUCCESS,
    FETCH_ALERT_SUCCESS,
    CREATE_ALERT_SUCCESS,
    SET_PHONENUMBER,
    SET_ALERT_PRICE
} from './actions'


const initialState = {
    showModal: false,
    modalTitle: '',
    modalType: '',
    alerts: [],
    priceHistory: [],
    phoneNumber: '',
    alertPrice: 0,

}

export default (state, action) => {
    state = state || initialState;

    if(action.type === TOGGLE_MODAL) {
        if (action.modalContent === 'info') {
            state = Object.assign({}, state, {
                showModal: !state.showModal,
                modalTitle: 'Set New Alert',
                modalType: 'info',
                alertPrice: state.priceHistory[state.priceHistory.length -1].price
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
                phoneNumber: ''
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
        return state;
    }
    if(action.type === SET_PHONENUMBER) {
        state = Object.assign({}, state, {
            phoneNumber: action.phoneNumber
        })
        return state;
    }
    if(action.type === SET_ALERT_PRICE) {
        state = Object.assign({}, state, {
            alertPrice: action.alertPrice
        })
        return state;
    }
    if(action.type === CREATE_ALERT_SUCCESS) {
        alert(`Alert set for ${action.res.alert.price}`)
        state = Object.assign({}, state, {
            showModal: false
        })
    }
   return state;  
}