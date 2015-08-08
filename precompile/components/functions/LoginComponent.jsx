(function() {
  var ButtonComponent, FormAction, FormStore, InputControlComponent, LoginFormClass, React, Reflux, RegisterFormClass, T, cc, ce, cf, formDataValidations;

  React = require('react');

  Reflux = require('reflux');

  cf = React.createFactory;

  cc = React.createClass;

  ce = React.createElement;

  T = React.PropTypes;

  FormAction = Reflux.createActions({
    down: {},
    login: {
      children: ['success', 'fail']
    },
    register: {
      children: ['success', 'fail']
    },
    forget: {
      children: ['success', 'fail']
    }
  });

  FormStore = Reflux.createStore({
    listenables: FormAction,
    onDown: function(data) {
      return this.trigger(data);
    }
  });

  formDataValidations = {
    emailRegExp: /^[.\w]*@[a-zA-Z0-9]+(?:.[a-zA-Z]+)+$/,
    phoneNumberRegExp: /^[\d]{11}$/,
    psRegExp: /^[\S]{6,}$/,
    validateEmail: function(email) {
      return this.emailRegExp.test(email);
    },
    validatePhone: function(number) {
      return this.phoneNumberRegExp.test(number);
    },
    validateEorP: function(numberOrEmail) {
      return this.validateEmail(numberOrEmail) || this.validatePhone(numberOrEmail);
    },
    validatePassword: function(ps) {
      return this.psRegExp.test(ps);
    },
    validatePasswordRepeat: function(ps) {
      return this.psRegExp.test(ps);
    }
  };

  InputControlComponent = cc({
    mixins: [formDataValidations],
    getInitialState: function() {
      var inputType, placeholder, props, typeMap;
      props = this.props;
      inputType = props.type || 'text';
      placeholder = props.placeholder;
      typeMap = {
        email: {
          type: 'text',
          name: 'email',
          validate: {
            name: 'validateEorP',
            error: '邮箱或手机号格式不正确'
          }
        },
        password: {
          type: 'password',
          name: 'password',
          validate: {
            name: 'validatePassword',
            error: '密码不合法'
          }
        },
        passwordRepeat: {
          type: 'password',
          name: 'passwordRepeat',
          validate: {
            name: 'validatePasswordRepeat',
            error: '密码不一致'
          }
        }
      };
      return {
        errorMsg: null,
        placeholder: placeholder,
        inputPropertyObj: typeMap[inputType]
      };
    },
    validateInput: function() {
      var errorMsg, formData, inputDom, inputPropertyObj, inputValue, validateName, validateResult;
      formData = this.props.formState.formData;
      inputDom = this.refs.input.getDOMNode();
      inputValue = inputDom.value;
      inputPropertyObj = this.state.inputPropertyObj;
      validateName = inputPropertyObj.validate.name;
      if (validateName === 'validatePasswordRepeat') {
        validateResult = formData.password === inputValue;
      } else {
        validateResult = this[validateName](inputValue);
      }
      errorMsg = '';
      if (validateResult) {
        formData[inputPropertyObj.name] = inputValue;
      } else {
        errorMsg = inputPropertyObj.validate.error;
      }
      return this.setState({
        errorMsg: errorMsg
      });
    },
    componentWillReceiveProps: function(nextProps) {
      var formState;
      formState = nextProps.formState;
      if (formState.action === 'login' || formState.action === 'register') {
        return this.validateInput();
      }
    },
    render: function() {
      var errorMsg, inputPropertyObj, placeholder, state;
      state = this.state;
      errorMsg = state.errorMsg;
      placeholder = state.placeholder;
      inputPropertyObj = state.inputPropertyObj;
      return ce('div', {
        className: 'form-field'
      }, ce('div', {
        className: 'validation',
        style: {
          opacity: errorMsg ? 1 : 0
        }
      }, ce('p', {}, errorMsg ? ' ' : ' ')), ce('input', {
        ref: 'input',
        placeholder: placeholder,
        type: inputPropertyObj.type,
        name: inputPropertyObj.name,
        className: 'form-control',
        required: true
      }));
    }
  });

  ButtonComponent = cc({
    getInitialState: function() {
      var buttonMap, buttonType, props, typePropertyObj;
      props = this.props;
      buttonType = props.type;
      buttonMap = {
        select: {
          type: 'button',
          className: 'btn btn-primary anim-blue-all'
        },
        highlight: {
          type: 'button',
          className: 'btn anim-blue'
        },
        other: {
          type: 'button',
          className: 'btn anim-grey'
        }
      };
      typePropertyObj = buttonMap[buttonType] || buttonMap.other;
      return {
        action: props.action,
        text: props.text,
        typePropertyObj: typePropertyObj
      };
    },
    clicked: function() {
      return FormAction.down({
        action: this.state.action
      });
    },
    render: function() {
      var state, text, typePropertyObj;
      state = this.state;
      text = state.text;
      typePropertyObj = state.typePropertyObj;
      return ce('button', {
        type: typePropertyObj.type,
        className: typePropertyObj.className,
        onClick: this.clicked
      }, text);
    }
  });

  LoginFormClass = cc({
    getInitialState: function() {
      return {
        formState: this.props.formState
      };
    },
    componentWillMount: function() {
      return this.removeFormStoreListend = FormStore.listen((function(_this) {
        return function(data) {
          var formState;
          console.log(data);
          formState = _this.state.formState;
          formState.action = data.action;
          return _this.setState({
            formState: formState
          });
        };
      })(this));
    },
    componentWillUnmount: function() {
      return this.removeFormStoreListend();
    },
    render: function() {
      var formState, state;
      state = this.state;
      formState = state.formState;
      return ce('form', {
        method: 'post',
        action: ''
      }, ce('div', {
        className: 'transparent-bg'
      }), ce(InputControlComponent, {
        formState: formState,
        type: 'email',
        placeholder: '邮箱/手机号'
      }), ce(InputControlComponent, {
        formState: formState,
        type: 'password',
        placeholder: '密码'
      }), ce(ButtonComponent, {
        formState: formState,
        action: 'login',
        type: 'select',
        text: '登录'
      }), ce('div', {
        className: 'horizontal-line'
      }), ce('div', {}, ce(ButtonComponent, {
        formState: formState,
        action: 'signup',
        type: 'highlight',
        text: '还没有账号？免费注册'
      }), ce(ButtonComponent, {
        formState: formState,
        action: 'forgot',
        type: 'other',
        text: '忘记密码？重置'
      })));
    }
  });

  RegisterFormClass = cc({
    getInitialState: function() {
      return {
        formState: this.props.formState
      };
    },
    componentWillMount: function() {
      return this.removeFormStoreListend = FormStore.listen((function(_this) {
        return function(data) {
          var formState;
          console.log(data);
          formState = _this.state.formState;
          formState.action = data.action;
          return _this.setState({
            formState: formState
          });
        };
      })(this));
    },
    componentWillUnmount: function() {
      return this.removeFormStoreListend();
    },
    render: function() {
      var formState, state;
      state = this.state;
      formState = state.formState;
      return ce('form', {
        method: 'post',
        action: ''
      }, ce('div', {
        className: 'transparent-bg'
      }), ce(InputControlComponent, {
        formState: formState,
        type: 'email',
        placeholder: '邮箱/手机号'
      }), ce(InputControlComponent, {
        formState: formState,
        type: 'password',
        placeholder: '密码'
      }), ce(InputControlComponent, {
        formState: formState,
        type: 'passwordRepeat',
        placeholder: '重复密码'
      }), ce(ButtonComponent, {
        formState: formState,
        action: 'register',
        type: 'select',
        text: '注册'
      }), ce('div', {
        className: 'horizontal-line'
      }), ce('div', {}, ce(ButtonComponent, {
        formState: formState,
        action: 'signin',
        type: 'highlight',
        text: '已有账号？登录'
      }), ce(ButtonComponent, {
        formState: formState,
        action: 'forgot',
        type: 'other',
        text: '忘记密码？重置'
      })));
    }
  });

  module.exports = cf(cc({
    displayName: 'formBoard',
    propTypes: {
      formType: T.string.isRequired
    },
    getInitialState: function() {
      return {
        formState: {
          action: this.props.formType,
          formData: {}
        },
        formTypes: ['signin', 'signup']
      };
    },
    componentWillMount: function() {
      var formTypes;
      formTypes = this.state.formTypes;
      return this.removeFormStoreListend = FormStore.listen((function(_this) {
        return function(data) {
          var action, formState;
          action = data.action;
          if (-1 !== formTypes.indexOf(action)) {
            formState = _this.state.formState;
            formState.action = data.action;
            return _this.setState({
              formState: formState
            });
          }
        };
      })(this));
    },
    componentWillUnmount: function() {
      return this.removeFormStoreListend();
    },
    onc: function() {},
    render: function() {
      var formState, formType, state;
      state = this.state;
      formState = state.formState;
      formType = state.formState.action;
      if (formType === 'signup') {
        return ce('div', {
          className: 'form-unit'
        }, ce(RegisterFormClass, {
          formState: formState
        }));
      } else if (formType === 'signin') {
        return ce('div', {
          className: 'form-unit'
        }, ce(LoginFormClass, {
          formState: formState
        }));
      }
    }
  }));

}).call(this);
