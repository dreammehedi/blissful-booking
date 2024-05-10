import { useEffect, useState } from "react";
import { LiaWindowClose } from "react-icons/lia";
import { LuMenuSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import MenuContent from "./MenuContent";

function Header() {
  // toggle mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // sticky header
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    const handleStickyHeader = () => {
      if (window.scrollY > 50) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    };
    window.addEventListener("scroll", handleStickyHeader);
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []);

  return (
    <header
      className={`w-full h-auto bg-white ${
        stickyHeader ? "sticky top-0 left-0 z-[999] drop-shadow-lg" : undefined
      }`}
    >
      <nav className="container flex justify-between items-center py-6">
        {/* logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-primary font-dmsans">
            Blissful Bookings
          </h1>
        </Link>

        {/* mobile menu */}
        <ul
          className={`lg:hidden z-10 flex flex-col gap-4 w-3/5 md:w-1/3 h-screen bg-white fixed top-0 ${
            showMobileMenu ? "right-0" : " -right-full"
          }  shadow-lg p-8`}
        >
          {/* menu content */}
          <MenuContent></MenuContent>
        </ul>

        {/* desktop menu */}
        <ul className="hidden lg:flex justify-center items-center gap-4 font-poppins">
          {/* menu content */}
          <MenuContent></MenuContent>
        </ul>

        {/* toggle menu button */}
        <button
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
          className="lg:hidden z-30 text-dark my-transition hover:text-primary"
        >
          {showMobileMenu ? (
            <LiaWindowClose className="text-3xl "></LiaWindowClose>
          ) : (
            <LuMenuSquare className="text-3xl "></LuMenuSquare>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
