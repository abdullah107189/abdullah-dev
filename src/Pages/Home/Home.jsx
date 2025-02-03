import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Skills from "./Skills/Skills";
import EducationalQualifications from "./Education/Education";
import ContactInfo from "./ContactInfo/ContactInfo";
// import Swal from "sweetalert2";
// import { useEffect } from "react";

const Home = () => {
  // useEffect(() => {
  //     const timeout = setTimeout(() => {
  //         Swal.fire({
  //             title: "Attention please!",
  //             text: "Some features and design are not yet complete. So work is still ongoing 🥰.",
  //             icon: "warning",
  //         });
  //     }, 3000);

  //     return () => clearTimeout(timeout);
  // }, []);

  return (
    <div className=" text-gray-800" id="home">
      <Helmet>
        <title>Home - Abdullah | Dev</title>
      </Helmet>
      <Banner></Banner>
      {/* About Me Section */}
      <section id="about" className="md:py-10 py-5 bgWhite black">
        <div className="mx-auto">
          <About></About>
        </div>
      </section>

      <section id="skills" className="md:py-10 py-5 bgWhite black">
        <Skills></Skills>
      </section>

      <section id="skills" className="md:py-10 my-10 py-5 bgWhite black">
        <EducationalQualifications></EducationalQualifications>
      </section>

      {/* Projects Section */}
      <section id="projects" className="md:py-10 py-5 bgWhite black">
        <Projects></Projects>
      </section>

      {/* Contact Section */}
      <section id="contact" className="md:py-10 py-5 bgWhite black">
        <ContactInfo></ContactInfo>
      </section>
    </div>
  );
};

export default Home;
