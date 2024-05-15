import { ImHeart } from "react-icons/im";
import { Link } from "react-router-dom";
import MenuContent from "../header/MenuContent";

function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="container pt-12 pb-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center md:text-left md:items-start lg:text-left ">
            <div
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              <h2 className="font-bold text-2xl lg:text-xl text-gray-800 dark:text-white">
                Pages
              </h2>

              <ul className="flex flex-col items-center md:items-start mt-5 text-gray-800 dark:text-white space-y-2">
                <MenuContent></MenuContent>
              </ul>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              <p className="font-bold text-2xl lg:text-xl text-gray-800 dark:text-white">
                Industries
              </p>

              <div className="flex flex-col items-center md:items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary hover:underline hover:text-primary"
                >
                  Retail & E-Commerce
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary hover:underline hover:text-primary"
                >
                  Information Technology
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary hover:underline hover:text-primary"
                >
                  Finance & Insurance
                </a>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="500"
            >
              <p className="font-bold text-2xl lg:text-xl text-gray-800 dark:text-white">
                Services
              </p>

              <div className="flex flex-col items-center md:items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary hover:underline hover:text-primary"
                >
                  Translation
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary hover:underline hover:text-primary"
                >
                  Proofreading & Editing
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary hover:underline hover:text-primary"
                >
                  Content Creation
                </a>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="600"
            >
              <p className="font-bold text-2xl lg:text-xl text-gray-800 dark:text-white">
                Contact Us
              </p>

              <div className="flex flex-col items-center md:items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary hover:text-primary">
                  +880 1716059182
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary  hover:text-primary break-words text-wrap lg:max-w-[230px]">
                  dreammehedihassan@gmail.com
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="relative overflow-hidden flex flex-col lg:flex-row gap-3 items-center justify-between ">
            {/* logo */}
            <Link
              to="/"
              data-aos-anchor="#footerBottomAnchor"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h1 className="text-3xl font-bold text-primary font-dmsans">
                Blissful Bookings
              </h1>
            </Link>

            <p
              data-aos-anchor="#footerBottomAnchor"
              data-aos="fade-left"
              data-aos-duration="1000"
              className="mt-4 flex flex-col lg:flex-row gap-1 items-center text-base text-gray-500 sm:mt-0 dark:text-gray-300"
            >
              &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
              <ImHeart className="hidden lg:inline-block text-base text-primary"></ImHeart>{" "}
              By{" "}
              <Link
                to={"https://www.facebook.com/profile.php?id=61554869056271"}
                target="_blank"
                className="text-primary/80 underline"
              >
                Mehedi Hassan Miraj
              </Link>
              .
            </p>

            {/* data anchor */}
            <div
              id="footerBottomAnchor"
              className="hidden size-4 bg-primary absolute right-0 -top-[150px]"
            ></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
