import {CHANGE_REG_INPUT, REGISTER_USER} from "./actionTypes";

export const changeRegInput = payload => ({ type: CHANGE_REG_INPUT, payload })
export const registerUser = () => ({ type: REGISTER_USER })
