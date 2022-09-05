import React from 'react';
import useProducts from '../customHooks/useProducts';
import './Order.css';

const Order = () => {
    const [products, setProducts]=useProducts();
    return (
        <div>
            <h1>Order Page</h1>
            <p>Available Products: {products.length}</p>
        </div>
    );
};

export default Order;