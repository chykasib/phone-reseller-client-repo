import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import MyProduct from '../MyProduct/MyProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['addProduct', user?.email],
        queryFn: () => fetch(`http://localhost:5000/addProduct?email=${user?.email}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(products)
    return (
        <div>
            <p>{products.length}</p>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                {
                    products?.map(product => <MyProduct
                        key={product._id}
                        product={product}
                    >
                    </MyProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;