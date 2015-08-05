React = require 'react'
Reflux = require 'reflux'

cf = React.createFactory
cc = React.createClass
ce = React.createElement

T = React.PropTypes

FormAction = Reflux.createActions {
  down:{

  }
  login:
    children:['success','fail']

  register:
    children:['success','fail']

  forget:
    children:['success','fail']
}

formDataValidations = {

  emailRegExp:/^[.\w]*@[a-zA-Z0-9]+(?:.[a-zA-Z]+)+$/
  phoneNumberRegExp:/^[\d]{11}$/
  psRegExp:/^[\S]{6,}$/

  validateEmail:(email)->
    return @emailRegExp.test(email)

  validatePhone:(number)->
    return @phoneNumberRegExp.test(number)

  validateEorP:(numberOrEmail)->
    return @validateEmail(numberOrEmail) or @validatePhone(numberOrEmail)

  validatePassword:(ps)->
    return @psRegExp.test(ps)

  validatePasswordRepeat:(ps)->

    return @psRegExp.test(ps)
}
#type
#placeholder
InputControlComponent = cc {
  mixins:[formDataValidations]
  getInitialState:->
    props = @props
    inputType = props.type or 'text'
    placeholder = props.placeholder

    typeMap = {
      email:{
        type:'text'
        name:'email'
        validate:{
          name:'validateEorP'
          error:'邮箱或手机号格式不正确'
        }
      }
      password:{
        type:'password'
        name:'password'
        validate:{
          name:'validatePassword'
          error:'密码不合法'
        }
      }
      passwordRepeat:{
        type:'password'
        name:'passwordRepeat'
        validate:{
          name:'validatePasswordRepeat'
          error:'密码不一致'
        }
      }
    }

    {
      errorMsg:null
      placeholder:placeholder
      inputPropertyObj:typeMap[inputType]
    }
  validateInput:->
    formData = @props.formState.formData

    inputDom = @refs.input.getDOMNode()
    inputValue = inputDom.value

    inputPropertyObj = @state.inputPropertyObj

    validateName = inputPropertyObj.validate.name

    if validateName is 'validatePasswordRepeat'
      validateResult = formData.password is inputValue
    else
      validateResult = @[validateName](inputValue)

    errorMsg = ''
    if validateResult
      formData[inputPropertyObj.name] = inputValue
    else
      errorMsg = inputPropertyObj.validate.error

    @setState {
      errorMsg:errorMsg
    }
  componentWillReceiveProps:(nextProps)->
    formState = nextProps.formState
    if formState.action is '#login' or formState.action is '#register'
      @validateInput()

    console.log(formState.formData)

  render:->
    state = @state

    errorMsg = state.errorMsg
    placeholder = state.placeholder
    inputPropertyObj = state.inputPropertyObj

    ce 'div',{ className:'form-field' },
      ce 'div',{ className:'validation',style:{
          display:if errorMsg then 'block' else 'none'
        }},
        ce 'p',{ style:{textAlign:'center'} },errorMsg
      ce 'input',{
        ref:'input'
        placeholder:placeholder
        type:inputPropertyObj.type
        name:inputPropertyObj.name
        className:'form-control'
        required:true
      }
}
#action
#type
#text
ButtonComponent = cc {
  getInitialState:->
    props = @props
    buttonType = props.type

    buttonMap = {
      select:{
        type:'button'
        className:'btn btn-primary anim-blue-all'
      }
      highlight:{
        type:'button'
        className:'btn anim-blue'
      }
      other: {
        type: 'button'
        className: 'btn anim-grey'
      }
    }
    typePropertyObj = buttonMap[buttonType] or buttonMap.other
    {
      action:props.action
      text:props.text
      typePropertyObj:typePropertyObj
    }
  clicked:->
    FormAction.down formState:@state.action

  render:->
    state = @state
    text = state.text
    typePropertyObj = state.typePropertyObj

    ce 'button',{
        type:typePropertyObj.type
        className:typePropertyObj.className
        onClick:@clicked
      },text
}
#登录板
LoginFormClass = cc {
  getInitialState:->
    {
      formState:
        formData:{
        }
    }
  onc:->

  render:->
    state = @state
    formState = state.formState

    ce 'form',{ method:'post',action:'' },
      ce InputControlComponent,{ formState:formState,type:'email',placeholder:'邮箱/手机号' }
      ce InputControlComponent,{ formState:formState,type:'password',placeholder:'密码' }
      ce ButtonComponent,{ formState:formState,action:'login',type:'select',text:'登录' }
      ce 'div',{ className:'horizontal-line' }
      ce 'div',{},
        ce ButtonComponent,{ formState:formState,action:'signup',type:'highlight',text:'还没有账号？免费注册' }
        ce ButtonComponent,{ formState:formState,action:'forgot',type:'other',text:'忘记密码？重置' }
}
#注册板
RegisterFormClass = cc {
  getInitialState:->
    {
      formState:
        formData:{
        }
    }
  onc:->

  render:->
    state = @state
    formState = state.formState

    ce 'form',{ method:'post',action:'' },
      ce InputControlComponent,{ formState:formState,type:'email',placeholder:'邮箱/手机号' }
      ce InputControlComponent,{ formState:formState,type:'password',placeholder:'密码' }
      ce InputControlComponent,{ formState:formState,type:'passwordRepeat',placeholder:'重复密码' }
      ce ButtonComponent,{ formState:formState,action:'register',type:'select',text:'注册' }
      ce 'div',{ className:'horizontal-line' }
      ce 'div',{},
        ce ButtonComponent,{ formState:formState,action:'signin',type:'highlight',text:'已有账号？登录' }
        ce ButtonComponent,{ formState:formState,action:'forgot',type:'other',text:'忘记密码？重置' }
}

module.exports = cf cc {

  propTypes:
    formType:T.string.isRequired

  getInitialState:->
    {
      formState:
        formData:{
        }
    }

  componentWillMount:->
    FormAction.down.listen (data)=>
      console.log data
      @setState formData:data
  onc:->

  render:->
    state = @state
    formState = state.formState
    type = @props.formType

    if type is 'register'
      ce 'div',{ className:'form-unit' },
        ce 'form',{ method:'post',action:'' },
          ce InputControlComponent,{ formState:formState,type:'email',placeholder:'邮箱/手机号' }
          ce InputControlComponent,{ formState:formState,type:'password',placeholder:'密码' }
          ce InputControlComponent,{ formState:formState,type:'passwordRepeat',placeholder:'重复密码' }
          ce ButtonComponent,{ formState:formState,action:'register',type:'select',text:'注册' }
          ce 'div',{ className:'horizontal-line' }
          ce 'div',{},
            ce ButtonComponent,{ formState:formState,action:'signin',type:'highlight',text:'已有账号？登录' }
            ce ButtonComponent,{ formState:formState,action:'forgot',type:'other',text:'忘记密码？重置' }

    else if type is 'login'
      ce 'div',{ className:'form-unit' },
        ce 'form',{ method:'post' },
          ce InputControlComponent,{ formState:formState,type:'email',placeholder:'邮箱/手机号' }
          ce InputControlComponent,{ formState:formState,type:'password',placeholder:'密码' }
          ce ButtonComponent,{ formState:formState,action:'login',type:'select',text:'登录' }
          ce 'div',{ className:'horizontal-line' }
          ce 'div',{},
            ce ButtonComponent,{ formState:formState,action:'signup',type:'highlight',text:'还没有账号？免费注册' }
            ce ButtonComponent,{ formState:formState,action:'forgot',type:'other',text:'忘记密码？重置' }
}