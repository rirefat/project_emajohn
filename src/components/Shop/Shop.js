import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [cart, setCart]=useState([]);
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);

    const addToCart=(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(cart);
    }

    const clearCart = ()=>{setCart([]);}

    return (
        <div className='shop-container'>
            <div className="product-container">
                <h1 className='section-title'>Our New Arrivals</h1>
                <div className="products">
                    {
                        products.map(product=><Products 
                            key={product.id} 
                            product={product} 
                            addToCart={addToCart}
                        ></Products>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-summery">
                    <h1 className='section-title'>Order Summary</h1>
                    <div className="summery-content">
                        <p>Selected Items: {cart.length}</p>
                        <p>Total Price: $</p>
                        <p>Total Shipping Charge: $</p>
                        <p>Tax: $</p>
                        <h3>Grand Total: $</h3>
                        <div className="btn-section">
                            <button onClick={clearCart}><span>Clear Cart</span> <i className='bx bxs-trash' ></i></button>
                            <button><span>Review Order</span> <i className='bx bx-right-arrow-alt' ></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;