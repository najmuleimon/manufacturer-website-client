import React from 'react';
import cat1 from '../../assets/images/cat1.jpg';
import cat2 from '../../assets/images/cat2.jpg';
import cat3 from '../../assets/images/cat3.jpg';
import cat4 from '../../assets/images/cat4.jpg';
import cat5 from '../../assets/images/cat5.jpg';
import cat7 from '../../assets/images/cat7.jpg';

const Categories = () => {
    return (
        <div className='container max-w-7xl'>
            <div className='mb-10 text-center'>
                <h4 className="text-4xl text-primary font-bold">Categories</h4>
                <h2 className='text-xl font-normal'>Tools category</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="flex items-center border border-gray-200 rounded-xl p-6">
                    <div className="flex-1">
                        <h3>Machine tools</h3>
                        <p>All Machineries</p>
                    </div>
                    <div className="flex-1">
                        <img className='w-full' src={cat1} alt="" />
                    </div>
                </div>
                <div className="flex items-center border border-gray-200 rounded-xl p-6">
                    <div className="flex-1">
                        <h3>Electric Tools</h3>
                        <p>All Electric tools</p>
                    </div>
                    <div className="flex-1">
                        <img className='w-full' src={cat2} alt="" />
                    </div>
                </div>
                <div className="flex items-center border border-gray-200 rounded-xl p-6">
                    <div className="flex-1">
                        <h3>Power Tools</h3>
                        <p>Drill Machines</p>
                    </div>
                    <div className="flex-1">
                        <img className='w-full' src={cat3} alt="" />
                    </div>
                </div>
                <div className="flex items-center border border-gray-200 rounded-xl p-6">
                    <div className="flex-1">
                        <h3>Hand Tools</h3>
                        <p>Hand Machine tools</p>
                    </div>
                    <div className="flex-1">
                        <img className='w-full' src={cat4} alt="" />
                    </div>
                </div>
                <div className="flex items-center border border-gray-200 rounded-xl p-6">
                    <div className="flex-1">
                        <h3>Wireless Tools</h3>
                        <p>Wireless Machineries</p>
                    </div>
                    <div className="flex-1">
                        <img className='w-full' src={cat5} alt="" />
                    </div>
                </div>
                <div className="flex items-center border border-gray-200 rounded-xl p-6">
                    <div className="flex-1">
                        <h3>Welding tools</h3>
                        <p>Welding Machineries</p>
                    </div>
                    <div className="flex-1">
                        <img className='w-full' src={cat7} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;