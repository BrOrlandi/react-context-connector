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
    return class WrappedContextComponent extends React.Component {
      render() {
        return (
          <ContextProvider.Consumer>
            {context => (
              <Component
                {...mapContextToProps(context)}
                {...this.props}
              />
              )
            }
          </ContextProvider.Consumer>
        );
      }
    };
  };

export default connectContext;
