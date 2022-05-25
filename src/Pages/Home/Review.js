import React from 'react';

const Review = ({ feedback }) => {
    const { customer, review, rating } = feedback;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='mb-10'>{review}</p>
                <div className="flex items-center">
                    {/* <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt="" />
                        </div>
                    </div> */}
                    <div>
                        <h4 className='text-xl'>{rating}</h4>
                        <p>{customer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;