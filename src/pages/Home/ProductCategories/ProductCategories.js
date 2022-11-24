import React, { useState } from 'react';
import ProductCategory from './ProductCategory/ProductCategory';
const ProductCategories = () => {
    const [categoriesProduct, setCategoriesProduct] = useState([])
    fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => {
            setCategoriesProduct(data)
        })
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