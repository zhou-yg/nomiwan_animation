(function() {
  var ButtonComponent, InputControlComponent, LoginFormClass, React, RegisterFormClass, T, cc, ce, cf, formDataValidations;

  React = require('react');

  cf = React.createFactory;

  cc = React.createClass;

  ce = React.createElement;

  T = React.PropTypes;

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
      console.log(validateName);
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
      if (formState.action === '#login' || formState.action === '#register') {
        this.validateInput();
      }
      return console.log(formState.formData);
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
          display: errorMsg ? 'block' : 'none'
        }
      }, ce('p', {
        style: {
          textAlign: 'center'
        }
      }, errorMsg)), ce('input', {
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
        action: '#' + (props.action || ''),
        text: props.text,
        typePropertyObj: typePropertyObj
      };
    },
    clicked: function() {
      this.props.formState.action = this.state.action;
      return formComponent.forceUpdate();
    },
    render: function() {
      var action, state, text, typePropertyObj;
      state = this.state;
      action = state.action;
      text = state.text;
      typePropertyObj = state.typePropertyObj;
      return ce('button', {
        type: typePropertyObj.type,
        className: typePropertyObj.className,
        onClick: this.clicked
      }, ce('a', {
        href: action
      }, text));
    }
  });

  LoginFormClass = cc({
    getInitialState: function() {
      return {
        formState: {
          formData: {}
        }
      };
    },
    onc: function() {},
    render: function() {
      var formState, state;
      state = this.state;
      formState = state.formState;
      return ce('form', {
        method: 'post',
        action: ''
      }, ce(InputControlComponent, {
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
        formState: {
          formData: {}
        }
      };
    },
    onc: function() {},
    render: function() {
      var formState, state;
      state = this.state;
      formState = state.formState;
      return ce('form', {
        method: 'post',
        action: ''
      }, ce(InputControlComponent, {
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
    propTypes: {
      formType: T.string.isRequired
    },
    getInitialState: function() {
      return {
        formState: {
          formData: {}
        }
      };
    },
    onc: function() {},
    render: function() {
      var formState, state, type;
      state = this.state;
      formState = state.formState;
      type = this.props.fromType;
      if (type === 'register') {
        return ce('form', {
          method: 'post',
          action: ''
        }, ce(InputControlComponent, {
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
      } else if (type === 'login') {
        return ce('form', {
          method: 'post',
          action: ''
        }, ce(InputControlComponent, {
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
    }
  }));

}).call(this);
