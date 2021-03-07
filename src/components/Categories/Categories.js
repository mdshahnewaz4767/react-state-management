import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';


const allProducts = [{id: '0', name: 'Asus', category: 'Laptop'}, {id: '1', name: 'Lenovo', category: 'Laptop'}, {id: '3',name: 'Dell', category: 'Laptop'}, {id: '4', name: 'Oneplus', category: 'Mobile'}, {id: '5', name: 'Nokia', category: 'Mobile'}, {id: '6', name: 'Apple', category: 'Mobile'}, {id: '7', name: 'Canon', category: 'Camera'}, {id: '8', name: 'Nikon', category: 'Camera'}, {id: 'fa-rotate-90', name: 'Sony', category: 'Camera'}];

const Categories = () => {

    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log({category});
        const matchedProducts = allProducts.filter(product => product.category === category && category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])
    return (
        <div>
            <h2>Select your category: {category}</h2>
            {
                products.map(product => <CategoryDetails product={product} key={product.id}></CategoryDetails>)
            }
        </div>
    );
};

export default Categories;