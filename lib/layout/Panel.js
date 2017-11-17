'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Panel = function Panel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      scrollY = _ref.scrollY;

  var _className = (0, _classnames3.default)(_style2.default.panel, _defineProperty({}, _style2.default.scrollY, scrollY), className);

  return _react2.default.createElement(
    'div',
    { 'data-react-toolbox': 'panel', className: _className },
    children
  );
};

Panel.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  scrollY: _propTypes2.default.bool
};

Panel.defaultProps = {
  className: '',
  scrollY: false
};

exports.default = Panel;