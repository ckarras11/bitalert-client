  import { API_BASE_URL } from './config';


export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (modalContent, alertPrice) => ({
    type: TOGGLE_MODAL,
    modalContent,
    alertPrice,
})

export const FETCH_PRICE_SUCCESS = 'FETCH_PRICE_SUCCESS';
export const fetchPriceSuccess = (res) => ({
    type: FETCH_PRICE_SUCCESS,
    res
    
})

export function fetchPrice () {
    return function (dispatch) {
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

export function fetchAlert() {
    return function () {
        return fetch(`${API_BASE_URL}/api/alerts`, {method: 'GET', mode: 'cors', headers: {Accept: 'application/json'}})
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            console.log(json)
            //dispatch(fetchAlertSuccess())
        })
    }
}