import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import Loader from '../Shared/Loader';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const [tools, setTools] = useState({});
    const [purchaseQuantity, setPurchaseQuantity] = useState(100);
    const [quantityError, setQuantityError] = useState('');
    const { id } = useParams();

    if (loading) {
        <Loader />
    }

    useEffect(() => {
        const url = `https://warm-badlands-89988.herokuapp.com/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [id, setTools]);

    const handleQuantity = event => {
        const newQuantity = event.target.value;
        setPurchaseQuantity(newQuantity);
        if (newQuantity < 100) {
            setQuantityError('You can not purchase item less than 100 pieces')
        }
        else if (newQuantity > tools.quantity) {
            setQuantityError(`You can not purchase item more than ${tools.quantity} pieces`)
        }
        else {
            setQuantityError('');
        }
    }

    const handlePurchase = event => {
        event.preventDefault();
        let toolQuantity = JSON.parse(tools.quantity);
        let givenQuantity = parseInt(event.target.quantity.value);
        let newQuantity = toolQuantity - givenQuantity;
        let toolPrice = JSON.parse(tools.price);
        let totalPrice = givenQuantity * toolPrice;

        const purchase = {
            productId: id,
            productName: tools.name,
            productImage: tools.image,
            buyer: user.email,
            buyerName: user.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,
            price: totalPrice,
        }

        fetch('https://warm-badlands-89988.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Order placed Successfully!");
                }
                else {
                    toast.error("Sorry! Try again!")
                }
            });


        setTools({ ...tools, quantity: newQuantity })


        const url = `https://warm-badlands-89988.herokuapp.com/tools/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }

    return (
        <div>
            <div className='container max-w-7xl py-20'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className='max-w-sm mx-auto'><img className='w-full' src={tools.image} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{tools.name}</h2>
                            <p>{tools.description}</p>
                            <h4 className='text-lg font-semibold'>Minimum order quantity: 100</h4>
                            <h4 className='text-lg font-semibold'>Available quantity: {tools.quantity}</h4>
                            <h4 className='text-xl text-primary font-semibold'>Price: {tools.price}</h4>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1 className='text-xl font-semibold text-primary mb-5'>Buy this Product</h1>
                            <form onSubmit={handlePurchase}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" disabled value={user?.displayName} className="input input-bordered input-md w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email address" disabled value={user?.email} className="input input-bordered input-md w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="Address" name="address" className="input input-bordered input-md w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="tel" placeholder="Phone number" name="phone" className="input input-bordered input-md w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product quantity</span>
                                    </label>
                                    <input type="text" placeholder="Quantity" name="quantity" onChange={handleQuantity} value={purchaseQuantity} className="input input-bordered input-md w-full" />
                                    <label className="label">
                                        <p className='text-sm font-normal text-red-500'>{quantityError}</p>
                                    </label>
                                </div>

                                <button type='submit' className='btn btn-primary' disabled={purchaseQuantity < 100 || purchaseQuantity > tools.quantity}>Purchase</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Purchase;