import React from 'react'
import { Random } from 'react-animated-text';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../../components/PrimaryButton';
const ProductCategory = ({ categoryProduct }) => {


    const { image, _id } = categoryProduct;
    return (
        <div className="card w-96 bg-black shadow-xl my-10">
            <figure>
                <img src={image} alt="phone items" className="w-full h-64" />
            </figure>
            <div className="card-body text-5xl text-cyan-500 justify-center text-center">
                <Random
                    text={categoryProduct.categoryName}
                />
                <div className="card-actions justify-center my-5">
                    <Link to={`/category/${_id}`}>
                        <PrimaryButton>Show More</PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;