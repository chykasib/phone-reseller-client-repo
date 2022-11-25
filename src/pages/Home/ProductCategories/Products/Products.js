import React, { useContext, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { AuthContext } from '../../../../Context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import Product from '../Product/Product';
import ProductModal from './ProductModal/ProductModal';
const Products = () => {
    const [product, setProduct] = useState(null);
    const { loading } = useContext(AuthContext)
    const categories = useLoaderData();
    const { products } = categories;
    console.log(products)

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <section className='hero my-6'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                {

                    products.map(product => <Product key={product._id}
                        product={product}
                        setProduct={setProduct}
                    ></Product>)
                }
            </div>
            {
                product &&
                <ProductModal
                    setProduct={setProduct}
                    product={product}
                >
                </ProductModal>
            }
        </section>
    );
};

export default Products;