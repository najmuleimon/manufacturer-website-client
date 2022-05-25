import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        {/* add product form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Please provide product name"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.name?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.name.message}</p>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <input type="number" placeholder="Price" className="input input-bordered"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: "Please provide product price"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.price?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.price.message}</p>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Quantity</span>
                                </label>
                                <input type="number" placeholder="Password" className="input input-bordered"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: "Please provide product quantity"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.quantity.message}</p>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <textarea placeholder="Description" className="input input-bordered"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "Please provide product description"
                                        }
                                    })} ></textarea>
                                <label className="label">
                                    {errors.description?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.description.message}</p>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input
                                    type="file"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Please provide product image'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.image.message}</p>}
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add Product</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;