import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignUp from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mStP = state => {
    return {
        errors: state.errors.session,
        formType: 'Get Started'
    };
}


const mDtP = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        otherForm: () => {
            dispatch(openModal('Login'))
        },
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    };
}

export default connect(mStP,mDtP)(SignUp);