import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { useSeller } from '../../../Hooks/UseSeller';

const AdvertiseItem = ({ advertiseProduct }) => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email);
    const { photo, name, location, description, price } = advertiseProduct;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <div className="items-center grid-flow-col">
                    <p><small className='font-bold'>Price</small>: {price} taka</p>
                    <p><small className='font-bold'>location: {location}</small></p>
                </div>
                <p><small className='font-bold'>description: </small> {description}</p>

                {
                    isSeller && <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">{user?.displayName}</span>
                            <input type="checkbox" checked className="checkbox checkbox-warning" />
                        </label>
                    </div>
                }
                <div className="card-actions justify-center">
                    {/* <label onClick={() => setProduct(product)} htmlFor="product-modal" className="btn btn-success">
                        Book Now
                    </label> */}
                    <Link to={'/dashboard/mywishlist'}>
                        <button className="btn btn-active btn-warning w-full">purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseItem;