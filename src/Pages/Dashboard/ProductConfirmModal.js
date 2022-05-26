import React from 'react';
import { toast } from 'react-toastify';

const ProductConfirmModal = ({ deletingProduct, refetch, setDeletingProduct }) => {

    const handleDelete = id => {
        const url = `http://localhost:5000/tool/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Product deleted Successfully!");
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="product-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-medium text-sm text-neutral">Are you sure you want to delete this product?</h3>
                    <div className="modal-action">
                        <label htmlFor="product-delete-modal" className="btn btn-neutral">Cancel</label>
                        <button onClick={() => handleDelete(deletingProduct._id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductConfirmModal;