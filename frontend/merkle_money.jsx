import React from 'react'
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createWallet } from './actions/wallet_actions';
import { updateWallet } from './util/wallet_api_util';

// set up entry file

document.addEventListener('DOMContentLoaded', () => {
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
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createWallet = createWallet;
    window.updateWallet = updateWallet; // backend call
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})