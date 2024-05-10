import { Outlet } from "react-router-dom";
import ClickToTop from "../components/click_to_top/ClickToTop";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function MainLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ClickToTop></ClickToTop>
    </>
  );
}

export default MainLayout;
