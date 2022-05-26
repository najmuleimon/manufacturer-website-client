import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';
import OrderConfirmModal from './OrderConfirmModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [deletingOrder, setDeletingOrder] = useState(null);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/my-orders?buyer=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json()
    }));

    if (isLoading) {
        return <Loader />
    }


    return (
        <div>
            <h1 className='text-xl font-semibold text-primary mb-5'>My Orders</h1>
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
                                <td>{!order.paid && <label htmlFor="delete-confirm-modal" className="btn btn-sm btn-error" onClick={() => setDeletingOrder(order)}>Cancel</label>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* delete confirm modal */}
            {deletingOrder && <OrderConfirmModal
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
            ></OrderConfirmModal>}


        </div>
    );
};

export default MyOrders;