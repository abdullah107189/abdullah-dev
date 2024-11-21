import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${isOpen ? '' : 'overflow-hidden'} `}>
            <nav className="bg-[#f6fbec] border-b border-gray-300 shadow-sm relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16 z-50">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="/" className="text-2xl font-bold text-[#60f318]">
                                Abdullah | Dev
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <a
                                href="#about"
                                className="text-gray-800 hover:text-[#60f318] transition duration-200"
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="text-gray-800 hover:text-[#60f318] transition duration-200"
                            >
                                Projects
                            </a>
                            <a
                                href="#services"
                                className="text-gray-800 hover:text-[#60f318] transition duration-200"
                            >
                                Services
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-800 hover:text-[#60f318] transition duration-200"
                            >
                                Contact
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-800 hover:text-[#60f318] focus:outline-none"
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

                <div className={`${isOpen ? 'right-0 top-[65px]' : '-right-72 '} md:hidden absolute md:w-2/3 w-1/3 text-center transform duration-300 bg-[#f6fbec] shadow-md z-50`}>
                    <a
                        href="#about"
                        className="block px-4 py-2 text-gray-800 hover:text-[#60f318] transition duration-200"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="block px-4 py-2 text-gray-800 hover:text-[#60f318] transition duration-200"
                    >
                        Projects
                    </a>
                    <a
                        href="#services"
                        className="block px-4 py-2 text-gray-800 hover:text-[#60f318] transition duration-200"
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="block px-4 py-2 text-gray-800 hover:text-[#60f318] transition duration-200"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
