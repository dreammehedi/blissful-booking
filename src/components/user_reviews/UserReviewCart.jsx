import PropTypes from "prop-types";
import { MdStar } from "react-icons/md";
function UserReviewCart({ review }) {
  const { user, text, timestamp, rating, user_image } = review;
  return (
    <>
      <div className="ring-1 ring-slate-100 flex flex-col lg:flex-row justify-center lg:justify-start text-center lg:text-left items-center gap-4 md:gap-6 p-6 md:p-8 rounded-md my-transition hover:ring-primary group">
        <div className="flex flex-col justify-center items-center text-center lg:justify-normal lg:items-start lg:text-left space-y-3">
          <img
            className="ring-1 ring-primary w-16 h-16 object-cover rounded-full my-transition group-hover:!rounded-br-3xl "
            src={user_image}
            alt=""
          />
          <h3 className="font-semibold text-primary font-dmsans text-xl">
            {user}
          </h3>
          <span className="flex items-center gap-1 font-roboto font-bold text-[18px]">
            {rating}
            <MdStar className="text-yellow-400 text-[18px]"></MdStar>
          </span>
          <b className="text-dark font-semibold">
            {new Date(timestamp).toLocaleDateString()}
          </b>
        </div>
        <div className=" ">
          <p className="text-slate-400 font-poppins my-transition group-hover:text-dark">
            {text}
          </p>
        </div>
      </div>
    </>
  );
}
UserReviewCart.propTypes = {
  review: PropTypes.object.isRequired,
};
export default UserReviewCart;
