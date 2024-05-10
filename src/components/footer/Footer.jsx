import { ImHeart } from "react-icons/im";
import { Link } from "react-router-dom";
import MenuContent from "../header/MenuContent";

function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="container pt-12 pb-8 mx-auto">
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
