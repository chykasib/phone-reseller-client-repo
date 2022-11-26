import React from 'react';
import { Link } from 'react-router-dom';
const ProductCategory = ({ categoryProduct }) => {
    const { image, _id } = categoryProduct;
    return (
        <div className="card w-96 shadow-xl my-10">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <div className="card-actions justify-center my-5">
                    <Link to={`/category/${_id}`}>
                        <button className="btn btn-active btn-link text-3xl">{categoryProduct.categoryName}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;