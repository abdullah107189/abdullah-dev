const Footer = () => {
    return (
        <footer className="bgWhite md:pt-12 pt-5 pb-5">
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
                            href="https://www.facebook.com/abdullah.shamem.5"
                            target="_blank"
                            className="hover:text-[#60f318] transition-colors duration-200"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="https://x.com/shamem107189"
                            target="_blank"
                            className="hover:text-[#60f318] transition-colors duration-200"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abdullah107189/"
                            target="_blank"
                            className="hover:text-[#60f318] transition-colors duration-200"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/abdullah107189"
                            target="_blank"
                            className="hover:text-[#60f318] transition-colors duration-200"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div
                className="md:mt-12 mt-5 border-t border-gray-300 md:pt-5 pt-3 text-center max-w-7xl mx-auto"
                style={{
                    background: "linear-gradient(60%, #f6fbec 60%, rgba(96, 243, 24, 0.2) 30%, #60f318 10%)",
                }}
            >
                <p className="text-sm">
                    &copy; 2024 Md. Abdullah All Shamem. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
