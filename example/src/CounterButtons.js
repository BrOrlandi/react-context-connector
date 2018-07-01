import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connectContext from '../../src';
import CounterProvider from './CounterProvider';

const CounterButtons = ({ increment, decrement }) => (
  <div id="buttons">
    <button id="increment" onClick={increment}>Increment</button>
    <button id="decrement" onClick={decrement}>Decrement</button>
  </div>
);

CounterButtons.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

// map context state and functions to component props
const mapContextToProps = context => ({
  increment: context.incrementCount,
  decrement: context.decrementCount,
});

const CounterButtonsWithContext = connectContext(CounterProvider,mapContextToProps)(CounterButtons);

export default CounterButtonsWithContext;