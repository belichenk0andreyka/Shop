import {connect} from "react-redux";

import ProductsActions from './ProductsActions'
import {handleAction} from "../../store/productsActions/actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleAction: () => dispatch(handleAction(ownProps)),
})

export default connect(null, mapDispatchToProps)(ProductsActions);
