import PropTypes from "prop-types";
function SectionTitle({ title, description }) {
  return (
    <div className="container flex flex-col space-y-3 justify-center items-center text-center md:max-w-2xl md:mx-auto">
      <h1 className="text-primary font-bold text-3xl font-dmsans">{title}</h1>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default SectionTitle;
