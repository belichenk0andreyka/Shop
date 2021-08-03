import {connect} from "react-redux";

import Register from './Register'
import {registerUser} from "../../store/register/actions";

const mapDispatchToProps = dispatch => ({
    registerUser: () => dispatch(registerUser()),
});

export default connect(null, mapDispatchToProps)(Register);
