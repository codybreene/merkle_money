import React from "react";
import { Route } from 'react-router-dom';
import SignupFormContainer from './user_auth/signup_form_container';
import LoginFormContainer from './user_auth/login_form_container';

const App = () => (
    <div>
        <h1>Merkle Money</h1>
        <Route path='/signup' component={SignupFormContainer}/>
        <Route path='/signin' component={LoginFormContainer}/>
    </div>
);

export default App;