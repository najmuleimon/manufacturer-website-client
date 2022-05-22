import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="xl:px-24 bg-neutral text-neutral-content">
            <div className="footer p-10 py-20">
                <div>
                    <span className="footer-title">Products</span>
                    <button className="link link-hover">Electronics</button>
                    <button className="link link-hover">Tools</button>
                    <button className="link link-hover">Parts</button>
                    <button className="link link-hover">Others</button>
                </div>
                <div>
                    <span className="footer-title">Information</span>
                    <button className="link link-hover">About Us</button>
                    <button className="link link-hover">Blogs</button>
                    <button className="link link-hover">Reviews</button>
                    <button className="link link-hover">Contact</button>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <button className="link link-hover">79/2 New Vally, New York</button>
                </div>
            </div>

            <div className="footer footer-center p-4 text-base-100">
                <p>Copyright © {year} - All right reserve</p>
            </div>
        </footer>

    );
};

export default Footer;