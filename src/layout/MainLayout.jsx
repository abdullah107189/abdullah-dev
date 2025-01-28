import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import Preloader from "../Components/PreLoader/PreLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import "devicon/devicon.min.css";

const MainLayout = () => {
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {pageLoading === true ? (
        <Preloader></Preloader>
      ) : (
        <div>
          <ScrollRestoration />
          <Navbar></Navbar>
          <div className="max-w-7xl mx-auto px-4">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default MainLayout;
