import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
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
        path: "/room-detailes",
        element: <RoomDetailes></RoomDetailes>,
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>,
      },
    ],
  },
]);

export default router;
