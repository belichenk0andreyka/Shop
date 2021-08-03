import React from 'react';
import Input from "../../custom/Input";

const RegisterInput = ({ value, onChange, error, placeholder, type }) => {
    const handleChange = event => onChange(event.target.value);
    return (
        <Input
            type={type}
            error={error}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default RegisterInput;
