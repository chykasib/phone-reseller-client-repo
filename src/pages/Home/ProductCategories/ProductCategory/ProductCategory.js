import React from 'react';
import { Link } from 'react-router-dom';
const ProductCategory = ({ categoryProduct }) => {
    return (
        <div className="card w-96 bg-base-500 shadow-xl my-10">
            <div className="card-body">
                <h2 className="card-title justify-center">{categoryProduct.categoryName}</h2>
                <div className="card-actions justify-center my-5">
                    <Link to={`/category/${categoryProduct._id}`}><button className="btn btn-primary">sell All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;