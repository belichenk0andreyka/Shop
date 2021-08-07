import React from 'react';

import './Input.less';

const Input = ({ error, placeholder, type, onChange, value, minDate = null }) => {
    return (
        <div className='field-wrapper'>
            <div className='field'>
                <div className='field-input' title={placeholder}>
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        min={minDate}
                    />
                </div>
            </div>
            {error && <div className='error'>
                <span>error</span>
            </div>}
        </div>
    );
};

export default Input;
