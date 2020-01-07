import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
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
        this.props.signup(this.state);
    }

    // render function that contains the form
    render() {
        return(
            <div>
                <h2>
                    <span>Create your account</span>
                </h2>
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
                        <button>
                            <span>Create account</span>
                        </button>
                    </form>
                    <div>
                        Already have a Coinbase account?
                        <Link to='/signin'>Log in</Link>
                    </div>
            </div>
        )
    }


}