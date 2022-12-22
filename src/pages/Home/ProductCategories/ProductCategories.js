import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import ProductCategory from './ProductCategory/ProductCategory';
const ProductCategories = () => {
    const { loading } = useContext(AuthContext)
    const [categoriesProduct, setCategoriesProduct] = useState([])
    axios.get('https://phone-reseller-server.vercel.app/categories')
        .then((response) => {
            setCategoriesProduct(response.data);
        });
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-5xl text-white font-bold">Product Categories</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                {
                    categoriesProduct &&
                    categoriesProduct.map(categoryProduct =>
                        <ProductCategory key={categoryProduct._id} categoryProduct={categoryProduct}></ProductCategory>
                    )
                }
            </div>
        </div>
    );
};

export default ProductCategories;