import React from 'react';
import {withRouter} from "react-router-dom";

import Button from "../custom/Button";
import RegisterInput from "./RegisterInput";

import './Register.less';

const Register = ({ registerUser, history }) => {
    const handleRedirectLogin = React.useCallback(() => history.push('/auth'), []);
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
                        onClick={handleRedirectLogin}
                        text='To auth'
                    />
                    <Button
                        onClick={registerUser}
                        text='Register'
                    />
                </div>
            </div>
        </div>
    );
}

export default withRouter(Register);
