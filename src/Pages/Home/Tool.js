import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, image, description, quantity, available, price } = tool;
    const navigate = useNavigate();
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="tools" /></figure>
            <div className="card-body">
                <h2 className="card-title text-neutral">{name}</h2>
                <h3 className='text-xl font-medium'>Price: $<span>{price}</span></h3>
                <p>{description}</p>
                <h3 className='text-base font-medium'>Minimum order Quantity: <span>100</span></h3>
                <h3 className='text-base font-medium'>Available Quantity: <span>{quantity}</span></h3>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;