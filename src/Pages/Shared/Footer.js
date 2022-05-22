import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="xl:px-24 bg-neutral text-neutral-content">
            <div className="footer p-10 py-20">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </div>

            <div className="footer footer-center p-4 text-base-content">
                <p>Copyright © {year} - All right reserve</p>
            </div>
        </footer>

    );
};

export default Footer;