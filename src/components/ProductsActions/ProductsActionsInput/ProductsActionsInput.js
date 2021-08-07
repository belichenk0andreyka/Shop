import React from 'react';
import Input from "../../custom/Input";

const ProductsActionsInput = ({ value, onChange, error, placeholder, type, minDate }) => {
    const handleChange = event => onChange(event.target.value);
    return (
        <Input
            type={type}
            error={error}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            minDate={minDate}
        />
    );
};

export default ProductsActionsInput;
