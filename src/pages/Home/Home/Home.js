import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useTitle } from '../../../Hooks/UseTitle';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    const { loading } = useContext(AuthContext)
    useTitle('home')
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <Information></Information>
        </div>
    );
};

export default Home;