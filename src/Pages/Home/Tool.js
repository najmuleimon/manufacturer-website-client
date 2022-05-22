import React from 'react';

const Tool = ({ tool }) => {
    const { name, image, description, quantity, available, price } = tool;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="tools" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3>Price: $<span>{price}</span></h3>
                <p>{description}</p>
                <h3>Minimum order Quantity: <span>{quantity}</span></h3>
                <h3>Available Quantity: <span>{available}</span></h3>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;