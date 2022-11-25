import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import ProductCategory from './ProductCategory/ProductCategory';
const ProductCategories = () => {
    const { loading } = useContext(AuthContext)
    const [categoriesProduct, setCategoriesProduct] = useState([])
    fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => {
            setCategoriesProduct(data)
        })
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p className='text-3xl pt-8 font-bold'>Product Categories</p>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                {
                    categoriesProduct.map(categoryProduct =>
                        <ProductCategory key={categoryProduct._id} categoryProduct={categoryProduct}></ProductCategory>
                    )
                }
            </div>
        </div>
    );
};

export default ProductCategories;