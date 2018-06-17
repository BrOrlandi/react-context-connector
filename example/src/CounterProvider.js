import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CounterContext = React.createContext();

class CounterProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    count: 0,

    incrementCount: () => {
      this.setState({
        count: this.state.count+1,
      });
    },

    decrementCount: () => {
      this.setState({
        count: this.state.count-1,
      });
    },
  }

  render() {
    return (
    <CounterContext.Provider value={this.state}>
      {this.props.children}
    </CounterContext.Provider>
    );
  }
}

CounterProvider.Consumer = CounterContext.Consumer;

export default CounterProvider;