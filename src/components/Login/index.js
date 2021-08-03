import {connect} from "react-redux";

import Login from './Login'
import {authUser} from "../../store/auth/actions";

const mapDispatchToProps = dispatch => ({
    loginUser: () => dispatch(authUser())
});

export default connect(null, mapDispatchToProps)(Login);
