# react-context-connector
[![npm version](https://badge.fury.io/js/react-context-connector.svg)](https://badge.fury.io/js/react-context-connector)

React HOC to the new Context API to keep the use as simple as React-Redux connect HOC.

## Usage

* * *

### connectContext(ContextProvider, mapContextToProps) 

Generates a HOC to wrap a component with context values in props.

**Parameters**

**ContextProvider**: `Object`, an Object with `Consumer` attribute, like the Context object or a Custom Provider

**mapContextToProps**: `function`, a functiona that receives the context from `Context.Consumer` and returns a object to be used as props for the wrapped component.

**Returns**: `Component`, A HOC which pass context state into props to child component.

* * *

## Example

### Create your Context Provider

```js
const CounterContext = React.createContext();

class CounterProvider extends Component {
  state = {
    count: 0,
    incrementCount: () => {
      ...
    },

    decrementCount: () => {
      ...
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
```

### Create your component and connect it to the Context

```js
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

// map context state and functions to component props
const mapContextToProps = context => ({
  value: context.count,
});

const CounterDisplayWithContext = connectContext(CounterProvider,mapContextToProps)(CounterDisplay);

export default CounterDisplayWithContext;
```


### Create your App and wrap with the Context Provider

```js
const App = () => (
  <CounterProvider>
    <div>
      <CounterDisplay />
      <CounterButtons />
    </div>
  </CounterProvider>
);

render(<App />, document.getElementById("root"));
```


Check the example folder for more details.