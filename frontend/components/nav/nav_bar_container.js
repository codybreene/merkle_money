import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({entities, session}) => ({
    currentUser: entities.users[session.id]
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    trade: (
        <a className="trade-btn" onClick={() => dispatch(openModal('buy'))}>
            Trade
        </a>
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);