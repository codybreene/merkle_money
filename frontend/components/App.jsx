import React from "react";
import SignupFormContainer from './user_auth/signup_form_container';
import LoginFormContainer from './user_auth/login_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import ModalContainer from '../components/trade/modal';
import Dashboard from './dashboard/dashboard';
import Splash from './splash/splash';
import { Route } from 'react-router-dom';
import PricePage from './prices/price_page';
import { Footer } from './nav/footer';

const App = () => (
  <div>
    <ModalContainer />
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/signin" component={LoginFormContainer} />
    <ProtectedRoute path="/dashboard" component={Dashboard} />
    <Route exact path="/prices" component={PricePage} />
    <Footer />
  </div>
);

export default App;