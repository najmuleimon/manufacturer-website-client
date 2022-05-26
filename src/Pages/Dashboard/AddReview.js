import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
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

    const handleReview = event => {
        event.preventDefault();
        const review = {
            customer: user.displayName,
            email: user.email,
            rating: event.target.rating.value,
            review: event.target.review.value
        }

        fetch('https://warm-badlands-89988.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Your review submitted Successfully!");
                }
                else {
                    toast.error("Sorry! Review didn't submitted!");
                }
            });
    }

    return (
        <div>
            <h1 className='text-xl font-semibold text-primary mb-5'>Add a Review</h1>
            <div className="card w-full shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleReview}>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" disabled value={user?.displayName} className="input input-bordered input-md w-full" />
                        </div>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email address" disabled value={user?.email} className="input input-bordered input-md w-full" />
                        </div>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text">Rating (from 1 to 5)</span>
                            </label>
                            <input onChange={handleRating} type="number" required placeholder="Rating" name="rating" className="input input-bordered input-md w-full" />
                            {ratingError && <p className='text-sm text-red-500 font-normal'>{ratingError}</p>}
                        </div>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea placeholder="Review" name="review" required className="input input-bordered input-md w-full" ></textarea>
                        </div>

                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;