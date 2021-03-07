import React from 'react';

const CategoryDetails = (props) => {
    console.log(props);
    const {name} = props.product;
    return (
        <div>
            <h4>This is your Category Details</h4>
            <h6>Selected Category: {name}</h6>
        </div>
    );
};

export default CategoryDetails;