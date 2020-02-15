import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mStP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Register'
    };
}


const mDtP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Login'))}>
                Already have an account?
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mStP,mDtP)(SessionForm);