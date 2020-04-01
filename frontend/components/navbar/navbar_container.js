import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import NavBar from "./nav_bar";
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
        login: (user) => dispatch(login(user)),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mStP, mDtP)(withRouter(NavBar));