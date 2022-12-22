import axios from 'axios';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import ProductCategory from './ProductCategory/ProductCategory';
const ProductCategories = () => {
    const [categoriesProduct, setCategoriesProduct] = useState([])
    axios.get('https://phone-reseller-server.vercel.app/categories')
        .then((response) => {
            setCategoriesProduct(response.data);
        });
    if (categoriesProduct === []) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-5xl text-black font-bold my-10">Product Categories</h1>
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