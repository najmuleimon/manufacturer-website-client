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
    }, [])
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
                                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-primary'>Pay</button></Link>}
                                {(order.price && order.paid) && <div>
                                    <p><span className='text-sm font-medium text-primary'>Paid</span></p>
                                    <p>Transaction id: <span className='text-sm font-normal text-success'>{order.transactionId}</span></p>
                                </div>}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;