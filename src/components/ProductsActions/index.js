import {connect} from "react-redux";

import ProductsActions from './ProductsActions'
import {getOneProduct, handleAction} from "../../store/productsActions/actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleAction: (payload) => dispatch(handleAction(ownProps, payload)),
    getOneProduct: (payload) => dispatch(getOneProduct(payload)),
})

export default connect(null, mapDispatchToProps)(ProductsActions);
