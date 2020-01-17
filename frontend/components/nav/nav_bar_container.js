import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({entities, session}) => ({
    currentUser: entities.users[session.id]
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    trade: (
        <Link className="trade-btn" onClick={() => dispatch(openModal('buy'))}>
            Trade
        </Link>
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);