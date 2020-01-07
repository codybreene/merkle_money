import React from 'react'
import ReactDOM from 'react-dom';
import {
    login,
    signup,
    logout
} from './util/session_api_util'
import configureStore from './store/store';

// set up entry file

document.addEventListener('DOMContentLoaded', ()=> {
    const root = document.getElementById('root');
    const store = configureStore;
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<h1>Hello React is working sort of!</h1>, root)
})

