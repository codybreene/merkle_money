import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            guestEmail: 'codybreen@gmail.com',
            
        };
        this.handleSubmit = this.handleSubmit.bind(this)
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
    handleSubmit(e, demo=false) {
        e.preventDefault();
        this.props.signup(this.state)
            .then(this.props.history.push('/dashboard'))
    }

    // render function that contains the form
    render() {
        return(
            <div className="session">
                <h2 className="header">
                    <span>Create your account</span>
                </h2>
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
                        <button className="btn" onClick={this.handleSubmit}>
                            <span>Create account</span>
                        </button>
                    </form>
                    </div>
                    <div>
                        Already have a Coinbase account?
                        <Link to='/signin'>Log in</Link>
                    </div>
            </div>
        )
    }
}

export default SignupForm;