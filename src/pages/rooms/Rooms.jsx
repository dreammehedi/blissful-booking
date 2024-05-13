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

  // current price range
  const [currentPriceRange, setCurrentPriceRange] = useState(0);

  // get first room data
  const firstRoomBanner = useLoaderData();
  // get available Rooms Data
  useEffect(() => {
    const getavailableRoomsData = async () => {
      const response = await axios.get(
        `http://localhost:5000/available-rooms/?priceRange=${priceRange}`
      );
      const data = await response.data;
      setAvailableRooms(data);
    };
    getavailableRoomsData();
  }, [priceRange]);

  // handle price range
  const handlePriceRange = (e) => {
    setPriceRange(e.target.value);
    setCurrentPriceRange(e.target.value);
  };
  return (
    <>
      <Helmet>
        <title>Blissful Booking | Rooms</title>
      </Helmet>
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
                } text-dark`}
              >
                ${currentPriceRange}
              </span>
              <span className="text-dark">$1000</span>
            </div>
            {/* <select
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
            </select> */}
          </form>
        </div>

        {/* available rooms */}
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
      </section>
    </>
  );
}

export default Rooms;
