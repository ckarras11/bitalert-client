import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Chart from './chart';

describe('<Chart />', () => {
    it('Renders without crashing', () => {
        shallow(<Chart />);
    })
})