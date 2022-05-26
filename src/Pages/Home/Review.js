import React, { useEffect, useState } from 'react';

const Review = ({ feedback }) => {
    const [reviewAuthor, setReviewAuthor] = useState([]);
    const { customer, review, rating, email } = feedback;

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`, {
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
                <p className='mb-10'>{review}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={reviewAuthor?.image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{rating}</h4>
                        <p>{customer}</p>
                        <p>{reviewAuthor?.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;