import PropTypes from "prop-types";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

// rating star component
export const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<MdStar key={i} className="text-yellow-400 text-[18px]" />);
  }
  return <>{stars}</>;
};

function UserReviewCart({ review }) {
  const { user, text, timeStamp, rating, user_image, roomName, mainRoomId } =
    review;

  return (
    <>
      <div className="ring-1 ring-slate-100 flex flex-col lg:flex-row justify-center lg:justify-start text-center lg:text-left items-center gap-4 md:gap-6 p-6 md:p-8 rounded-md my-transition hover:ring-primary group">
        <div className="flex flex-col justify-center items-center text-center lg:justify-normal lg:items-start lg:text-left space-y-3">
          <img
            className="ring-1 ring-primary w-16 h-16 object-cover rounded-full my-transition group-hover:!rounded-br-3xl "
            src={user_image}
            alt=""
          />
          <h3 className="font-semibold text-primary font-dmsans text-base">
            {user}
          </h3>
          <span className="flex items-center gap-1 font-roboto font-bold text-[18px]">
            <RatingStars rating={parseInt(rating)}></RatingStars>
          </span>
          <b className="text-dark dark:text-white font-semibold">
            {new Date(timeStamp).toLocaleDateString()}
          </b>
        </div>
        <div className="text-center ">
          <h4 className="text-primary text-[18px] font-semibold">{roomName}</h4>
          <p className="text-slate-400 font-poppins my-transition group-hover:text-dark dark:group-hover:text-white">
            {text.slice(0, 200)}{" "}
            <Link
              className="my-transition hover:text-dark text-primary hover:dark:text-slate-500 font-bold text-sm"
              to={`/room-detailes/${mainRoomId}`}
            >
              {`  Read More >>`}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
UserReviewCart.propTypes = {
  review: PropTypes.object.isRequired,
};
RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default UserReviewCart;
