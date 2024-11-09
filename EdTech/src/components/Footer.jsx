import React from 'react';

const Footer = () => {
    return (
        <footer className='sm:mt-36 xs:mt-20 flex items-center gap-10 xs:flex-wrap xs:justify-center lg:flex-nowrap lg:justify-between'>
            <img src="/assets/logo.svg" alt="" />
            <p className='text-gray-500 text-sm font-semibold'>2023 &copy; DSA revision</p>
            <div className='flex items-center gap-7'>
                <img src="/assets/icon-twitter.svg" alt="" />
                <img src="/assets/icon-youtube.svg" alt="" />
                <img src="/assets/icon-linkedin.svg" alt="" />
                <img src="/assets/icon-instagram.svg" alt="" />
            </div>
        </footer>
    );
};

export default Footer; 