import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loader from '../Shared/Loader';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user || googleUser);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    let signInError, googleSignInError;

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast.success("Logged In Successfully!");
        }
    }, [token, navigate, from])

    if (loading || googleLoading) {
        return <Loader />
    }

    if (error || googleError) {
        signInError = <p className='text-sm font-normal text-red-500'>{error?.message}</p>
        googleSignInError = <p className='text-sm font-normal text-red-500'>{googleError?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className="w-full flex items-center justify-center my-16 xl:my-0" style={{ height: 'calc(100vh - 64px)' }}>
            <div className="card w-full max-w-lg shadow-xl bg-base-100">
                <div className="card-body">
                    {/* title */}
                    <h2 className="text-center text-xl font-medium">Login</h2>

                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Please provide your email"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Please provide a valid email"
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='text-sm font-normal text-red-500'>{errors.email.message}</p>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Please provide your password"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: "Password must be minimum eight characters(at least one letter and one number)"
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.password.message}</p>}
                                {errors.password?.type === 'pattern' && <p className='text-sm font-normal text-red-500'>{errors.password.message}</p>}
                            </label>
                        </div>

                        {/* login error */}
                        {signInError}
                        {googleSignInError}

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-base-100">Login</button>
                        </div>
                    </form>

                    {/* signup page link */}
                    <p><small>Don't have any Account? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>

                    {/* google login button */}
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline hover:bg-primary hover:border-primary">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;