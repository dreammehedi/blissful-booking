import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RoomCart({ availableRoom }) {
  const { _id, name, image_url, available, description, price_per_night } =
    availableRoom;
  return (
    <Link
      data-aos="flip-up"
      data-aos-duration="1000"
      to={`/room-detailes/${_id}`}
    >
      <div className="ring-1 ring-slate-100 p-4 md:p-6 flex flex-col space-y-3 my-transition rounded-tr-[35px] rounded-bl-[35px] hover:ring-primary hover:!rounded-[35px] group">
        <div className="relative">
          <img
            className="w-full h-auto md:h-[250px] object-cover my-transition rounded-tr-3xl rounded-bl-3xl group-hover:!rounded-3xl"
            src={image_url}
            alt=""
          />
          <h4 className="absolute top-0 left-0 px-4 py-2 mx-auto bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold mr-auto rounded-tr-3xl rounded-bl-3xl  group-hover:!rounded-3xl ">
            {available ? "Available" : "Not Available!"}
          </h4>
          <h4 className="absolute bottom-0 right-0 px-4 py-2 mx-auto bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold mr-auto rounded-tr-3xl rounded-bl-3xl  group-hover:!rounded-3xl ">
            ${price_per_night}
          </h4>
        </div>
        <h2 className="pt-4 font-bold text-2xl text-primary font-roboto">
          {name}
        </h2>
        <p className="text-slate-400 text-sm">{description}</p>
        <span className="font-semibold text-dark dark:text-white font-dmsans">
          <b className="text-primary  font-bold font-roboto">Price: </b>$
          {price_per_night}
        </span>
        {/* <span className="font-semibold text-dark font-dmsans">
          <b className="text-primary font-bold font-roboto"> Total Reviews: </b>
          309
        </span> */}
      </div>
    </Link>
  );
}
RoomCart.propTypes = {
  availableRoom: PropTypes.object.isRequired,
};
export default RoomCart;
