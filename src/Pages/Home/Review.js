import React from 'react';

const Review = ({ review }) => {
    const { img, location, name, comment } = review;
    return (
        <div className="card bg-base-100 shadow-xl lg:p-4 xl:p-9">
            <div className="card-body">
                <p className='mb-10'>{comment}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;