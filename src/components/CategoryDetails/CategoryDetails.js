import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h4>This is your Category Details</h4>
            <h6>Selected Category: {category}</h6>
        </div>
    );
};

export default CategoryDetails;