import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/about_us/AboutUs";
import ContactUs from "../pages/contact_us/ContactUs";
import Error from "../pages/error/Error";
import Gallery from "../pages/gallery/Gallery";
import Home from "../pages/home/Home";
import MyBookings from "../pages/my_bookings/MyBookings";
import RoomDetailes from "../pages/room_detailes/RoomDetailes";
import RoomReview from "../pages/room_review/RoomReview";
import Rooms from "../pages/rooms/Rooms";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import PrivateRoute from "../private_routes/PrivateRoute";

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
        loader: () => {
          return fetch(
            "https://blissful-bookings.vercel.app/first-room-banner"
          );
        },
      },
      {
        path: "/room-detailes/:id",
        element: <RoomDetailes></RoomDetailes>,
        loader: ({ params }) => {
          return fetch(
            `https://blissful-bookings.vercel.app/room-review-count/${params.id}`
          );
        },
      },
      {
        path: "/room-review/:id",
        element: (
          <PrivateRoute>
            <RoomReview></RoomReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
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
