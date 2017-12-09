import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Button from './button';

describe('<Button />', () => {
    it('Renders without crashing', () => {
        shallow(<Button />);
    })
})