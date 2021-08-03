import React from 'react';
import AuthInput from "./AuthInput";
import Button from "../custom/Button";

const Login = ({loginUser}) => (
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
                    onClick={loginUser}
                    text='Login'
                />
            </div>
        </div>
    </div>
);

export default Login;
