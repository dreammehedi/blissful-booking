import SectionTitle from "../section_title/SectionTitle";
import FeaturedRoomCart from "./FeaturedRoomCart";

function FeaturedRooms() {
  return (
    <section className="py-8 md:py-12">
      {/* section title */}
      <SectionTitle
        title="Discover Our Featured Rooms"
        description="Discover the perfect accommodation for your stay with our selection of featured rooms. From cozy retreats to spacious suites, we have something to suit every traveler's needs and budget. Whether you're planning a family vacation, a business trip, or a weekend getaway, our diverse range of rooms ensures a comfortable and enjoyable stay. Take a closer look at our featured rooms below and book your ideal accommodation today."
      ></SectionTitle>

      {/* featured room section */}
      <div className="py-8 md:py-12 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <FeaturedRoomCart></FeaturedRoomCart>
        <FeaturedRoomCart></FeaturedRoomCart>
        <FeaturedRoomCart></FeaturedRoomCart>
        <FeaturedRoomCart></FeaturedRoomCart>
        <FeaturedRoomCart></FeaturedRoomCart>
      </div>
    </section>
  );
}

export default FeaturedRooms;
