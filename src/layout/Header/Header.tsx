import React, { useState } from 'react';
import {Link} from "react-router-dom";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
    return (
        <nav className="bg-blue-500 p-4">
            <div className="mx-auto flex justify-between items-center">
                <Link className={'text-white text-2xl font-bold'} to={'/'}>Logo</Link>

                {/* Hamburger menu icon for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={toggleNavbar}
                        className="text-white hover:text-gray-300 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className={isOpen ? 'hidden' : 'block'}
                                d="M3 3h18v2H3V3zm0 5h18v2H3V8zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                            ></path>
                            <path
                                className={isOpen ? 'block' : 'hidden'}
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Navbar links */}
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>

                    <Link className={'text-white hover:text-gray-300 md:ml-4'} to={'/admin'}>Admin</Link>
                    <Link className={'text-white hover:text-gray-300 md:ml-4'} to={'/profile'}>Profile</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;