import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { PhoneNumber } from './phone-number';

describe('<PhoneNumber />', () => {
    it('Renders without crashing', () => {
        shallow(<PhoneNumber />);
    });
    it('Should fire the setNumber callback when changed', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<PhoneNumber dispatch={dispatch} />);
        wrapper.find('input').simulate('change', {
            preventDefault() { },
        });
        expect(dispatch).toHaveBeenCalledWith({ phoneNumber: '', type: 'SET_PHONENUMBER' });
    });
});
