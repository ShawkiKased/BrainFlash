import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mStP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Log in instead</Link>
    };
}


const mDtP = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    };
}

export default connect(mStP,mDtP)(SessionForm);