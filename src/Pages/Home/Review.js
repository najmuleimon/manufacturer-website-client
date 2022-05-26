import React, { useEffect, useState } from 'react';

const Review = ({ feedback }) => {
    const [reviewAuthor, setReviewAuthor] = useState([]);
    const { customer, review, rating, email } = feedback;

    useEffect(() => {
        fetch(`https://warm-badlands-89988.herokuapp.com/user/${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviewAuthor(data));
    }, [])
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='text-sm font-normal'>{review}</p>
                <h4 className='text-lg font-medium'>Rating: <span className='text-primary'>{rating}</span></h4>
                <div className="flex items-center mt-5">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={reviewAuthor?.image} alt="" />
                        </div>
                    </div>
                    <div>

                        <p className='text-sm font-medium capitalize'>Customer: {customer}</p>
                        <p className='text-sm font-medium'>Location: {reviewAuthor?.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;