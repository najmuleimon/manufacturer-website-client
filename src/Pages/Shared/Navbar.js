import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import auth from '../../firebase.init';
import Loader from './Loader';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        <Loader />
    }

    const logout = () => {
        signOut(auth);
    };
    return (
        <div className="container max-w-7xl">
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-1">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                            <li><NavLink to='/blogs'>Blogs</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="w-24">
                        <img className='w-full' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 space-x-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={logout} className="btn">Logout</button> : <Link to='/login' className="btn">Login</Link>
                    }
                </div>
                <label for="dashboard-drawer" class="btn btn-ghost drawer-button lg:hidden ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;