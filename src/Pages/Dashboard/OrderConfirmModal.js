import React from 'react';
import { toast } from 'react-toastify';

const OrderConfirmModal = ({ deletingOrder, refetch, setDeletingOrder }) => {

    const handleDelete = id => {
        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Order is deleted Successfully!");
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-medium text-sm text-neutral">Are you sure you want to delete your order?</h3>
                    <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn btn-neutral">Cancel</label>
                        <button onClick={() => handleDelete(deletingOrder._id)} class="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmModal;