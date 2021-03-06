import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Categories = (props) => {
    const {count} = props;
    return (
        <div>
            <h2>Select your category</h2>
            <CategoryDetails count={count}></CategoryDetails>
        </div>
    );
};

export default Categories;