import React from 'react';
import { render} from 'react-dom';

import CounterDisplay from './CounterDisplay';
import CounterButtons from './CounterButtons';

import CounterProvider from './CounterProvider';

const App = () => (
  <CounterProvider>
    <div>
      <CounterDisplay label="Awesome counter"/>
      <CounterButtons />
    </div>
  </CounterProvider>
);

render(<App />, document.getElementById("root"));