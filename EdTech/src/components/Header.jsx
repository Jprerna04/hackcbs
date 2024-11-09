import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='fixed top-0 left-0 right-0 smd:py-4 bg-white mx-auto max-w-screen-xl w-full xs:py-3'>
            <div className='flex justify-between items-center smd:px-10 xs:px-4'>
                <img src="/assets/logo.svg" alt="" />

                <div className='bg-gray-100 px-5 py-2 rounded-3xl md:block xs:hidden'>
                    <ul className='flex gap-6 text-gray-500 font-medium text-sm'>
                        <li><a href="#" className='transitionElement hover:text-gray-800'>Intro</a></li>
                        <li><a href="#" className='transitionElement hover:text-gray-800'>Pricing</a></li>
                        <li><a href="#" className='transitionElement hover:text-gray-800'>Features</a></li>
                        <li><a href="#" className='transitionElement hover:text-gray-800'>Testimonials</a></li>
                    </ul>
                </div> 

                <div className='md:block xs:hidden'>
                    <button className='buttonStyle bg-darkGreen hover:bg-brightGreen'>Join Community</button>
                </div>

                <div className='md:hidden sm:block' id="dropdown" onClick={toggleDropdown}>
                    <FaBars />
                </div>

                {isOpen && (
                    <div className='absolute bg-gray-100 rounded-md top-[70px] right-[25px] py-4 px-8'>
                        <ul className='flex flex-col gap-6 text-gray-500 font-medium text-sm'>
                            <li><a href="#" className='transitionElement hover:text-gray-800'>Intro</a></li>
                            <li><a href="#" className='transitionElement hover:text-gray-800'>Pricing</a></li>
                            <li><a href="#" className='transitionElement hover:text-gray-800'>Features</a></li>
                            <li><a href="#" className='transitionElement hover:text-gray-800'>Testimonials</a></li>
                            <button className='buttonStyle bg-darkGreen hover:bg-brightGreen'>Join Community</button>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
