import SimpleTypeWriter from "simple-typewriter-react";
import DownloadButton from "../DownloadCV/DownloadButton";
import me from "../../assets/me.jpg";
import me2 from "../../assets/mess-me.jpg";
import me3 from "../../assets/ruet-me.jpg";
import { useEffect, useState } from "react";
const Banner = () => {
  const images = [me, me2, me3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      style={{ minHeight: "calc(100vh - 65px)" }}
      className="relative flex items-center"
    >
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#4bb8f2] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute right-10 top-30 w-72 h-72 bg-[#60f318] rounded-full blur-2xl opacity-10"></div>

      <div
        data-aos="fade-up"
        className="grid grid-cols-12 items-center z-10 md:m-0 mt-10"
      >
        {/* Social Media Links */}
        <div className="hidden md:flex space-y-4 flex-col items-start justify-center">
          <a
            data-aos="fade-left"
            data-aos-delay="600"
            href="https://github.com/abdullah107189"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#60f318] transition duration-200 black"
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
            data-aos="fade-left"
            data-aos-delay="700"
            href="https://www.linkedin.com/in/abdullah107189"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#60f318] transition duration-200 black"
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
          <a
            data-aos="fade-left"
            data-aos-delay="700"
            href="https://www.facebook.com/abdullah.shamem.5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#60f318] transition duration-200 black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.918c-1.505 0-1.797.715-1.797 1.763v2.31h3.591l-.467 3.622h-3.124V24h6.116c.729 0 1.322-.593 1.322-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
        </div>

        {/* center  */}
        <div className="md:col-span-6 col-span-12 mx-auto flex flex-col space-y-6">
          {/* Name and Tagline */}
          <div className="text-2xl md:text-2xl font-bold black">
            <p data-aos="fade-up" data-aos-delay="100">
              Hi I am
            </p>
            <p data-aos="fade-up" data-aos-delay="200" className="text-3xl">
              <span className="blue">M</span>d. <span className="blue">A</span>
              bdullah <span className="blue">A</span>ll{" "}
              <span className="blue">S</span>hamem
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="md:text-4xl black mt-4 text-2xl font-bold"
          >
            <SimpleTypeWriter
              words={[
                "Full Stack Developer",
                "MERN Enthusiast",
                "React Specialist",
              ]}
              loop={true}
              typeSpeed={100}
              deleteSpeed={100}
              delay={2000}
              cursor={true}
              cursorStyle="_"
              cursorColor="red"
            />
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-lg black mt-2 mx-auto"
          >
            Crafting scalable and visually appealing web applications with a
            focus on performance, usability, and responsive design.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <div data-aos="fade-left" data-aos-delay="500">
              <DownloadButton></DownloadButton>
            </div>
            <a
              data-aos="fade-right"
              data-aos-delay="500"
              href="#projects"
              className="black px-5 rounded-full py-2 border border-[#60f318] hover:shadow-[#60f318] hover:shadow-custom font-semibold hover:bg-[#60f318]/10 hover:black transition duration-200"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="md:mt-0 mt-10 md:col-span-5 col-span-12 relative xl:h-[600px] lg:h-[500px] md:h-[450px] h-[600px] w-full ">
          <img
            data-aos="fade-right"
            data-aos-delay="100"
            className="absolute w-[250px] h-[450px] md:w-[200px] md:h-[400px] lg:w-[250px] xl:w-[300px] xl:h-[500px]   left-0 object-cover rounded-2xl p-1 transition-all duration-1000 ease-in-out"
            src={images[currentIndex]}
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            className="absolute w-[200px] h-[200px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] object-top lg:top-44 md:top-44 z-10 top-48 right-0 object-cover rounded-2xl p-1 ease-in-out transition-all duration-1000"
            src={images[(currentIndex + 1) % images.length]}
            alt=""
          />
          <img
            className="absolute w-[200px] h-[200px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]  object-top bottom-0 md:right-[25%] right-[20%]  z-20 object-cover rounded-2xl p-1 ease-in-out transition-all duration-1000"
            src={images[(currentIndex + 2) % images.length]}
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Banner;
