import React from 'react';
import business from '../../assets/images/business.jpg';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { AiOutlineLineChart } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';
import { RiToolsFill } from 'react-icons/ri';

const BusinessSummary = () => {
    return (
        <section style={{ background: `url(${business})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="container max-w-7xl">
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10 md:gap-y-5 py-20'>
                    <div className="text-white text-center">
                        <HiOutlineEmojiHappy className='text-6xl text-primary mx-auto' />
                        <h2 className='text-4xl font-medium py-5'>100+</h2>
                        <h3 className='text-lg font-normal capitalize'>served customers</h3>
                    </div>
                    <div className="text-white text-center">
                        <AiOutlineLineChart className='text-6xl text-primary mx-auto' />
                        <h2 className='text-4xl font-medium py-5'>120M+</h2>
                        <h3 className='text-lg font-normal capitalize'>Annual revenue</h3>
                    </div>
                    <div className="text-white text-center">
                        <HiOutlineUsers className='text-6xl text-primary mx-auto' />
                        <h2 className='text-4xl font-medium py-5'>33K+</h2>
                        <h3 className='text-lg font-normal capitalize'>Reviews</h3>
                    </div>
                    <div className="text-white text-center">
                        <RiToolsFill className='text-6xl text-primary mx-auto' />
                        <h2 className='text-4xl font-medium py-5'>50+</h2>
                        <h3 className='text-lg font-normal capitalize'>tools</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;