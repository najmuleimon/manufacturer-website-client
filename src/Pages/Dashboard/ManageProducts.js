import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import ProductConfirmModal from './ProductConfirmModal';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/tools', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        return res.json()
    }));

    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td><label htmlFor="product-delete-modal" className="btn btn-error" onClick={() => setDeletingProduct(product)}><FaRegTrashAlt /></label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* delete confirm modal */}
            {deletingProduct && <ProductConfirmModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></ProductConfirmModal>}
        </div>
    );
};

export default ManageProducts;