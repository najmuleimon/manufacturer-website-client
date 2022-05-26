import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../Shared/Loader';
import OrderConfirmModal from './OrderConfirmModal';

const ManageOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/orders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loader />
    }

    const handleApprove = id => {
        fetch(`http://localhost:5000/shipped/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Products shipped successfully!');
                }
                else {
                    toast.error('Failed to shipped!')
                }
            })
    }
    return (
        <div>
            <h1 className='text-xl font-semibold text-primary mb-5'>Manage all Orders</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order.productName}</td>
                                <td>{order.buyer}</td>
                                <td>
                                    {order.paid ? <p className='text-sm text-primary font-medium'>
                                        {order.status === 'approved' ? 'Shipped' : 'Pending'}
                                    </p>
                                        : <p className='text-sm text-red-500 font-medium'>Unpaid</p>}
                                </td>
                                <td>
                                    {order.paid ?
                                        <button className='btn btn-sm btn-primary' onClick={() => handleApprove(order._id)} disabled={order.status === 'approved'}>Approve</button>
                                        : <label htmlFor="delete-confirm-modal" className='btn btn-sm btn-error' onClick={() => setDeletingOrder(order)}>Cancel</label>}
                                </td>
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

export default ManageOrders;