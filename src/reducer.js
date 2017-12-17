import {
    TOGGLE_MODAL,
    GET_PRICE,
} from './actions'

const initialState = {
    showModal: false,
    modalTitle: '',
    alertPrice: 0,
    modalType: '',
    priceHistory: [],

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
        } else if (action.modalContent === 'success') {
            state = Object.assign({}, state, {
                showModal: !state.showModal,
                alertPrice: action.alertPrice,
            });
        } else {
            state = Object.assign({}, initialState, {
            });
        }
        console.log(state)
        return state;
    }
    if(action.type === GET_PRICE) {
        console.log('get price');
    }
    return state
}