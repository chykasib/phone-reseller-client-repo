import React from 'react';
import PrimaryButton from '../../../../components/PrimaryButton';
const Product = ({ product }) => {
    const { picture, name, location, resalePrice, originalPrice, use, postedTime } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <div className="items-center grid-flow-col">
                    <p><small className='font-bold'>Resale Price</small>: {resalePrice}</p>
                    <p><small className='font-bold'>Original Price: </small> {originalPrice}</p>
                </div>
                <p><small className='font-bold'>years of use: </small> {use}</p>
                <p><small className='font-bold'>posted Time</small> :  {postedTime}</p>
                <p><small className='font-bold'>location </small>: {location}</p>
                <PrimaryButton>Book Now</PrimaryButton>
            </div>
        </div>
    );
};

export default Product;