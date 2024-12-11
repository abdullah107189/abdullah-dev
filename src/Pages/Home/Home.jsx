import Banner from "../../Components/Banner/Banner";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div className=" text-gray-800" id="home">
            <Banner></Banner>
            {/* About Me Section */}
            <section id="about" className="py-16 bgWhite black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-[#60f318]">About Me</h2>
                        <p className="mt-4 text-lg">
                            I&apos;m a full-stack web developer with experience in building modern
                            web applications. I specialize in the MERN stack and focus on
                            delivering high-quality, responsive web solutions.
                        </p>
                        <p className="mt-4 text-lg">
                            I am passionate about coding, solving problems, and learning new
                            technologies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 bgWhite black">
                <Projects></Projects>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 bgWhite black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-[#60f318]">
                        My Services
                    </h2>
                    <p className="text-center mt-4 text-lg">
                        I provide top-notch web development services tailored to your needs. Here&apos;s what I can do for you:
                    </p>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Service 1 */}
                        <div className="bgGreen border border-gray-300 shadow-md p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#60f318]">Web Development</h3>
                            <p className="mt-2 text-sm">
                                I specialize in building responsive, scalable, and high-performance websites using the latest technologies like React, Node.js, and MongoDB.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="bgGreen border border-gray-300 shadow-md p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#60f318]">App Development</h3>
                            <p className="mt-2 text-sm">
                                I develop robust mobile applications for both Android and iOS platforms using React Native, providing cross-platform compatibility.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="bgGreen border border-gray-300 shadow-md p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#60f318]">E-commerce Solutions</h3>
                            <p className="mt-2 text-sm">
                                I can help you create an efficient and user-friendly e-commerce store with seamless integration of payment gateways, inventory management, and more.
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div className="bgGreen border border-gray-300 shadow-md p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#60f318]">UI/UX Design</h3>
                            <p className="mt-2 text-sm">
                                I offer professional UI/UX design services, focusing on creating intuitive and beautiful user interfaces that enhance the overall user experience.
                            </p>
                        </div>

                        {/* Service 5 */}
                        <div className="bgGreen border border-gray-300 shadow-md p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#60f318]">API Integration</h3>
                            <p className="mt-2 text-sm">
                                I can integrate third-party APIs into your web or mobile applications, allowing you to leverage powerful external services.
                            </p>
                        </div>

                        {/* Service 6 */}
                        <div className="bgGreen border border-gray-300 shadow-md p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#60f318]">Website Optimization</h3>
                            <p className="mt-2 text-sm">
                                I help optimize websites for faster load times and improved SEO, ensuring that your site performs well on all devices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="py-16 bgWhite black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-[#60f318]">
                        Contact Me
                    </h2>
                    <p className="text-center mt-4 text-lg">
                        Feel free to reach out to me for any project inquiries or
                        collaborations.
                    </p>
                    <div className="mt-10 max-w-3xl mx-auto">
                        <form action="#" method="POST">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="message" className="block text-sm font-semibold">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <div className="mt-6 text-center">
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-[#60f318]  rounded-full hover:bg-green-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
