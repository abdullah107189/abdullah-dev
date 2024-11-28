import SimpleTypeWriter from 'simple-typewriter-react'
import DownloadButton from '../DownloadCV/DownloadButton';
import me from '../../assets/me.jpg'
const Banner = () => {

    return (
        <header style={{ minHeight: 'calc(100vh - 65px)' }} className="relative flex items-center px-4">
            {/* Decorative Shapes */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#4bb8f2] rounded-full blur-3xl opacity-10"></div>
            <div className="absolute right-10 top-30 w-72 h-72 bg-[#60f318] rounded-full blur-2xl opacity-10"></div>

            <div className='grid grid-cols-12 items-center z-10'>
                {/* Social Media Links */}
                <div className="hidden md:flex space-y-4 text-gray-800 flex-col items-start justify-center">

                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#60f318] transition duration-200"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.704-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.533 1.031 1.533 1.031.892 1.53 2.341 1.089 2.91.832.091-.647.35-1.089.635-1.34-2.22-.252-4.555-1.113-4.555-4.95 0-1.093.39-1.987 1.03-2.686-.103-.253-.447-1.27.098-2.646 0 0 .841-.269 2.75 1.026a9.564 9.564 0 0 1 2.5-.336 9.56 9.56 0 0 1 2.5.336c1.91-1.295 2.75-1.026 2.75-1.026.545 1.376.202 2.393.1 2.646.64.699 1.03 1.593 1.03 2.686 0 3.847-2.339 4.695-4.566 4.94.359.309.678.921.678 1.855 0 1.339-.013 2.421-.013 2.749 0 .268.181.579.688.481C19.138 20.162 22 16.413 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#60f318] transition duration-200"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.267c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.267h-3v-4.844c0-1.144-.023-2.617-1.594-2.617-1.594 0-1.837 1.248-1.837 2.538v4.923h-3v-10h2.888v1.367h.042c.402-.761 1.385-1.563 2.85-1.563 3.05 0 3.614 2.008 3.614 4.623v5.573z" />
                        </svg>
                    </a>
                </div>

                {/* center  */}
                <div className="md:col-span-6 col-span-12 mx-auto flex flex-col space-y-6">
                    {/* Name and Tagline */}
                    <h1 className="text-2xl md:text-2xl font-bold text-gray-800">
                        Hi I am <br />
                        <span className='text-3xl'>
                            <span className='blue'>M</span>d. <span className='blue'>A</span>bdullah <span className='blue'>A</span>ll <span className='blue'>S</span>hamem
                        </span>
                    </h1>
                    <div className="md:text-4xl black mt-4 text-2xl font-bold">
                        <SimpleTypeWriter
                            words={["Full Stack Developer", "MERN Enthusiast", "React Specialist"]}
                            loop={true}
                            typeSpeed={100}
                            deleteSpeed={100}
                            delay={2000}
                            cursor={true}
                            cursorStyle='_'
                            cursorColor='red'
                        />
                    </div>
                    <p className="text-lg text-gray-600 mt-2 mx-auto">
                        Crafting scalable and visually appealing web applications with a focus
                        on performance, usability, and responsive design.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="mt-6 flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                        {/* <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#60f318] text-white px-5 rounded-full py-2 hover:shadow-[#60f318] hover:shadow-custom font-semibold hover:bg-[#60f318]/10 hover:black transition duration-200"
                        >
                            Download Resume
                        </a> */}
                        <DownloadButton></DownloadButton>
                        <a
                            href="#projects"
                            className="black px-5 rounded-full py-2 border border-[#60f318] hover:shadow-[#60f318] hover:shadow-custom font-semibold hover:bg-[#60f318]/10 hover:black transition duration-200"
                        >
                            View Projects
                        </a>
                    </div>
                </div>

                <div className='md:mt-0 mt-10 md:col-span-5 col-span-12'>
                    <img className='w-full lg:h-[500px] object-contain ' src={me} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Banner;