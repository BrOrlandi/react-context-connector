import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connectContext from '../../src';
import CounterProvider from './CounterProvider';

const CounterDisplay = ({ value }) => (
  <div>
    Counter: {value}
  </div>
);

CounterDisplay.propTypes = {
  value: PropTypes.number,
};

const mapContextToProps = context => ({
  value: context.count,
});

const CounterDisplayWithContext = connectContext(CounterProvider,mapContextToProps)(CounterDisplay);

export default CounterDisplayWithContext;