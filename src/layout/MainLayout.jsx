import { Outlet, useLocation } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";
import ClickToTop from "../components/click_to_top/ClickToTop";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
// react toastify css
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

// animation init
Aos.init();
function MainLayout() {
  // location
  const { pathname } = useLocation();

  // change route scroll to top automatically
  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollTop();
  }, [pathname]);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
        className={"z-[9999]"}
      ></ToastContainer>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ClickToTop></ClickToTop>
    </>
  );
}

export default MainLayout;
