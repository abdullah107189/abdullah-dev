import { Link, } from 'react-scroll';
import { useEffect, useState } from "react";
import './Navbar.css'
import Toggle from "../Toggle";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${isOpen ? '' : 'overflow-hidden'} ${isScrolled ? 'border-b border-gray-300 shadow-sm' : 'border-none'} sticky z-50 top-0`}>
            <nav className="bgWhite shadow-sm relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="/" className="text-2xl font-bold">
                                <span className="blue">Abdullah</span> | <span className="green">Dev</span>
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 navbarA items-center" >
                            <Link
                                smooth={true} duration={500} activeClass='text-[#60f318]'
                                to='home'
                                className="relative px-2 rounded-md transition duration-200 hover:text-[#60f318]"
                            >
                                Home
                            </Link>

                            <Link
                                smooth={true} duration={500}
                                activeClass='text-[#60f318]'
                                to="about"
                                className="relative px-2 rounded-md transition duration-200 hover:text-[#60f318]"
                            >
                                About
                            </Link>

                            <Link
                                smooth={true} duration={500}
                                to="projects"
                                className="relative  px-2 rounded-md transition duration-200 hover:text-[#60f318]"
                            >
                                Projects
                            </Link>
                            <Link
                                to="services"
                                smooth={true} duration={500}
                                className="relative px-2 rounded-md transition duration-200 hover:text-[#60f318]"
                            >
                                Services
                            </Link>
                            <Link
                                smooth={true} duration={500}
                                to="contact"
                                className="relative px-2 rounded-md transition duration-200 hover:text-[#60f318]"
                            >
                                Contact
                            </Link>
                            <Toggle></Toggle>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <Toggle></Toggle>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="ml-3 hover:text-[#60f318] focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}

                <div className={`${isOpen ? 'right-2 top-[65px]' : '-right-72 '} shadow-lg md:hidden absolute md:w-2/3 w-1/3 text-center transform duration-300 bgWhite rounded-lg  z-50 navbarA p-3 space-y-3`}>
                    <a
                        href="#about"
                        className="block relative px-2 rounded-md transition duration-200 hover:text-[#60f318]"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="block relative px-2 rounded-md transition duration-200 hover:text-[#60f318]"
                    >
                        Projects
                    </a>
                    <a
                        href="#services"
                        className="block relative px-2 rounded-md transition duration-200 hover:text-[#60f318]"
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="block relative px-2 rounded-md transition duration-200 hover:text-[#60f318]"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
