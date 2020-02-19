import React from 'react'
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchTxns } from './actions/txn_actions';

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
    window.dispatch = store.dispatch
    window.fetchTxns = fetchTxns 
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})