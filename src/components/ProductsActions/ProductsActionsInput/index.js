import ProductsActionsInput from "./ProductsActionsInput";
import {connect} from "react-redux";
import {productsActionsFieldValue} from "../../../store/productsActions/selectors";
import {changeProductActionsField} from "../../../store/productsActions/actions";

const mapStateToProps = (state, props) => ({
    value: productsActionsFieldValue(state, props),
})

const mapDispatchToProps = (dispatch, { field }) => ({
    onChange: (value) => dispatch(changeProductActionsField(value, field))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsActionsInput);
