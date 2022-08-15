import React from 'react';
import './Products.css'

const Products = (props) => {
    const {id, name, price, seller, ratings, img}=props.product
    const {addToCart}=props;
    return (
        <div className='product-card'>
            <div className='img'>
                <img src={img} alt="Product Image"/>
            </div>
            <h6 className='product-title content'>{name}</h6>
            <div className="product-description">
                <div className="rating-section content">
                    <div className={`${ratings==5 ? "show":"hidden"}`}>
                        <span><i className='bx bxs-star ratings'></i></span>
                        <span><i className='bx bxs-star ratings'></i></span>
                        <span><i className='bx bxs-star ratings'></i></span>
                        <span><i className='bx bxs-star ratings'></i></span>
                        <span><i className='bx bxs-star ratings'></i></span>
                    </div>
                    <div className={`${ratings==4 ? "show":"hidden"}`}>
                        <span><i className='bx bxs-star ratings'></i></span>
                        <span><i className='bx bxs-star ratings'></i></span>
                        <span><i className='bx bxs-star ratings'></i></span>
                        <span><i className='bx bxs-star ratings'></i></span>
                        <span><i className='bx bx-star ratings' ></i></span>
                    </div>
                    <div className={`${ratings==3 ? "show":"hidden"}`}>
                        <span><i className='bx bxs-star ratings'></i></span>
                        <span><i className='bx bxs-star ratings'></i></span>
                        <span><i className='bx bxs-star ratings'></i></span>
                        <span><i className='bx bx-star ratings' ></i></span>
                        <span><i className='bx bx-star ratings' ></i></span>
                    </div>
                </div>
                <h3 className="content">Price: ${price}</h3>
                <h3 className="content">Manufacturer: {seller}</h3>
                <h3 className="content">Rating: {ratings}</h3>
                
                <button onClick={()=>addToCart(props.product)}>Add to Cart <i className='bx bxs-cart icons'></i></button>
            </div>
        </div>
    );
};

export default Products;