import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import PhoneNumber from './phone-number';

describe('<PhoneNumber />', () => {
    it('Renders without crashing', () => {
        shallow(<PhoneNumber />);
    })
})