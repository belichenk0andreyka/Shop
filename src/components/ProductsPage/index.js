import { connect } from 'react-redux';

import ProductsPage from './ProductsPage'
import { getProductsStore } from "../../store/products/selectors";
import {deleteProduct, getProducts} from "../../store/products/actions";

const mapStateToProps = state => ({
    products: getProductsStore(state),
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts()),
    deleteProduct: payload => dispatch(deleteProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
