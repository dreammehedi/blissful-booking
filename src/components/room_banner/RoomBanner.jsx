import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RoomBanner({ firstRoomBanner }) {
  const { _id, name, image_url, description } = firstRoomBanner;
  return (
    <section
      style={{
        background: `linear-gradient(to right, rgb(2 2 2 / 80%), rgb(2 2 63 / 43%)),  url(${image_url})`,
      }}
      className="w-full !bg-no-repeat !bg-center !bg-cover"
    >
      <div
        style={{ height: `calc(100vh - 84px)` }}
        className="container md:!min-h-[500px] flex flex-col space-y-3 justify-center items-center text-center"
      >
        <h1 className="text-2xl font-semibold font-poppins text-white">
          Discover Your Perfect Retreat
        </h1>
        <h3 className="text-primary text-3xl font-bold font-roboto">{name}</h3>
        <p className="text-slate-200 md:max-w-3xl">{description}</p>
        <Link to={`/room-detailes/${_id}`}>
          <button className="mx-auto px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold  rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl ">
            View Rooms
          </button>
        </Link>
      </div>
    </section>
  );
}
RoomBanner.propTypes = {
  firstRoomBanner: PropTypes.object.isRequired,
};
export default RoomBanner;
