import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile bg-gray-50">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-5">

                <h1>Dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    {
                        admin ?
                            <>
                                <li><Link to="/dashboard/manage-orders">Manage Orders</Link></li>
                                <li><Link to="/dashboard/add-product">Add Product</Link></li>
                                <li><Link to="/dashboard/manage-products">Manage Products</Link></li>
                                <li><Link to="/dashboard/users">Users</Link></li>
                            </>
                            :
                            <>
                                <li><Link to="/dashboard">My Orders</Link></li>
                                <li><Link to="/dashboard/add-review">Add a Review</Link></li>
                            </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;