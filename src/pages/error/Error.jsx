import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-xl  font-semibold text-dark dark:text-blue-400">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-bold text-primary dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            {`Sorry, the page you are looking for doesn't exist.Here are some
            helpful links:`}
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="animate-bounce px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold mr-auto rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl "
            >
              Back To Home
            </button>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0 animate-pulse ">
          <img
            className="w-full max-w-lg lg:mx-auto rounded-tr-3xl rounded-bl-3xl rounded-md"
            src="
            https://img.freepik.com/free-vector/404-error-with-man-thinking_24908-77772.jpg?t=st=1715274655~exp=1715278255~hmac=fce9af80ba03078082a1c190770e4856773dcf636f8e388cac87d6147b575530&w=740"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Error;
