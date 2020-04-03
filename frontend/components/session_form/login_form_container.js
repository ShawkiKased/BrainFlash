import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from "./login_form";
import { openModal, closeModal } from '../../actions/modal_actions';

const mStP = state => {
    return {
        errors: state.errors.session,
        formType: 'Login'
    };
}

const mDtP = dispatch => {
    return {
        login: user => dispatch(login(user)),
        otherForm: () => {
            dispatch(openModal('Get Started'));
        },
        closeModal: () => {
            dispatch(closeModal());
        }
    };
}

export default connect(mStP,mDtP)(LoginForm);