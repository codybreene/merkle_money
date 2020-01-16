import React from "react";
import SignupFormContainer from './user_auth/signup_form_container';
import LoginFormContainer from './user_auth/login_form_container';
import NavBarContainer from './nav/nav_bar_container'
import {AuthRoute} from '../util/route_util'
import ModalContainer from '../components/trade/modal'
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
    <div>
        <NavBarContainer />
        <ModalContainer />
        <div className="container">
            <AuthRoute path='/signup' component={SignupFormContainer}/>
            <AuthRoute path='/signin' component={LoginFormContainer}/>
            <AuthRoute path='/dashboard' component={DashboardContainer}/>
        </div>
    </div>
);

export default App;
