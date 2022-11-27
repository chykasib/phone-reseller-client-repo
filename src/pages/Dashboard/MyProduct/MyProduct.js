import React from 'react';

const MyProduct = ({ product }) => {
    const { photo, product: name, location, description, price } = product;

    console.log(product)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{location}</div>
                </h2>
                <p>{description}</p>
                <div>
                    <div className="badge badge-outline">{price} taka</div>
                    <button className="btn btn-sm ml-10">Delete</button>
                    <br />
                    <div className="btn btn-warning w-full my-5">advertise</div>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;