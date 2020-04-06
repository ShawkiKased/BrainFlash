import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Footer from './footer';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mStP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDtP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mStP, mDtP)(withRouter(Footer));