import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ACTION from './action.js'
import colorcode from './colorcode.js'

it('display correct data on index', () => {
  expect(ACTION.optionValue(optionsIndex, code)).tobe('code.multiplier')
})