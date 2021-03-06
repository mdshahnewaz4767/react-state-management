import React from 'react';

const CategoryDetails = (props) => {
    const {count} = props;
    return (
        <div>
            <h4>This is your Category Details has: {count}</h4>
        </div>
    );
};

export default CategoryDetails;