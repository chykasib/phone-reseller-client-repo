import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import AdvertiseItem from '../AdvertisedItem/AdvertiseItem';

const AdvertisedItems = () => {
    const { loading } = useContext(AuthContext)
    const advertiseProducts = useLoaderData();
    console.log(advertiseProducts)
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-10'>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                {
                    advertiseProducts?.map(advertiseProduct =>
                        <AdvertiseItem key={advertiseProduct._id} advertiseProduct={advertiseProduct}></AdvertiseItem>
                    )
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;