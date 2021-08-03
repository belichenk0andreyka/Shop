import {CHANGE_AUTH_INPUT, AUTH_USER} from "./actionTypes";

export const changeAuthInput = payload => ({ type: CHANGE_AUTH_INPUT, payload })
export const authUser = () => ({ type: AUTH_USER })
