import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connectContext from '../../src';
import CounterProvider from './CounterProvider';

const CounterButtons = ({ increment, decrement }) => (
  <div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

CounterButtons.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapContextToProps = context => ({
  increment: context.incrementCount,
  decrement: context.decrementCount,
});

const CounterButtonsWithContext = connectContext(CounterProvider,mapContextToProps)(CounterButtons);

export default CounterButtonsWithContext;