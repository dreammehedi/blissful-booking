import { useContext, useEffect, useState } from "react";
import { LiaWindowClose } from "react-icons/lia";
import { LuMenuSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../auth/AuthProvider";
import MenuContent from "./MenuContent";

function Header() {
  // get user
  const { user, userSignOut } = useContext(AuthContext);

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

  // handle sign out user
  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("User Signed Out.");
      })
      .catch(() => {
        toast.error("Sign Out Error!");
      });
  };

  // handle mobile menu hide
  const handleMobileMenuHide = () => {
    setShowMobileMenu(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
          className={`hidden z-10 flex-col gap-4 w-3/5 md:w-1/3 h-screen bg-white fixed top-0 ${
            showMobileMenu ? "right-0 !flex lg:!hidden" : "-right-full"
          }  shadow-lg p-8`}
        >
          {/* menu content */}
          <MenuContent
            handleMobileMenuHide={handleMobileMenuHide}
          ></MenuContent>
        </ul>

        {/* desktop menu */}
        <ul className="hidden lg:flex justify-center items-center gap-4 md:gap-6 font-poppins">
          {/* menu content */}
          <MenuContent></MenuContent>
        </ul>

        <div
          className="flex items-center gap-4
        "
        >
          {/* user profile */}
          {user && (
            <div className="group my-transition relative z-[999999] flex-shrink-0 cursor-pointer">
              <span className="absolute bottom-0 right-0 w-4 h-4  border rounded-full bg-green-500"></span>
              <img
                src={user?.photoURL}
                alt=""
                className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
              />
              <ul
                className="hidden group-hover:inline-block my-transition absolute top-12 rounded-tr-3xl rounded-md min-w-[350px] right-0 bg-white shadow shadow-primary p-4 space-y-2 
          "
              >
                <li className="flex items-center gap-2 pb-3">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-8 h-8 rounded-full "
                  />
                  <div>
                    <p className="text-sm font-semibold text-primary ">
                      {user?.displayName}
                    </p>
                    <p className="text-sm  text-dark">{user?.email}</p>
                  </div>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2 text-sm bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold  rounded-tr-3xl rounded-bl-3xl hover:rounded-3xl "
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* toggle menu button */}
          <div
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
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
