import React from 'react';
import { useTitle } from '../../../Hooks/UseTitle';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    useTitle('home')
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
            <Information></Information>
        </div>
    );
};

export default Home;