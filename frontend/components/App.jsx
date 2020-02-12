import React from "react";
import SignupFormContainer from './user_auth/signup_form_container';
import LoginFormContainer from './user_auth/login_form_container';
import {AuthRoute} from '../util/route_util';
import {Route} from 'react-router-dom';
import ModalContainer from '../components/trade/modal';
import Dashboard from './dashboard/dashboard';
import Splash from './splash/splash';

const App = () => (
  <div>
    <ModalContainer />
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/signin" component={LoginFormContainer} />
    <Route path='/dashboard' component={Dashboard} />
  </div>
);

export default App;