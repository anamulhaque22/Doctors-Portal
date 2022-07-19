import React from 'react';

const Footer = () => {
    return (
        // bg-footer-bg in tailwind.config.js
        <div className='container-area bg-footer-bg bg-contain'>
            <footer className="footer pt-12 text-accent sm:grid-cols-3">
                <div>
                    <span className="text-lg text-[#939393] font-bold">Services</span>
                    <a className="link link-hover text-base">Emergency Checkup</a>
                    <a className="link link-hover text-base">Monthly Checkup</a>
                    <a className="link link-hover text-base">Weekly Checkup</a>
                    <a className="link link-hover text-base">Deep Checkup</a>
                </div>
                <div>
                    <span className="text-lg text-[#939393] font-bold">ORAL HEALTH</span>
                    <a className="link link-hover text-base">Fluoride Treatment</a>
                    <a className="link link-hover text-base">Cavity Filling</a>
                    <a className="link link-hover text-base">Teath Whitening</a>
                </div>
                <div>
                    <span className="text-lg text-[#939393] font-bold">OUR ADDRESS</span>
                    <a className="link link-hover text-base">New York - 101010 Hudson</a>
                </div>
            </footer>
            <footer className="footer py-4 text-accent mt-10 md:mt-14 place-items-center">
                <p className='text-base text-[#000000] text-center'>
                    Copyright &#169; 2022 All Rights Reserved
                </p>
            </footer>
        </div>
    );
};

export default Footer;