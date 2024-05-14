import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FeaturedRoomCart({ featuredRoom }) {
  const { _id, name, description, image_url, price_per_night, available } =
    featuredRoom;
  return (
    <div className="ring-1 ring-slate-100 p-4 md:p-6 flex flex-col space-y-3 my-transition rounded-tr-[35px] rounded-bl-[35px] hover:ring-primary hover:!rounded-[35px] group">
      <div className="relative">
        <img
          className="w-full h-auto md:h-[250px] object-cover my-transition rounded-tr-[35px] rounded-bl-[35px] group-hover:!rounded-[35px]"
          src={image_url}
          alt=""
        />
        <span className="absolute top-0 left-0 text-white px-6 rounded-br-[35px] group-hover:!rounded-tl-[35px] py-2 bg-primary/70 my-transition">
          {available ? "Available" : "Unavailable"}
        </span>
      </div>

      <h2 className="pt-4 font-bold text-2xl text-primary font-roboto">
        {name}
      </h2>
      <p className="text-slate-400 text-sm">{description}</p>
      <span className="font-semibold text-dark dark:text-white font-dmsans">
        ${price_per_night} per night
      </span>
      <Link to={`/room-detailes/${_id}`}>
        <button className="px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold mr-auto rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl ">
          Book Now
        </button>
      </Link>
    </div>
  );
}
FeaturedRoomCart.propTypes = {
  featuredRoom: PropTypes.object.isRequired,
};
export default FeaturedRoomCart;
