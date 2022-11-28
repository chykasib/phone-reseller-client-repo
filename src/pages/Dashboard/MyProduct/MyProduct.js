import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProduct = ({ product }) => {
    const { photo, product: name, location, description, price, _id } = product;
    const { loading } = useContext(AuthContext)

    const handleProduct = id => {

        fetch(`http://localhost:5000/addProduct/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('your product successfully removed');
                }
                else {
                    return toast.error(data.message)
                }
            })
            .catch(err => console.error(err))
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{location}</div>
                </h2>
                <p>{description}</p>
                <div>
                    <div className="badge badge-outline">{price} taka</div>
                    <button onClick={() => handleProduct(_id)} className="btn btn-sm ml-10">Delete</button>
                    <br />
                    <Link to={`/advertise/${_id}`}>
                        <div className="btn btn-warning w-full my-5">advertise</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;