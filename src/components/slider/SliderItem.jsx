import PropTypes from "prop-types";
function SliderItem({ video, title, bg, des, children }) {
  return (
    <div
      style={{
        background: `linear-gradient(to right, rgb(17 17 17 / 40%), rgb(86 71 4 / 30%)), url(${bg})`,
      }}
      className="overflow-hidden w-full h-full !bg-no-repeat !bg-cover !bg-right-top flex flex-col items-center justify-center"
    >
      <div className="relative w-full h-full !bg-no-repeat !bg-cover !bg-right-top flex flex-col items-center justify-center">
        <div
          data-aos="zoom-in"
          className="space-y-3 md:space-y-6 w-full h-full flex justify-center items-center flex-col text-center  relative z-30 p-5 text-2xl text-white bg-dark/20 "
        >
          <h1 className="text-white dark:text-slate-300 text-2xl md:text-3xl  font-bold capitalize font-poppins">
            {title}
          </h1>
          <p className="text-slate-200 text-base dark:text-slate-200 md:max-w-3xl md:mx-auto">
            {des}
          </p>
          {children}
        </div>
        <video
          autoPlay
          loop
          muted
          className="hidden lg:inline-block absolute z-10 w-auto !min-w-full !min-h-full "
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
SliderItem.propTypes = {
  video: PropTypes.string,
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default SliderItem;
