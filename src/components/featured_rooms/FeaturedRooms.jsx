import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import SectionTitle from "../section_title/SectionTitle";
import FeaturedRoomCart from "./FeaturedRoomCart";

function FeaturedRooms() {
  const getBooksData = async () => {
    const response = await axios.get(
      "https://blissful-bookings.vercel.app/rooms"
    );
    const data = await response.data;
    return data;
  };
  // react query data get
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["featuredRooms"],
    queryFn: getBooksData,
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
    <section className="py-8 md:py-12">
      {/* section title */}
      <SectionTitle
        title="Discover Our Featured Rooms"
        description="Discover the perfect accommodation for your stay with our selection of featured rooms. From cozy retreats to spacious suites, we have something to suit every traveler's needs and budget. Whether you're planning a family vacation, a business trip, or a weekend getaway, our diverse range of rooms ensures a comfortable and enjoyable stay. Take a closer look at our featured rooms below and book your ideal accommodation today."
      ></SectionTitle>

      {/* featured room section */}
      <div className="py-8 md:py-12 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {data?.map((featuredRoom) => {
          return (
            <FeaturedRoomCart
              key={featuredRoom._id}
              featuredRoom={featuredRoom}
            ></FeaturedRoomCart>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedRooms;
