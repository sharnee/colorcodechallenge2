import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ACTION from './action.js';
import colorcode from './colorcode.js'

it('Finds the correct ohm Value', () => {
   expect(ACTION.ohmValue(1,2,3)).toBe(9);
});


it('Finds the correct min tolerance', () => {
   expect(ACTION.minValue(1,2,3,4)).toBe(-27);
});

it('Finds the correct max tolerance', () => {
 expect(ACTION.maxValue(1,2,3,4)).toBe(45);
});
