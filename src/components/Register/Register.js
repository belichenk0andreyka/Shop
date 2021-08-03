import React from 'react';

import Button from "../custom/Button";
import RegisterInput from "./RegisterInput";

import './Register.less';

const Register = ({ registerUser }) => {
    return (
        <div className='auth-wrapper'>
            <div className='auth'>
                <h2 className='auth-title'>Register</h2>
                <RegisterInput
                    error={''}
                    placeholder={'Email'}
                    type={'text'}
                    field={'email'}
                />
                <RegisterInput
                    error={''}
                    placeholder={'Password'}
                    type={'password'}
                    field={'password'}
                />
                <RegisterInput
                    error={''}
                    placeholder={'Password Again'}
                    type={'password'}
                    field={'passwordAgain'}
                />
                <div className='auth-btn'>
                    <Button
                        onClick={registerUser}
                        text='Register'
                    />
                </div>
            </div>
        </div>
    );
}

export default Register;
