import React from 'react';
import dayjs from "dayjs";
import { withRouter } from "react-router-dom";

import Button from "../custom/Button";
import ProductsActionsInput from "./ProductsActionsInput";

import './ProductsActions.less';

const ProductsActions = ({ action, handleAction, history }) => {
    const handleRedirect = () => history.push('/products');
    return (
        <div className='productsActions_wrapper'>
            <div className='productsActions'>
                <h2 className='productsActions_title'>{action} product</h2>
                <ProductsActionsInput
                    error={''}
                    placeholder={'Title'}
                    type={'text'}
                    field={'title'}
                />
                <ProductsActionsInput
                    error={''}
                    placeholder={'Description'}
                    type={'text'}
                    field={'description'}
                />
                <ProductsActionsInput
                    error={''}
                    placeholder={'Price'}
                    type={'text'}
                    field={'price'}
                />
                <ProductsActionsInput
                    error={''}
                    placeholder={'Discount'}
                    type={'text'}
                    field={'discount'}
                />
                <ProductsActionsInput
                    error={''}
                    placeholder={'Date of end discount'}
                    type={'date'}
                    field={'date'}
                    minDate={dayjs().format('YYYY-MM-DD') }
                />
                <div className='productsActions_btn'>
                    <Button
                        onClick={handleRedirect}
                        text='To Main Page'
                    />
                    <Button
                        onClick={handleAction}
                        text={`${action} Product`}
                    />
                </div>
            </div>
        </div>
    );
}

export default withRouter(ProductsActions);
