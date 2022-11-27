import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';

const Information = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRsLmangF5pgz8J142AGmbeG7SmYHXZ91Ug&usqp=CAU" className="max-h-96 rounded-lg shadow-2xl mr-8" alt='' />
                <div className=' ml-14'>
                    <h1 className="text-5xl font-bold">Set up shop</h1>
                    <p className="py-6">Show the world you’re up and running by setting up your very own eBay Store. With an eBay Store subscription you’ll be able to customize your storefront and utilize powerful tools to help maximize your sales, order your free eBay-branded shipping supplies, and so much more.</p>
                    <PrimaryButton>Create Your Store</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Information;