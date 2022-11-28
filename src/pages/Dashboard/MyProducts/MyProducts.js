import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import MyProduct from '../MyProduct/MyProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['addProduct', user?.email],
        queryFn: () => fetch(`https://phone-reseller-server.vercel.app/addProduct?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(products)
    return (
        <div>
            {
                products?.length ? <p className='text-center text-3xl my-5'> {products?.length} Product Available for sell</p> : <p className='text-center text-3xl my-5'>product sold</p>
            }
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6 m-6'>
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