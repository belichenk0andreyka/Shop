import { createSelector } from 'reselect'

const authSelector = state => state.auth;

export const authFieldValue = createSelector(
    authSelector,
    (state, props) => props.field,
    (state, field) => state[field],
)

export const authData = createSelector(
    authSelector,
    ({email, password}) => ({email, password }),
);
