import React from 'react';
import banner from '../../assets/images/banner2.jpg';
import machine from '../../assets/images/machine.png';

const Banner = () => {
    return (
        <section className="hero bg-gray-50 bg-cover bg-center" style={{ background: `url(${banner})`, backgroundPosition: 'bottom right', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container max-w-7xl">
                <div className="hero-content max-w-full flex-col justify-between lg:flex-row-reverse">
                    <div className="flex-1">
                        <img className='ml-auto' src={machine} alt="machine" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-3xl lg:text-5xl font-bold leading-10 lg:leading-[70px]">Biggest Electronics Manufacturer</h1>
                        <p className="py-6">World's largest manufacturer for electronic tools.</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;