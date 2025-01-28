import { NavLink } from "react-router-dom";
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
                        <div className="hidden md:flex space-x-8 navbarA items-center">
                            <NavLink to={'/'}
                                duration={500}
                                className={({ isActive }) => `${isActive ? "active" : ""} relative px-2 transition duration-200 hover:text-[#60f318]`}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                duration={500}
                                to={"/#about"}
                                className="relative px-2 transition duration-200 hover:text-[#60f318]"
                            >
                                About
                            </NavLink>

                            <NavLink
                                duration={500}
                                to={"/#skills"}
                                className="relative px-2 transition duration-200 hover:text-[#60f318]"
                            >
                                Skills
                            </NavLink>

                            <NavLink
                                duration={500}
                                to={"/#projects"}
                                className="relative  px-2 transition duration-200 hover:text-[#60f318]"
                            >
                                Projects
                            </NavLink>

                            <NavLink
                                to={"/#services"}
                                duration={500}
                                className="relative px-2 transition duration-200 hover:text-[#60f318]"
                            >
                                Services
                            </NavLink>

                            <NavLink
                                to={"/#contact"}
                                className="relative px-2 transition duration-200 hover:text-[#60f318]"
                            >
                                Contact
                            </NavLink>

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

                <div className={`${isOpen ? 'right-2 top-[65px]' : '-right-72 '} shadow-lg md:hidden absolute md:w-2/3 w-1/2 min-h-[300px] flex flex-col items-center justify-center text-center transform duration-300 bgWhite rounded-lg  z-50 navbarA p-3 space-y-5 pb-5`}>

                    <NavLink to={'/'}
                        duration={500}
                        className={({ isActive }) => `${isActive ? "active" : ""} relative px-2 transition duration-200 hover:text-[#60f318]`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        duration={500}
                        to={"/#about"}
                        className="relative px-2 transition duration-200 hover:text-[#60f318]"
                    >
                        About
                    </NavLink>

                    <NavLink
                        duration={500}
                        to={"/#skills"}
                        className="relative px-2 transition duration-200 hover:text-[#60f318]"
                    >
                        Skills
                    </NavLink>

                    <NavLink
                        duration={500}
                        to={"/#projects"}
                        className="relative  px-2 transition duration-200 hover:text-[#60f318]"
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to={"/#services"}
                        duration={500}
                        className="relative px-2 transition duration-200 hover:text-[#60f318]"
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to={"/#contact"}
                        className="relative px-2 transition duration-200 hover:text-[#60f318]"
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
