import React from 'react'
import ReactDOM from 'react-dom';
import {
    login,
    signup,
    logout
} from './util/session_api_util'

// set up entry file

document.addEventListener('DOMContentLoaded', ()=> {
    const root = document.getElementById('root');
    // store const to go here
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    ReactDOM.render(<h1>Hello React is working sort of!</h1>, root)
})

