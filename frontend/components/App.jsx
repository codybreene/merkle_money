import React from "react";
import { Route } from 'react-router-dom';
import SignupFormContainer from './user_auth/signup_form_container';
import LoginFormContainer from './user_auth/login_form_container';
import NavBarContainer from './nav/nav_bar_container'

const App = () => (
    <div>
        <NavBarContainer />
        <div className="container">
            <Route path='/signup' component={SignupFormContainer}/>
            <Route path='/signin' component={LoginFormContainer}/>
        </div>
    </div>
);

export default App;