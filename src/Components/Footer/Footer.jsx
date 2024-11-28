const Footer = () => {
    return (
        <footer className="bg-[#f3f1e7] text-gray-800 py-12">
            <div className="max-w-7xl mx-auto flex flex-wrap gap-10 justify-between px-4">
                {/* About Section */}
                <div className="flex-1 min-w-[200px]">
                    <h3 className="text-xl font-semibold mb-4">About Me</h3>
                    <p className="text-sm">
                        Hi, I&apos;m Md. Abdullah All Shamem, a passionate MERN Stack Developer.
                        I specialize in building modern, responsive websites and
                        applications that deliver great user experiences.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="flex-1 min-w-[200px]">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="#about"
                                className="hover:text-[#60f318] transition-colors duration-200"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-[#60f318] transition-colors duration-200"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="hover:text-[#60f318] transition-colors duration-200"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-[#60f318] transition-colors duration-200"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Services Section */}
                <div className="flex-1 min-w-[200px]">
                    <h3 className="text-xl font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Custom Website Development</li>
                        <li>Responsive Design</li>
                        <li>API Integration</li>
                        <li>Full-Stack Development</li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="flex-1 min-w-[200px]">
                    <h3 className="text-xl font-semibold mb-4">
                        Follow Me
                    </h3>
                    <div className="flex space-x-4 text-xl">
                        <a
                            href="#"
                            className="text-gray-800 hover:text-[#60f318] transition-colors duration-200"
                        >
                            <i className="fab fa-facebook"></i> {/* Facebook Icon */}
                        </a>
                        <a
                            href="#"
                            className="text-gray-800 hover:text-[#60f318] transition-colors duration-200"
                        >
                            <i className="fab fa-twitter"></i> {/* Twitter Icon */}
                        </a>
                        <a
                            href="#"
                            className="text-gray-800 hover:text-[#60f318] transition-colors duration-200"
                        >
                            <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
                        </a>
                        <a
                            href="#"
                            className="text-gray-800 hover:text-[#60f318] transition-colors duration-200"
                        >
                            <i className="fab fa-github"></i> {/* GitHub Icon */}
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div
                className="mt-12 border-t border-gray-300 pt-6 text-center max-w-7xl mx-auto px-4"
                style={{
                    background: "linear-gradient(60%, #f6fbec 60%, rgba(96, 243, 24, 0.2) 30%, #60f318 10%)",
                }}
            >
                <p className="text-sm text-gray-700">
                    &copy; 2024 Md. Abdullah All Shamem. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
