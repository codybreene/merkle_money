import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { currentUser, logout, trade} = this.props
        if (currentUser) {
            return (
                // navbar with user logged in
                <div className="navbar-signed-in">
                    <div className="left-side">
                        <Link className="link-home" to='/dashboard'>Home</Link>
                        <Link className="link-accounts" to='/accounts'>Portfolio</Link>
                        <Link className="link-prices" to='/prices'>Prices</Link>
                    </div>
                    <div className="right-side">
                        <Link className="trade-btn">{trade}</Link>
                        <Link className="link-logout" to='/' onClick={logout}>Logout</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="navbar-signed-out">
                    <Link className="link-home" to='/'>Merkle Money</Link>
                    <Link className="link-accounts" to='/accounts'>Portfolio</Link>
                    <Link className="link-signin" to='/signin'>Sign in</Link>
                    <Link className="link-signup" to='/signup'>Get started</Link>
                </div>
            )
        }
    }
}

export default NavBar;