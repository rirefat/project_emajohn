import React from 'react';
import './Products.css'

const Products = (props) => {
    const {id, name, price, seller, ratings, img, quantity}=props.product
    return (
        <div className='product-card'>
            <div className='img'>
                <img src={img} alt="Product Image" />
            </div>
            <h6 className='product-title'>{name}</h6>
            <div className="product-description">
                <h3>Price: {price}</h3>
                <h3>Manufacturer: {seller}</h3>
                <h3>Rating: {ratings}</h3>
                <h3>Quantity: {quantity}</h3>
                <button>Add to Cart <i className='bx bxs-cart icons'></i></button>
            </div>
        </div>
    );
};

export default Products;