import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
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
        const url = `http://localhost:5000/tools/${id}`;
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

    // const handlePurchase = event => {
    //     event.preventDefault();

    //     const purchase = {
    //         productId: id,
    //         productName: tools.name,
    //         buyer: user.email,
    //         buyerName: user.displayName,
    //         quantity: event.target.quantity.value
    //     }


    // }

    return (
        <div className='container max-w-7xl'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={tools.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tools.name}</h2>
                    <h4>{tools.description}</h4>
                    <h4>minimum order quantity: 100</h4>
                    <h4>available quantity: {tools.quantity}</h4>
                    <h4>price: {tools.price}</h4>
                </div>
            </div>

            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your name" disabled value={user?.displayName} className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email address" disabled value={user?.email} className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="Address" className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" placeholder="Phone number" className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product quantity</span>
                    </label>
                    <input type="text" placeholder="Quantity" name="quantity" onChange={handleQuantity} value={purchaseQuantity} className="input input-bordered input-md w-full max-w-xs" />
                    <label className="label">
                        <p className='text-sm font-normal text-red-500'>{quantityError}</p>
                    </label>
                </div>

                <button type='submit' className='btn btn-primary' disabled={purchaseQuantity < 100 || purchaseQuantity > tools.quantity}>Purchase</button>
            </form>
        </div>
    );
};

export default Purchase;