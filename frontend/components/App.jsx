import React from "react";
import SignupFormContainer from './user_auth/signup_form_container';
import LoginFormContainer from './user_auth/login_form_container';
import NavBarContainer from './nav/nav_bar_container'
import {AuthRoute} from '../util/route_util'
import {Route} from 'react-router-dom';
import ModalContainer from '../components/trade/modal'
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
    <div className="app-container">
        <NavBarContainer />
        <ModalContainer />
        <div className="container">
            <Route path='/dashboard' component={DashboardContainer}/>
            <AuthRoute path='/signup' component={SignupFormContainer}/>
            <AuthRoute path='/signin' component={LoginFormContainer}/>
        </div>
    </div>
);

export default App;
