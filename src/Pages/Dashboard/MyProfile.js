import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: singleUser, isLoading, refetch } = useQuery('user', () => fetch(`http://localhost:5000/user/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    const imageStorageKey = '08fc39b4d29c53e61c3334ccd7e75bbe';

    if (isLoading) {
        return <Loader />
    }

    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const userInfo = {
                        location: data.location,
                        image: img,
                        phone: data.phone,
                        education: data.education,
                        link: data.profile
                    }
                    // send to your database 
                    fetch(`http://localhost:5000/user/${singleUser.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(response => {
                            if (response.result.acknowledged) {
                                toast.success('Profile updated successfully!')
                                reset();
                                refetch();
                            }
                            else {
                                toast.error('Failed to update profile!');
                            }
                        })

                }

            })
    }
    return (
        <div>
            {/* user info */}
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">User Information</h2>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <p>Role: {singleUser.role ? singleUser.role : 'Customer'}</p>
                    {singleUser.location && <p>Location: {singleUser.location}</p>}
                    {singleUser.education && <p>Education: {singleUser.education}</p>}
                    {singleUser.phone && <p>Phone Number: {singleUser.phone}</p>}
                    {singleUser.link && <p>Linkedin Profile: {singleUser.link}</p>}
                    <div className="flex items-center w-fit">
                        <p>User Image: </p>
                        <div className="h-16 w-16 rounded-full overflow-hidden ml-10">
                            {singleUser.image && <img src={singleUser.image} className="w-full" alt="" />}
                        </div>
                    </div>
                </div>
            </div>

            {/* update user info */}
            <div className="card w-full shadow-2xl bg-base-100 mt-10">
                <div className="card-body">
                    {/* add product form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location (city/district)</span>
                            </label>
                            <input type="text" placeholder="Location (city/district)" className="input input-bordered"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: "Please provide your location"
                                    }
                                })} />
                            <label className="label">
                                {errors.location?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.location.message}</p>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="tel" placeholder="Phone number" className="input input-bordered"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Please provide your phone number"
                                    }
                                })} />
                            <label className="label">
                                {errors.phone?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.phone.message}</p>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input type="text" placeholder="Education" className="input input-bordered"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: "Please provide your education statement"
                                    }
                                })} />
                            <label className="label">
                                {errors.education?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.education.message}</p>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LinkedIn Profile Link</span>
                            </label>
                            <input type="text" placeholder="LinkedIn profile link" className="input input-bordered"
                                {...register("profile", {
                                    required: {
                                        value: true,
                                        message: "Please provide your linkedin profile link"
                                    }
                                })} />
                            <label className="label">
                                {errors.profile?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.profile.message}</p>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Image</span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Please provide your image'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.image.message}</p>}
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Update Information</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;