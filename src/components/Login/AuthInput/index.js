import { connect } from "react-redux";

import AuthInput from "./AuthInput";
import {authFieldValue} from "../../../store/auth/selectors";
import {changeAuthInput} from "../../../store/auth/actions";

const mapStateToProps = (state, props) => ({
    value: authFieldValue(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
    onChange: value => dispatch(changeAuthInput({value, field: props.field})),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthInput);
