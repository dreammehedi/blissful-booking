import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

// menu all pages
const menuContent = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Rooms",
    path: "/rooms",
  },
  {
    id: 3,
    name: "My Bookings",
    path: "/my-bookings",
  },
  {
    id: 4,
    name: "Gallery",
    path: "/gallery",
  },
  {
    id: 5,
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 6,
    name: "Contact Us",
    path: "/contact-us",
  },
];

function MenuContent({ handleMobileMenuHide }) {
  // get user
  const { user } = useContext(AuthContext);

  return (
    <>
      {menuContent?.map((menuItem) => {
        const { id, name, path } = menuItem;
        return (
          <li onClick={handleMobileMenuHide} key={id}>
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive
                  ? "text-primary font-semibold"
                  : "text-gray-600 dark:text-gray-300 my-transition font-semibold hover:text-primary";
              }}
            >
              {name}
            </NavLink>
          </li>
        );
      })}

      {user ? null : (
        <li onClick={handleMobileMenuHide}>
          <NavLink
            to={"/signup"}
            className={({ isActive }) => {
              return isActive
                ? "text-primary font-semibold"
                : "text-dark my-transition font-semibold hover:text-primary";
            }}
          >
            Sign Up
          </NavLink>
        </li>
      )}
    </>
  );
}

MenuContent.propTypes = {
  handleMobileMenuHide: PropTypes.func,
};
export default MenuContent;
