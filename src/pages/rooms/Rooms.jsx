import RoomPagination from "../../components/pagination/RoomPagination";
import RoomBanner from "../../components/room_banner/RoomBanner";
import SectionTitle from "../../components/section_title/SectionTitle";
import RoomCart from "./RoomCart";

function Rooms() {
  return (
    <>
      {/* room page banner */}
      <RoomBanner></RoomBanner>

      <section className="py-8 md:py-12">
        {/* section title */}
        <SectionTitle
          title="Explore Our Available Rooms"
          description=" Discover the perfect accommodation for your stay from our selection of available rooms. Whether you're seeking a cozy retreat, a spacious suite, or something in between, we have options to suit every traveler's needs. Browse through our collection below and find the ideal room for your next getaway.."
        ></SectionTitle>

        {/* available rooms */}
        <div className="py-8 md:py-12 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <RoomCart></RoomCart>
          <RoomCart></RoomCart>
          <RoomCart></RoomCart>
          <RoomCart></RoomCart>
          <RoomCart></RoomCart>
          <RoomCart></RoomCart>
          <RoomCart></RoomCart>
          <RoomCart></RoomCart>
          <RoomCart></RoomCart>
          <RoomCart></RoomCart>
          <RoomCart></RoomCart>
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
