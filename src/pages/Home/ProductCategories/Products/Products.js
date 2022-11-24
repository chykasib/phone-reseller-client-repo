import React from 'react';
import { useLoaderData } from "react-router-dom";
import Product from '../Product/Product';
const Products = () => {
    const categories = useLoaderData();
    const { products } = categories;
    console.log(products)
    return (
        <div className='hero my-10'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                {
                    products.map(product => <Product key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;