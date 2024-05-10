import { ImHeart } from "react-icons/im";
import { Link } from "react-router-dom";
import MenuContent from "../header/MenuContent";

function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="container pt-12 pb-8 mx-auto">
          <div className="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl dark:text-white">
              Subscribe our newsletter to get update.
            </h1>

            <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
              <Link
                to={"/sign-up"}
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                <span>Sign Up Now</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h2 className="font-bold text-xl text-gray-800 dark:text-white">
                Pages
              </h2>

              <ul className="flex flex-col items-start mt-5 space-y-2">
                <MenuContent></MenuContent>
              </ul>
            </div>

            <div>
              <p className="font-bold text-xl text-gray-800 dark:text-white">
                Industries
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Retail & E-Commerce
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Information Technology
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Finance & Insurance
                </a>
              </div>
            </div>

            <div>
              <p className="font-bold text-xl text-gray-800 dark:text-white">
                Services
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Translation
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Proofreading & Editing
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Content Creation
                </a>
              </div>
            </div>

            <div>
              <p className="font-bold text-xl text-gray-800 dark:text-white">
                Contact Us
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:text-blue-500">
                  +880 1716059182
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:text-blue-500">
                  dreammehedihassan@gmail.com
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="flex flex-col items-center justify-between sm:flex-row">
            {/* logo */}
            <Link to="/">
              <h1 className="text-3xl font-bold text-primary font-dmsans">
                Blissful Bookings
              </h1>
            </Link>

            <p className="mt-4 flex gap-1 items-center text-base text-gray-500 sm:mt-0 dark:text-gray-300">
              &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
              <ImHeart className="text-base text-primary"></ImHeart> By{" "}
              <Link
                to={"https://www.facebook.com/profile.php?id=61554869056271"}
                target="_blank"
                className="text-primary/80 underline"
              >
                Mehedi Hassan Miraj
              </Link>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
