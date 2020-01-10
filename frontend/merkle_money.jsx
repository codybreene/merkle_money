import React from 'react'
import ReactDOM from 'react-dom';
import {
    login,
    signup,
    logout
} from './actions/session_actions'
import configureStore from './store/store';
import Root from './components/root';
import { fetchCryptos, fetchCrypto } from './util/cryptocurrencies_api_util';

// set up entry file

document.addEventListener('DOMContentLoaded', ()=> {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchCryptos = fetchCryptos;
    window.fetchCrypto = fetchCrypto;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})