import { createSelector } from 'reselect'

const productsSelector = state => state.products;

export const getProductsStore = createSelector(
    productsSelector,
    (state) => {
        const products = state.products;
        const productsIds = Object.keys(products);
        const productsValues = Object.values(products);
        return productsValues.map((item, index) => ({...item, id: productsIds[index]}));
    },
)
