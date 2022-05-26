import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews", {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <section className='container max-w-7xl'>
            <div className='mb-10 text-center'>
                <h4 className="text-4xl text-primary font-bold">Customer Reviews</h4>
                <h2 className='text-xl font-normal'>What our customers say?</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(feedback => <Review key={feedback._id} feedback={feedback}></Review>).slice(0, 3)
                }
            </div>
        </section>
    );
};

export default Reviews;