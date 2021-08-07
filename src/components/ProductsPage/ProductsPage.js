import React from 'react';
import {withRouter} from "react-router-dom";
import ProductItem from "./ProductItem";
import Button from "../custom/Button";

import './ProductsPage.less';

const ProductsPage = ({ history, getProducts, products, deleteProduct }) => {
    React.useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className='products'>
            <h2 className='products_title'>Products Page</h2>
            <div className='products_btn__container'>
                <Button
                    text='Add product'
                    onClick={() => history.push('/products-add')}
                />
            </div>
            <div className='products_container'>
                {products.map(product => <ProductItem
                    key={product.id}
                    product={product}
                    deleteProduct={deleteProduct}
                />)}
            </div>
        </div>
    );
}

export default withRouter(ProductsPage);
