  import { API_BASE_URL } from './config';

// Toggles the modal on and off, also determines the modal to display
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (modalContent, alertPrice) => ({
    type: TOGGLE_MODAL,
    modalContent,
    alertPrice,
})
// Runs when there is a succesful call to the database to get the current price
// Turns off the loading wheel
export const FETCH_PRICE_SUCCESS = 'FETCH_PRICE_SUCCESS';
export const fetchPriceSuccess = (res) => ({
    type: FETCH_PRICE_SUCCESS,
    res
    
})
// Initiates the loading wheel while the database is being queried for the current price
export const FETCH_PRICE_INITIATED = 'FETCH_PRICE_INITIATED';
export const fetchPriceInitiated = () => ({
    type: FETCH_PRICE_INITIATED,
    
})
// Runs when there is a succesful call to the db for alerts
export const FETCH_ALERT_SUCCESS = 'FETCH_ALERT_SUCCESS';
export const fetchAlertSuccess = (res) => ({
    type: FETCH_ALERT_SUCCESS,
    res
})

export const FETCH_ALERT_EMPTY = 'FETCH_ALERT_EMPTY';
export const fetchAlertEmpty = () => ({
    type: FETCH_ALERT_EMPTY,
})
// Sets the state for
export const SET_PHONENUMBER = 'SET_PHONENUMBER';
export const setPhonenumber = (phoneNumber) => ({
    type: SET_PHONENUMBER,
    phoneNumber
})

export const SET_ALERT_PRICE = 'SET_ALERT_PRICE';
export const setAlertPrice = (alertPrice) => ({
    type: SET_ALERT_PRICE,
    alertPrice
})

export const CREATE_ALERT_SUCCESS = 'CREATE_ALERT_SUCCESS';
export const createAlertSuccess = (res) => ({
    type: CREATE_ALERT_SUCCESS,
    res
})

export function createAlert(phoneNumber, alertPrice) {
    return function (dispatch) {
        return fetch(`${API_BASE_URL}/api/alerts`, {method: 'POST', mode: 'cors', body: JSON.stringify({phoneNumber, alert: {price: alertPrice}}), headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            dispatch(createAlertSuccess(json))
        })
    }
}

export function removeAlert(id, number) {
    return function (dispatch) {
        return fetch(`${API_BASE_URL}/api/alerts/${id}`, {method: 'DELETE', mode: 'cors', headers: {Accept: 'application/json'}})
        .then((res) => {  
            dispatch(fetchAlert(number))
        })
    }
}

export function fetchPrice () {
    return function (dispatch) {
        dispatch(fetchPriceInitiated())
        return fetch(`${API_BASE_URL}/api/price`, {method: 'GET', mode: 'cors', headers: {Accept: 'application/json'}})
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            json.sort(function(a,b) {
                return new Date(a.timestamp) - new Date(b.timestamp)
            })
            dispatch(fetchPriceSuccess(json))
        })

    }
}

export function fetchAlert(phoneNumber) {
    return function (dispatch) {
        return fetch(`${API_BASE_URL}/api/alerts/${phoneNumber}`, {method: 'GET', mode: 'cors', headers: {Accept: 'application/json'}})
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            if(json.length === 0) {
                dispatch(fetchAlertEmpty())
            } else {
                dispatch(fetchAlertSuccess(json))
            }
            
        })
    }
}