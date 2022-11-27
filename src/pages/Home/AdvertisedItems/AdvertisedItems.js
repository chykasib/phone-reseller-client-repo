import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import AdvertiseItem from '../AdvertisedItem/AdvertiseItem';

const AdvertisedItems = () => {
    const { loading } = useContext(AuthContext)
    const [advertiseProducts, setAdvertiseProducts] = useState([])
    axios.get('http://localhost:5000/advertise')
        .then((response) => {
            setAdvertiseProducts(response.data);
        });
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-10'>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                {
                    advertiseProducts.length &&
                    advertiseProducts.map(advertiseProduct =>
                        <AdvertiseItem key={advertiseProduct._id} advertiseProduct={advertiseProduct}></AdvertiseItem>
                    )
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;