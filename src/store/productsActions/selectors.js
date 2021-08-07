import { createSelector } from 'reselect'

export const productsActionsSelector = state => state.productsActions;

export const productsActionsFieldValue = createSelector(
    productsActionsSelector,
    (state, props) => props.field,
    (state, field) => state[field],
)
