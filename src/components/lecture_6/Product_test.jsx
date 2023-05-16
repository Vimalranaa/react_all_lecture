import React, { useState } from 'react'
import Select from 'react-select';


function Product_test() {
    const products = [
        {
            id: 1,
            value: 10,
            label: "Product 1"
        },
        {
            id: 2,
            value: 12,
            label: "Product 2"
        },
        {
            id: 3,
            value: 13,
            label: "Product 3"
        },
        {
            id: 4,
            value: 15,
            label: "Product 4"
        }

    ];

    const [selectedValue, setSelectedValue] = useState(3);

    const handleChange = e => {
        setSelectedValue(e.value);
    }

    return (
        <div className="container">

            <Select
                placeholder="Select Option"
                value={products.find(obj => obj.value === selectedValue)}
                options={products}
                onChange={handleChange} />

            {selectedValue}
            
        </div>
    );
}

export default Product_test;