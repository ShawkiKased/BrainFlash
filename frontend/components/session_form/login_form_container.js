import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from "./login_form";
import { openModal, closeModal } from '../../actions/modal_actions';

const mStP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Login'
    };
}

const mDtP = dispatch => {
    return {
        login: user => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Get Started'))}>
                Create an account?
            </button>
        ),
        closeModal: () => {
            dispatch(closeModal());
        }
    };
}

export default connect(mStP,mDtP)(LoginForm);