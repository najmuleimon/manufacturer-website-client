import React from 'react';

const Tool = ({ tool }) => {
    const { name, image, description, quantity, available, price } = tool;
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="tools" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <h3>Price: $<span>{price}</span></h3>
                <p>{description}</p>
                <h3>Minimum order Quantity: <span>{quantity}</span></h3>
                <h3>Available Quantity: <span>{available}</span></h3>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;