import { NavLink } from "react-router-dom";

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
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contact-us",
  },
];

function MenuContent() {
  return (
    <>
      {menuContent.map((menuItem) => {
        const { id, name, path } = menuItem;
        return (
          <li key={id}>
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive
                  ? "text-primary font-semibold"
                  : "text-dark my-transition font-semibold hover:text-primary";
              }}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
      <li>
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
    </>
  );
}

export default MenuContent;
