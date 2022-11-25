import React from 'react';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <Information></Information>
        </div>
    );
};

export default Home;