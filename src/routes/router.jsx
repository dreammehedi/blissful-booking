import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/about_us/AboutUs";
import ContactUs from "../pages/contact_us/ContactUs";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import MyBookings from "../pages/my_bookings/MyBookings";
import RoomDetailes from "../pages/room_detailes/RoomDetailes";
import Rooms from "../pages/rooms/Rooms";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/room-detailes/:id",
        element: <RoomDetailes></RoomDetailes>,
        loader: async ({ params }) => {
          const response = await axios.get(
            `http://localhost:5000/room-detailes/${params.id}`
          );
          const data = await response.data;
          return data;
        },
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

export default router;
