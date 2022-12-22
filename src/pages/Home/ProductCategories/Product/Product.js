import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import { useSeller } from '../../../../Hooks/UseSeller';
const Product = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email);
    const { picture, name, location, resalePrice, originalPrice, use, postedTime } = product;
    return (
        <div className="card w-96 bg-black shadow-xl" >
            <figure><img src={picture} alt="" className="w-full h-80" />
            </figure>
            <div className="card-body text-white">
                <h1 className="card-title text-3xl">
                    {name}
                </h1>
                <div className="items-center grid-flow-col">
                    <p><small className='font-bold'>Resale Price</small>: {resalePrice} taka</p>
                    <p><small className='font-bold'>Original Price: </small> {originalPrice} taka</p>
                </div>
                <p><small className='font-bold'>years of use: </small> {use}</p>
                <p><small className='font-bold'>posted Time</small> :  {postedTime}</p>
                <p><small className='font-bold'>location </small>: {location}</p>
                {
                    isSeller && <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">{user?.displayName}</span>
                            <input type="checkbox" checked className="checkbox checkbox-warning" />
                        </label>
                    </div>
                }
                <div className="card-actions justify-center">
                    <label onClick={() => setProduct(product)} htmlFor="product-modal" className="btn btn-success">
                        Book Now
                    </label>
                    <Link to={'/dashboard/mywishlist'}>
                        <button className="btn btn-active btn-warning w-full">purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;