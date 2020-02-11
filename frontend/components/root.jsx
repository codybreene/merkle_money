import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import App from './App';
import PricesTruncContainer from "./splash/prices_trunc_container";

const Root = ({ store }) => (
  <Provider store={store}>
      <HashRouter>
          <App />
      </HashRouter>
  </Provider>
);

export default Root;