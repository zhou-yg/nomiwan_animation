import React from 'react'
import $ from 'jquery'

import utils from '../../common/utils'

import LoginAction from '../../actions/LoginAction'
import LoginComponent from '../../../components/functions/LoginComponent'

var loginType = utils.getValueFromUrl('type');

var mainWindow = $('#login-frame')[0];

React.render(LoginComponent({
    formType: loginType
}), mainWindow);

