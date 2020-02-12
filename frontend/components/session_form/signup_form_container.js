import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mStP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup'
    };
}


const mDtP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mStP,mDtP)(SessionForm);