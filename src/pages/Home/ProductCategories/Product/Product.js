import React, { useContext } from 'react';
import PrimaryButton from '../../../../components/PrimaryButton';
import { AuthContext } from '../../../../Context/AuthProvider';
const Product = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext)
    const { picture, name, location, resalePrice, originalPrice, use, postedTime } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <div className="items-center grid-flow-col">
                    <p><small className='font-bold'>Resale Price</small>: {resalePrice} taka</p>
                    <p><small className='font-bold'>Original Price: </small> {originalPrice} taka</p>
                </div>
                <p><small className='font-bold'>years of use: </small> {use}</p>
                <p><small className='font-bold'>posted Time</small> :  {postedTime}</p>
                <p><small className='font-bold'>location </small>: {location}</p>
                {
                    user?.email && <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">{user?.displayName}</span>
                            <input type="checkbox" checked className="checkbox checkbox-warning" />
                        </label>
                    </div>
                }
                <div className="card-actions justify-center">
                    <label onClick={() => setProduct(product)} htmlFor="Product-modal">
                        <PrimaryButton>Book Now</PrimaryButton>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Product;