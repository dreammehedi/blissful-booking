import { ThreeCircles } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <section className="flex justify-center items-center py-8">
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="rgb(81 67 217)"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </section>
    </>
  );
}

export default Loader;
