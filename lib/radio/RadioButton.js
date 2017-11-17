'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_React$Component) {
  _inherits(RadioButton, _React$Component);

  function RadioButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      var _this$props = _this.props,
          checked = _this$props.checked,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;

      if (event.pageX !== 0 && event.pageY !== 0) _this.blur();
      if (!disabled && !checked && onChange) onChange(event, _this);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadioButton, [{
    key: 'blur',
    value: function blur() {
      this.refs.input.blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.refs.input.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)(_style2.default[this.props.disabled ? 'disabled' : 'field'], this.props.className);

      var _props = this.props,
          onChange = _props.onChange,
          others = _objectWithoutProperties(_props, ['onChange']); //eslint-disable-line no-unused-vars

      return _react2.default.createElement(
        'label',
        { 'data-react-toolbox': 'radio-button', className: className },
        _react2.default.createElement('input', _extends({}, others, {
          className: _style2.default.input,
          onClick: this.handleClick,
          readOnly: true,
          ref: 'input',
          type: 'radio'
        })),
        _react2.default.createElement(_Radio2.default, { checked: this.props.checked, disabled: this.props.disabled }),
        this.props.label ? _react2.default.createElement(
          'span',
          { className: _style2.default.text },
          this.props.label
        ) : null
      );
    }
  }]);

  return RadioButton;
}(_react2.default.Component);

RadioButton.propTypes = {
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  value: _propTypes2.default.any
};
RadioButton.defaultProps = {
  checked: false,
  className: '',
  disabled: false
};
exports.default = RadioButton;