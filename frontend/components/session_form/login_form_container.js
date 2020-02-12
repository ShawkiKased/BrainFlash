import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mStP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login'
    };
}

const mDtP = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        otherFrom: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mStP,mDtP)(SessionForm);