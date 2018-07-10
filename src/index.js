import React from 'react';

/**
 * Generates a HOC to wrap a component with context values in props.
 *
 * @returns {Component} A HOC which pass context state into props to child component.
 * @param {Object} ContextProvider an Object with `Consumer` attribute, like the Context object or a Custom Provider
 * @param {Function} mapContextToProps a functiona that receives the context from `Context.Consumer` and returns a object to be used as props for the wrapped component.
 */
const connectContext =
(ContextProvider, mapContextToProps) =>
  (Component) => {
    const WrappedContextComponent = (props) => (
      <ContextProvider.Consumer>
        {context => (
          <Component
            {...mapContextToProps(context)}
            {...props}
          />
          )
        }
      </ContextProvider.Consumer>
    );

    const componentName = Component.displayName || Component.name;
    const providerName = ContextProvider.displayName || ContextProvider.name;
    const wrapperName = `${providerName}(${componentName})`;
    WrappedContextComponent.displayName = wrapperName;

    return WrappedContextComponent;
  };

export default connectContext;
