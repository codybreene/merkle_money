import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        this.props.login(this.state)
            //then push to history to redirect
            .then(this.props.history.push('/dashboard'))
    }

    guestLogin(e) {
        e.preventDefault();
        this.setState({
            email: 'codybreene@gmail.com',
            password: 'password'
        }, () => this.props.login(this.state)
            .then(this.props.history.push('/dashboard')))
    }

    // render function that contains the form
    render() {
        return (
            <div className="session">
                <h2 className="header">Sign in to Merkle Money</h2>
                <div className="form-wrapper">
                <form className="form-area" onSubmit={this.handleSubmit}>
                    <div className="email">
                        <input
                            type="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.updateForm('email')}
                        />
                    </div>
                    <div className="password">
                        <input
                            type="password"
                            placeholder="Choose password"
                            value={this.state.password}
                            onChange={this.updateForm('password')}
                        />
                    </div>
                    <div className="btns">
                        <input className="btn" type="submit" onClick={this.handleSubmit} value="Sign In"/>
                        <input className="btn" type="submit" onClick={this.guestLogin} value="Sign In as a Guest"/>
                    </div>
                </form>
                </div>
                <p>
                    <Link to='/signup'>Don't have an account?</Link>
                </p>
            </div>
        )
    }
}

export default LoginForm;