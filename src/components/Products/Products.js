import React from 'react';
import './Products.css'

const Products = (props) => {
    const {id, name, price, seller, ratings, img, quantity}=props.product
    return (
        <div className='product-card'>
            <img src={img} alt="Product Image" />
            <h1>{name}</h1>
            <h3>Price: {price}</h3>
            <h5>Manufacturer: {seller}</h5>
            <h5>Rating: {ratings}</h5>
            <h5>Quantity: {quantity}</h5>
        </div>
    );
};

export default Products;