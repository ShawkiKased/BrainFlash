import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mStP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Sign up instead</Link>,
    };
}

const mDtP = dispatch => {
    return {
        processForm: user => dispatch(login(user))
    };
}

export default connect(mStP,mDtP)(SessionForm);