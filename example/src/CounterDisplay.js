import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connectContext from '../../src';
import CounterProvider from './CounterProvider';

const CounterDisplay = ({ value, label }) => (
  <div id="display">
    {label}: {value}
  </div>
);

CounterDisplay.propTypes = {
  value: PropTypes.number,
};

// map context state and functions to component props
const mapContextToProps = context => ({
  value: context.count,
});

const CounterDisplayWithContext = connectContext(CounterProvider,mapContextToProps)(CounterDisplay);

export default CounterDisplayWithContext;