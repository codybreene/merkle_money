import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: this.props.errors
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.guestLogin = this.guestLogin.bind(this);
    }
    
    //onChange, update the field in the form so we re-render
    updateForm(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        };
    }

    //prevent default action of making a get request on submit
    //
    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then(
                () => this.props.history.push('/dashboard'))
            .fail(
                (errors) => this.setState({
                    errors: errors
                })
            )
    }

    guestLogin(e) {
        e.preventDefault();
        this.setState({
            email: 'codybreene@gmail.com',
            password: 'password'
        }, () => this.props.login(this.state)
            .then(this.props.history.push('/dashboard')))
    }

    renderErrors() {
        let that = this;
        if (this.props.errors.length > 0) {
            setTimeout(() => {
                // debugger;
                dispatch(that.props.clearErrors());
            }, 8000);
            return (
                <div id="errors" className="errors">
                    {this.props.errors.map(error => (
                        <li>{error}</li>
                    ))}
                </div>
            )
        }
}

    // render function that contains the form
    render() {
        return(
            <div className="session">
                {this.renderErrors()}
                <h2 className="header">
                    <span>Create your account</span>
                </h2>
                    <div className="form-wrapper">
                    <form className="form-area" onSubmit={this.handleSubmit}>
                        <div className="email-container">
                            <input 
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.updateForm('email')}
                                />
                        </div>
                        <div className="password-container">
                            <input 
                                id="password"
                                type="password"
                                placeholder="Choose password"
                                value={this.state.password}
                                onChange={this.updateForm('password')}
                                />
                        </div>
                        <div className="btns">
                            <input className="btn" type="submit" onClick={this.handleSubmit} value="Create account" />
                            <input className="btn" type="submit" onClick={this.guestLogin} value="Sign In as a Guest" />
                        </div>
                    </form>
                    </div>
                    <div className="account-extras">
                        Already have a Coinbase account?
                        <Link to='/signin'>Log in</Link>
                    </div>
            </div>
        )
    }
}

export default SignupForm;