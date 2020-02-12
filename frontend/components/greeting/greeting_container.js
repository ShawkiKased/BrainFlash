import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mStP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDtP = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mStP, mDtP)(Greeting);