import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import RoomBanner from "../../components/room_banner/RoomBanner";
import SectionTitle from "../../components/section_title/SectionTitle";
import RoomCart from "./RoomCart";

// To include the default styles

function Rooms() {
  // available all room data
  const [availableRooms, setAvailableRooms] = useState([]);

  // price range
  const [priceRange, setPriceRange] = useState("");

  // available unavailable

  const [availableUnavailable, setAvailableUnavailable] = useState(true);

  // current price range
  const [currentPriceRange, setCurrentPriceRange] = useState(0);

  // get first room data
  const firstRoomBanner = useLoaderData();
  // get available Rooms Data
  useEffect(() => {
    const getavailableRoomsData = async () => {
      const response = await axios.get(
        `https://blissful-bookings.vercel.app/available-rooms/?availableUnavailable=${availableUnavailable}&priceRange=${priceRange}`
      );
      const data = await response.data;
      setAvailableRooms(data);
    };
    getavailableRoomsData();
  }, [availableUnavailable, priceRange]);

  // handle price range
  const handlePriceRange = (e) => {
    setPriceRange(e.target.value);
    setCurrentPriceRange(e.target.value);
  };

  // handle available unavailable
  const filterAvailableUnAvailable = (e) => {
    const filterValue = e.target.value;
    setAvailableUnavailable(filterValue === "true" ? true : false);
  };

  return (
    <>
      <Helmet>
        <title>Blissful Booking | Rooms</title>
      </Helmet>
      {/* room page banner */}
      {firstRoomBanner && (
        <RoomBanner firstRoomBanner={firstRoomBanner}></RoomBanner>
      )}

      <section className="py-8 md:py-12">
        <SectionTitle
          title="Explore Our Available Rooms"
          description=" Discover the perfect accommodation for your stay from our selection of available rooms. Whether you're seeking a cozy retreat, a spacious suite, or something in between, we have options to suit every traveler's needs. Browse through our collection below and find the ideal room for your next getaway.."
        ></SectionTitle>
        {/* room filter by price */}
        <div className="container py-8 my:py-12 flex flex-col md:flex-row gap-4 items-center  ">
          <div className="flex flex-col">
            <label
              htmlFor="filterAvailable"
              className="flex items-center gap-2
               mb-2 text-base md:text-xl font-medium text-primary dark:text-white"
            >
              <FaFilterCircleDollar className="text-xl"></FaFilterCircleDollar>
              Filter Available/UnAvailable
            </label>
            <select
              onChange={(e) => {
                filterAvailableUnAvailable(e);
              }}
              className="ring-1 ring-primary bg-primary outline-none text-white px-3 md:px-5 py-2  rounded-tl-3xl"
              name="filterAvailable"
              id="filterAvailable"
            >
              <option disabled></option>
              <option value={true}>Available</option>
              <option value={false}>UnAvailable</option>
            </select>
          </div>
          <form className="max-w-sm mx-auto lg:!ml-auto lg:!mr-0">
            <label
              htmlFor="priceRange"
              className="flex items-center gap-2
               mb-2 text-base md:text-xl font-medium text-primary dark:text-white"
            >
              <FaFilterCircleDollar className="text-xl"></FaFilterCircleDollar>
              Filter Price Range
            </label>
            <input
              type="range"
              name="priceRange"
              id="priceRange"
              min={100}
              max={1000}
              value={priceRange}
              onChange={handlePriceRange}
              className="w-full"
            />
            <div className="flex justify-between text-gray-500">
              <span
                className={`${
                  currentPriceRange !== 0 ? "text-primary" : undefined
                } text-dark dark:text-primary `}
              >
                ${currentPriceRange}
              </span>
              <span className="text-dark dark:text-white">$1000</span>
            </div>
          </form>
        </div>
        {availableRooms.length > 0 ? (
          // {/* available rooms */}
          <div className="py-8 md:py-12 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {availableRooms?.map((availableRoom) => {
              return (
                <RoomCart
                  key={availableRoom._id}
                  availableRoom={availableRoom}
                ></RoomCart>
              );
            })}
          </div>
        ) : (
          <div className="container flex justify-center text-center">
            <h3 className="text-red-500 font-bold text-3xl">No Room Found!</h3>
          </div>
        )}
      </section>
    </>
  );
}

export default Rooms;
