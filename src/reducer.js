import {
    TOGGLE_MODAL,
    FETCH_PRICE_SUCCESS,
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
            state = Object.assign({}, state, {
                showModal: false
            });
        }
        console.log(state);
        return state;
    }
    if(action.type === FETCH_PRICE_SUCCESS) {
        state = Object.assign({}, initialState, {
            priceHistory: action.res
        })
        return state;
    }
   return state;
    
}