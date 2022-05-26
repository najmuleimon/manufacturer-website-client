import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashboardConsole = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            <Link to='profile' className='btn btn-primary'>My Profile</Link>
            {
                admin ? <>
                    <Link to='manage-orders' className='btn btn-primary'>Manage Orders</Link>
                    <Link to='add-product' className='btn btn-primary'>Add Product</Link>
                    <Link to='manage-products' className='btn btn-primary'>Manage Products</Link>
                    <Link to='users' className='btn btn-primary'>Make Admin</Link>
                </>
                    : <>
                        <Link to='my-orders' className='btn btn-primary'>My Orders</Link>
                        <Link to='add-review' className='btn btn-primary'>Add a Review</Link>
                    </>
            }

        </div>
    );
};

export default DashboardConsole;