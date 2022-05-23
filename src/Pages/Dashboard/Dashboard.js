import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile bg-gray-50">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content p-5">
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <h1>Dashboard</h1>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><NavLink to="/dashboard">My Orders</NavLink></li>
                    <li><NavLink to="/dashboard/add-review">Add a Review</NavLink></li>
                    <li><NavLink to="/dashboard/profile">My Profile</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;