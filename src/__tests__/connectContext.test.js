import React from 'react';
import renderer from 'react-test-renderer';
// import connectContext from '../index';
import CounterDisplay from '../../example/src/CounterDisplay';
import CounterButtons from '../../example/src/CounterButtons';

import CounterProvider from '../../example/src/CounterProvider';

const AppTest = (
  <CounterProvider>
    <div>
      <CounterDisplay label='Test counter'/>
      <CounterButtons />
    </div>
  </CounterProvider>
)

describe('react-context-connector', () => {
  it('should receive the right props from context', () => {
    const counterRendered = renderer.create(AppTest);

    const display = counterRendered.root.findByProps({ id: "display" }).parent;
    const buttons = counterRendered.root.findByProps({ id: "buttons" }).parent;

    expect(display.props).toEqual({ value: 0, label: 'Test counter' });
    expect(Object.keys(buttons.props)).toEqual(['increment', 'decrement']);
    expect(buttons.props.increment).toBeInstanceOf(Function);
    expect(buttons.props.decrement).toBeInstanceOf(Function);
  });

  it('should change counter values', () => {
    const counterRendered = renderer.create(AppTest);

    const display = counterRendered.root.findByProps({ id: "display" }).parent;

    expect(display.props.value).toBe(0);

    counterRendered.root.findByProps({ id: "increment" }).props.onClick();

    expect(display.props.value).toBe(1);

    counterRendered.root.findByProps({ id: "decrement" }).props.onClick();
    counterRendered.root.findByProps({ id: "decrement" }).props.onClick();

    expect(display.props.value).toBe(-1);
  });
});