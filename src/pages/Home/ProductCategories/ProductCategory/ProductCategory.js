import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../../components/PrimaryButton';
const ProductCategory = ({ categoryProduct }) => {
    return (
        <div className="card w-96 shadow-xl my-10">
            <div className="card-body">
                <h2 className="card-title justify-center">{categoryProduct.categoryName}</h2>
                <div className="card-actions justify-center my-5">
                    <Link to={`/category/${categoryProduct._id}`}><PrimaryButton>sell All</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;