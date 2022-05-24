import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?buyer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setOrders(data));
        }
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Customer</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={order.productImage} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>{order.productName}</td>
                            <td>{order.buyerName}</td>
                            <td>{order.quantity}</td>
                            <td>${order.price}</td>
                            <td>
                                {!order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-primary'>Pay</button></Link>}
                                {order.paid && <div>
                                    <p><span className='text-sm font-medium text-primary'>Paid</span></p>
                                    <p>Transaction id: <span className='text-sm font-normal text-primary'>{order.transactionId}</span></p>
                                </div>}
                            </td>
                            <td>{!order.paid && <label htmlFor="delete-confirm-modal" className="btn btn-sm btn-error" onClick={() => handleDelete(order._id)}>Cancel</label>}</td>
                        </tr>)
                    }
                </tbody>
            </table>

            {/* delete confirm modal */}


        </div>
    );
};

export default MyOrders;