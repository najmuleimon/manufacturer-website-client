import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [ratingError, setRatingError] = useState('');

    const handleRating = event => {
        const rating = parseInt(event.target.value);
        if (rating < 1 || rating > 5) {
            setRatingError('Rating must me a number from 1 to 5');
        }
        else {
            setRatingError('');
        }
    }

    const handlePurchase = event => {
        event.preventDefault();
        const review = {
            customer: user.displayName,
            email: user.email,
            rating: event.target.rating.value,
            review: event.target.review.value
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handlePurchase}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" disabled value={user?.displayName} className="input input-bordered input-md w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email address" disabled value={user?.email} className="input input-bordered input-md w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating (from 1 to 5)</span>
                                </label>
                                <input onChange={handleRating} type="number" placeholder="Rating" name="rating" required className="input input-bordered input-md w-full max-w-xs" />
                                {ratingError && <p className='text-sm text-red-500 font-normal'>{ratingError}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Review</span>
                                </label>
                                <textarea type="tel" placeholder="Review" name="review" required className="input input-bordered input-md w-full max-w-xs" ></textarea>
                            </div>

                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;