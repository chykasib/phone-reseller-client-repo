import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import PrimaryButton from '../../../../../components/PrimaryButton';
import { AuthContext } from '../../../../../Context/AuthProvider';
import Loading from '../../../../Shared/Loading/Loading';

const ProductModal = ({ product, setProduct }) => {
    const { user, loading } = useContext(AuthContext)
    const { name, resalePrice, picture } = product;
    const submitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const location = form.location.value
        const phone = form.phone.value;
        const email = form.email.value;
        const userName = form.userName.value;
        const orders = {
            product: name,
            phone,
            userName,
            email,
            location,
            resalePrice,
            picture
        }
        fetch('https://phone-reseller-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('the item is booked');
                    form.reset('')
                    setProduct(null)

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
        <>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={submitHandler} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" defaultValue={name} className="input input-bordered " readOnly />
                        <input type="text" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" readOnly />
                        <input type="text" name='userName' defaultValue={user?.displayName} placeholder="Email" className="input input-bordered" readOnly />
                        <input type="text" defaultValue={resalePrice} className="input input-bordered " readOnly />
                        <input type="phone" name='phone' placeholder="Phone Number" className="input input-bordered " />
                        <input type="text" name='location' placeholder="location" className="input input-bordered " />
                        <input type="photoUrl" defaultValue={picture} className="input input-bordered " readOnly />
                        <br />
                        <PrimaryButton>Submit</PrimaryButton>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductModal;