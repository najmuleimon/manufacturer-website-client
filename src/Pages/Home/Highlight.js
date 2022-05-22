import React from 'react';
import bg from '../../assets/images/bg.jpg';

const Highlight = () => {
    return (
        <div className="container max-w-7xl">
            <div className="hero" style={{ background: `url(${bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content py-16">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold text-base-100">All Electronic Tools</h1>
                        <p className="mb-5 text-base-100">Great Manufacturer for electric tools market</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlight;