import Reflux from 'reflux'

var LoginAction = Reflux.createActions({
    login: {
        children: ['success', 'fail']
    },
    register: {
        children: ['success', 'fail']
    }
});

export default LoginAction;
