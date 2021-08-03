import { connect } from "react-redux";

import RegisterInput from "./RegisterInput";
import {changeRegInput} from "../../../store/register/actions";
import {regFieldValue} from "../../../store/register/selectors";

const mapStateToProps = (state, props) => ({
    value: regFieldValue(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
    onChange: value => dispatch(changeRegInput({value, field: props.field})),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterInput);
