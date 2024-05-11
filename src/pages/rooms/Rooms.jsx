import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaFilterCircleDollar } from "react-icons/fa6";
import Loader from "../../components/loader/Loader";
import RoomPagination from "../../components/pagination/RoomPagination";
import RoomBanner from "../../components/room_banner/RoomBanner";
import SectionTitle from "../../components/section_title/SectionTitle";
import RoomCart from "./RoomCart";

function Rooms() {
  // get first room data
  const [firstRoomBanner, setFirstRoomBanner] = useState({});

  // all available rooms data get
  const getavailableRoomsData = async () => {
    const response = await axios.get("http://localhost:5000/available-rooms");
    const data = await response.data;
    setFirstRoomBanner(data[0]);
    return data;
  };
  // react query data get
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["availableRooms"],
    queryFn: getavailableRoomsData,
  });

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    return (
      <span className="flex justify-center items-center py-8 text-black font-bold text-3xl">
        Error: {error.message}
      </span>
    );
  }
  return (
    <>
      {/* room page banner */}
      <RoomBanner firstRoomBanner={firstRoomBanner}></RoomBanner>

      <section className="py-8 md:py-12">
        {/* section title */}
        <SectionTitle
          title="Explore Our Available Rooms"
          description=" Discover the perfect accommodation for your stay from our selection of available rooms. Whether you're seeking a cozy retreat, a spacious suite, or something in between, we have options to suit every traveler's needs. Browse through our collection below and find the ideal room for your next getaway.."
        ></SectionTitle>

        {/* room filter by price */}
        <div className="container py-8 my:py-12 flex flex-col items-center lg:items-end text-right space-y-3 justify-center lg:justify-end">
          <form className="max-w-sm mx-auto lg:!ml-auto lg:!mr-0">
            <label
              htmlFor="countries"
              className="flex items-center gap-2
               mb-2 text-xl font-medium text-primary dark:text-white"
            >
              <FaFilterCircleDollar className="text-xl"></FaFilterCircleDollar>{" "}
              Filter Price Range
            </label>
            <select
              id="countries"
              className="bg-transparent ring-1 ring-dark text-dark text-sm rounded-lg outline-none focus:ring-primary block w-full p-2.5 "
            >
              <option disabled></option>
              <option defaultValue>Choose a Range</option>
              <option disabled></option>
              <option value="100">$ 100</option>
              <option value="200">$ 200</option>
              <option value="300">$ 300</option>
              <option value="400">$ 400</option>
              <option value="500">$ 500</option>
              <option value="600">$ 600</option>
              <option value="700">$ 700</option>
              <option value="800">$ 800</option>
              <option disabled></option>
            </select>
          </form>
        </div>

        {/* available rooms */}
        <div className="py-8 md:py-12 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data?.map((availableRoom) => {
            return (
              <RoomCart
                key={availableRoom._id}
                availableRoom={availableRoom}
              ></RoomCart>
            );
          })}
        </div>

        {/* all available rooms pagination */}
        <div className="container py-8 md:py-12 flex justify-center items-center">
          <RoomPagination></RoomPagination>
        </div>
      </section>
    </>
  );
}

export default Rooms;
