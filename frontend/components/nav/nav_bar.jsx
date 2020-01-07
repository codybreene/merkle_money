import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { currentUser, logout} = this.props
        if (currentUser) {
            return (
                // navbar with user logged in
                <div>
                    <Link to='/dashboard'>Home</Link>
                    <Link to='/accounts'>Portfolio</Link>
                    <Link to='/prices'>Prices</Link>
                    <Link to='/' onClick={logout}>Logout</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to='/'>Merkle Money</Link>
                    <Link to='/accounts'>Portfolio</Link>
                    <Link to='/signin'>Sign in</Link>
                    <Link to='/signup'>Get started</Link>
                </div>
            )
        }
    }
}

export default NavBar;