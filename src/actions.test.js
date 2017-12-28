import * as actions from './actions';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store'
import { API_BASE_URL } from './config';
import thunk from 'redux-thunk';

import {
    toggleModal,
    TOGGLE_MODAL,
    fetchPrice,
    FETCH_PRICE_SUCCESS,
    fetchPriceSuccess,
    FETCH_PRICE_INITIATED,
    fetchPriceInitiated,
    fetchAlert,
    fetchAlertSuccess,
    FETCH_ALERT_SUCCESS,
    FETCH_ALERT_EMPTY,
    fetchAlertEmpty,
    SET_PHONENUMBER,
    setPhonenumber,
    SET_ALERT_PRICE,
    setAlertPrice,
    createAlertSuccess,
    CREATE_ALERT_SUCCESS,
    createAlert,
    removeAlert
}
    from './actions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('toggleModal', () => {
    it('Should return the action', () => {
        const action = toggleModal();
        expect(action.type).toEqual(TOGGLE_MODAL);
    })
})
describe('fetchPriceSuccess', () => {
    it('Should return the action', () => {
        const price = {price: 17000, timestamp: 1234512431};
        const action = fetchPriceSuccess(price);
        expect(action.type).toEqual(FETCH_PRICE_SUCCESS);
        expect(action.res).toEqual(price);
    })
})
describe('fetchPriceInitiated', () => {
    it('Should return the action', () => {
        const action = fetchPriceInitiated();
        expect(action.type).toEqual(FETCH_PRICE_INITIATED);
    })
})
describe('fetchAlertSuccess', () => {
    it('Should return the action', () => {
        const alert = {phoneNumber: 1234561234, alert: {removeFlag: false, created: 123431241, price: 17000}};
        const action = fetchAlertSuccess(alert)
        expect(action.type).toEqual(FETCH_ALERT_SUCCESS);
        expect(action.res).toEqual(alert);
    })
})
describe('fetchAlertEmpty', () => {
    it('Should return the action', () => {
        const action = fetchAlertEmpty();
        expect(action.type).toEqual(FETCH_ALERT_EMPTY);
    })
})
describe('setPhonenumber', () => {
    it('Should return the action', () => {
        const phoneNumber = 1234561234
        const action = setPhonenumber(phoneNumber)
        expect(action.type).toEqual(SET_PHONENUMBER);
        expect(action.phoneNumber).toEqual(phoneNumber);
    })
})
describe('setAlertPrice', () => {
    it('Should return the action', () => {
        const price = 17000
        const action = setAlertPrice(price)
        expect(action.type).toEqual(SET_ALERT_PRICE);
        expect(action.alertPrice).toEqual(price);
    })
})
describe('createAlertSuccess', () => {
    it('Should return the action', () => {
        const alert = {phoneNumber: 1234561234, alert: {removeFlag: false, created: 123431241, price: 17000}};
        const action = createAlertSuccess(alert)
        expect(action.type).toEqual(CREATE_ALERT_SUCCESS);
        expect(action.res).toEqual(alert);
    })
})
describe('createAlert', () => {
    it('Should return the action', () => {
        const alert = {phoneNumber: 1234561234, alert: {removeFlag: false, created: 123431241, price: 17000}};
        fetchMock.postOnce(`${API_BASE_URL}/api/alerts`, {body: alert});
        const store = mockStore({});
        return store.dispatch(actions.createAlert(alert.phoneNumber, alert.alert.price)).then(() => {
            let action = store.getActions()[0]
            expect(action.type).toEqual(CREATE_ALERT_SUCCESS)
          })
    })
})

