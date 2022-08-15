import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h1 className='section-title'>Our New Arrivals</h1>
                <h3>Available : {products.length}</h3>
                <div className="products">
                    {
                        products.map(product=><Products key={product.id} product={product}></Products>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <h1 className='section-title'>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shop;