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

    // render function that contains the form
    render() {
        return (
            <div className="session">
                <h2>Sign in to Coinbase</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                            <input
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.updateForm('email')}
                        />
                    </label>
                    <label>Password
                            <input
                            type="password"
                            placeholder="Choose password"
                            value={this.state.password}
                            onChange={this.updateForm('password')}
                        />
                    </label>
                    <input type="submit" onClick={this.handleSubmit}/>
                </form>
                <p>
                    <Link to='/signup'>Don't have an account?</Link>
                </p>
            </div>
        )
    }
}

export default LoginForm;