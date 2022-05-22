import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people3
        },
    ];
    return (
        <section className='my-28 px-5 xl:px-14'>
            <div className='mb-10 text-center'>
                <h4 className="text-4xl text-primary font-bold">Customer Reviews</h4>
                <h2 className='text-xl font-normal'>What our customers say?</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;