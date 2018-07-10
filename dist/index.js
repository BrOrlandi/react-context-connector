'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a HOC to wrap a component with context values in props.
 *
 * @returns {Component} A HOC which pass context state into props to child component.
 * @param {Object} ContextProvider an Object with `Consumer` attribute, like the Context object or a Custom Provider
 * @param {Function} mapContextToProps a functiona that receives the context from `Context.Consumer` and returns a object to be used as props for the wrapped component.
 */
var connectContext = function connectContext(ContextProvider, mapContextToProps) {
  return function (Component) {
    var WrappedContextComponent = function WrappedContextComponent(props) {
      return _react2.default.createElement(
        ContextProvider.Consumer,
        null,
        function (context) {
          return _react2.default.createElement(Component, _extends({}, mapContextToProps(context), props));
        }
      );
    };

    var componentName = Component.displayName || Component.name;
    var providerName = ContextProvider.displayName || ContextProvider.name;
    var wrapperName = providerName + '(' + componentName + ')';
    WrappedContextComponent.displayName = wrapperName;

    return WrappedContextComponent;
  };
};

exports.default = connectContext;