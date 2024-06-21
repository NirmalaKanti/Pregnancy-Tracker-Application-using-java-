import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full text-white py-4 px-6 flex justify-between items-center ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
            {/* Company Logo */}
            <Link to="/" className="flex items-center space-x-2">
                <img src="https://cdn1.iconfinder.com/data/icons/charity-and-donation-12/66/27_human_welfare_social_welfare_temporal_welfare_social_care_social_protection_welfare-256.png" alt="Company Logo" className="h-10 w-auto" />
                <h1 className="text-gray-700 text-xl font-bold">We Care</h1>
            </Link>

            {/* Navigation Links */}
            <ul className="flex space-x-12 text-gray-700 font-sans">
                <li>
                    <Link to="/cover" className="text-gray-700 hover:text-blue-600 text-xl">Home</Link>
                </li>
                <li>
                    <Link to="/pregnancy" className="text-gray-700 hover:text-blue-600 text-xl">Pregnancy</Link>
                </li>
                <li>
                    <Link to="/research" className="text-gray-700 hover:text-blue-600 text-xl">Research</Link>
                </li>
                <li>
                    <Link to="/askdoctor" className="text-gray-700 hover:text-blue-600 text-xl">Ask Doctor</Link>
                </li>
                <li>
                    <Link to="/AboutUs" className="text-gray-700 hover:text-blue-600 text-xl">About us</Link>
                </li>
                <li>
                    <Link to="/ContactUs" className="text-gray-700 hover:text-blue-600 text-xl">Contact us</Link>
                </li>
            </ul>

            {/* Signup Button */}
            <Link to="/" className="bg-orange-500 py-2 px-4 rounded-lg text-white font-semibold hover:bg-orange-300">LogOut</Link>
        </nav>
    );
}

export default Navbar;
