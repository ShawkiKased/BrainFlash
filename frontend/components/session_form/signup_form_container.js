import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUp from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mStP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Get Started'
    };
}


const mDtP = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        otherForm: () => {
            dispatch(openModal('Login'))
        },
        closeModal: () => {
            dispatch(closeModal());
        }
    };
}

export default connect(mStP,mDtP)(SignUp);