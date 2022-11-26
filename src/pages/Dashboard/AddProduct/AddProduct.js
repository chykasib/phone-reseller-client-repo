import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../components/PrimaryButton';
import { AuthContext } from '../../../Context/AuthProvider';
import { useTitle } from '../../../Hooks/UseTitle';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { user, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    useTitle('add product')
    const submitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const location = form.location.value;
        const phone = form.phoneNumber.value;
        const price = form.price.value
        const condition = form.role.value;
        const productCategory = form.productCategory.value;
        const description = form.description.value;
        const purchaseDate = form.purchaseDate.value;
        const photo = form.photo.value;
        const email = user?.email;
        const addProduct = {
            product: productName,
            phone,
            price,
            description,
            condition,
            location,
            productCategory,
            purchaseDate,
            photo,
            email
        }
        console.log(addProduct)
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('your product successfully added');
                    form.reset('')
                    navigate('/dashboard/myProduct')
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
        <div className="card w-1/2 p-10 my-10 shadow-2xl">
            <label><p className='text-3xl font-bold'>Add Your Product</p></label>
            <form onSubmit={submitHandler} className='grid grid-cols-1 gap-3 mt-6'>
                <label>Product Name</label>
                <input type="text" name='productName' placeholder='product Name' className="input input-bordered " />
                <label>Product price</label>
                <input type="text" name='price' placeholder="price" className="input input-bordered" />
                <label>Condition</label>
                <select name='role' className="input input-bordered">
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                </select>
                <label>Mobile Number</label>
                <input type="text" name='phoneNumber' placeholder="phone Number" className="input input-bordered" />
                <label>Location</label>
                <input type="text" name='location' placeholder='location' className="input input-bordered " />
                <label>product category </label>
                <input type="phone" name='productCategory' placeholder="product category " className="input input-bordered " />
                <label>description </label>
                <input type="text" name='description' placeholder="description" className="input input-bordered " />
                <label>Year of purchase </label>
                <input type="text" name='purchaseDate' placeholder='Year of purchase' className="input input-bordered " />
                <label>Add Image</label>
                <input type="photo" name='photo' placeholder='image url' className="input input-bordered " />
                <br />
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default AddProduct;