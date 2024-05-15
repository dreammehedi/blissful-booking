import PropTypes from "prop-types";
function SectionTitle({ title, description }) {
  return (
    <div
      data-aos="fade-up"
      className="container flex flex-col space-y-3 justify-center items-center text-center md:max-w-3xl md:mx-auto"
    >
      <h1
        data-aos="fade-up"
        data-aos-delay="430"
        className="text-primary font-bold text-3xl font-dmsans"
      >
        {title}
      </h1>
      <p data-aos-delay="400" className="text-slate-400">
        {description}
      </p>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default SectionTitle;
