import { createSelector } from 'reselect'

const regSelector = state => state.register;

export const regFieldValue = createSelector(
    regSelector,
    (state, props) => props.field,
    (state, field) => state[field],
)
