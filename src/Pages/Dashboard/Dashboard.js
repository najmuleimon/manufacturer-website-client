import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
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

                    <li><NavLink to="/dashboard/profile">My Profile</NavLink></li>
                    {
                        admin ?
                            <>
                                <li><NavLink to="/dashboard/manage-orders">Manage Orders</NavLink></li>
                                <li><NavLink to="/dashboard/add-product">Add Product</NavLink></li>
                                <li><NavLink to="/dashboard/manage-products">Manage Products</NavLink></li>
                                <li><NavLink to="/dashboard/users">Make Admin</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashboard/my-orders">My Orders</NavLink></li>
                                <li><NavLink to="/dashboard/add-review">Add a Review</NavLink></li>
                            </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;