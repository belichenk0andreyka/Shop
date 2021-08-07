import React from 'react';
import {withRouter} from "react-router-dom";

import AuthInput from "./AuthInput";
import Button from "../custom/Button";

const Login = ({loginUser, history}) => {
    const handleRedirectRegister = React.useCallback(() => history.push('/'), []);

    return (
        <div className='auth-wrapper'>
            <div className='auth'>
                <h2 className='auth-title'>Login</h2>
                <AuthInput
                    error={''}
                    placeholder={'Email'}
                    type={'text'}
                    field={'email'}
                />
                <AuthInput
                    error={''}
                    placeholder={'Password'}
                    type={'password'}
                    field={'password'}
                />
                <div className='auth-btn'>
                    <Button
                        onClick={handleRedirectRegister}
                        text='Register'
                    />
                    <Button
                        onClick={loginUser}
                        text='Login'
                    />
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);
