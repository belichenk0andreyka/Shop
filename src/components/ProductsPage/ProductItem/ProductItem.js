import React from 'react';
import dayjs from "dayjs";
import classNames from "classnames";
import {withRouter} from "react-router-dom";

import Button from "../../custom/Button";
import {getPriceWithDiscount} from "../../../helpers/discountHelpers";

import './ProductItem.less';

const ProductItem = ({ product, deleteProduct, history }) => {
    const handleRedirectEdit = () => history.push(`/products-edit/${product.id}`)
    const priceWithDiscount = getPriceWithDiscount(product);
    const handleDelete = () => deleteProduct(product.id);
    return (
        <div className='product' key={product.id}>
            <img src="../../../public/product.jpg" className='product_image' />
            <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p className={classNames({'discount_price': priceWithDiscount})}>Price: <span>{product.price}$</span></p>
                {priceWithDiscount && <p> Price with discount: {priceWithDiscount}$</p>}
                {priceWithDiscount && <p> Date end discount: {dayjs(product.date).format('DD/MM/YYYY')}</p>}
            </div>
            <div className='product_btn'>
                <Button
                    onClick={handleRedirectEdit}
                    text='Edit'
                />
                <Button
                    onClick={handleDelete}
                    text='Delete'
                />
            </div>
        </div>
    );
};

export default withRouter(ProductItem);
