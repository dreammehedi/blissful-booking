import emailjs from "@emailjs/browser";
import { useContext, useRef } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../auth/AuthProvider";
import SectionTitle from "../../components/section_title/SectionTitle";

function ContactUs() {
  // user data
  const { user } = useContext(AuthContext);

  // use form
  const form = useRef();
  // email js private data
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  // handle contact form
  const handleContactForm = (e) => {
    e.preventDefault();

    const formData = e.target;
    const firstName = formData.firstName.value;
    const lastName = formData.lastName.value;
    const email = formData.email.value;
    const message = formData.message.value;
    if (!firstName || !lastName || !email || !message) {
      toast.error("All Fields must be Required!");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          Swal.fire({
            title: "Your message has been sent!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        () => {
          Swal.fire({
            title: "Your message has not been sent!",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        }
      );
  };
  return (
    <>
      <Helmet>
        <title>Blissful Booking | Contact US</title>
      </Helmet>
      <section className=" py-8 md:py-12 bg-white dark:bg-gray-900">
        <div className="container">
          <SectionTitle
            title="Contact Us"
            description="Reach out to us for any inquiries, assistance, or feedback. Our dedicated team is here to ensure your experience with us is seamless and enjoyable. Whether you have questions about booking a room, special requests, or general inquiries about our hotel, we're ready to assist you. Contact us through the provided channels below and let us help you make your stay unforgettable."
          ></SectionTitle>
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div
                data-aos="fade-right"
                className="flex flex-col justify-center items-center text-center md:justify-normal md:items-start md:text-left lg:p-0 lg:ring-0 ring-1 ring-slate-100 p-8 my-transition hover:ring-primary rounded-tr-3xl rounded-bl-3xl hover:rounded-3xl"
              >
                <span
                  data-aos="fade-right"
                  data-aos-delay="500"
                  className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-gray-800"
                >
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2
                  data-aos="fade-right"
                  data-aos-delay="550"
                  className="mt-4 text-base font-medium text-gray-800 dark:text-white"
                >
                  Email
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-delay="600"
                  className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  Our friendly team is here to help.
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-delay="650"
                  className="mt-2 text-sm lg:max-w-[200px] lg:text-wrap lg:break-words text-primary dark:text-primary"
                >
                  dreammehedihassan@gmail.com
                </p>
              </div>

              <div
                data-aos="fade-right"
                className="flex flex-col justify-center items-center text-center md:justify-normal md:items-start md:text-left lg:p-0 lg:ring-0 ring-1 ring-slate-100 p-8 my-transition hover:ring-primary rounded-tr-3xl rounded-bl-3xl hover:rounded-3xl"
              >
                <span
                  data-aos="fade-right"
                  data-aos-delay="500"
                  className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-gray-800"
                >
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2
                  data-aos="fade-right"
                  data-aos-delay="550"
                  className="mt-4 text-base font-medium text-gray-800 dark:text-white"
                >
                  Live chat
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-delay="600"
                  className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  Our friendly team is here to help.
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-delay="650"
                  className="mt-2 text-sm text-primary dark:text-primary"
                >
                  Start new chat
                </p>
              </div>
              <div
                data-aos="fade-right"
                className="flex flex-col justify-center items-center text-center md:justify-normal md:items-start md:text-left lg:p-0 lg:ring-0 ring-1 ring-slate-100 p-8 my-transition hover:ring-primary rounded-tr-3xl rounded-bl-3xl hover:rounded-3xl"
              >
                <span
                  data-aos="fade-right"
                  data-aos-delay="500"
                  className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-gray-800"
                >
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2
                  data-aos="fade-right"
                  data-aos-delay="550"
                  className="mt-4 text-base font-medium text-gray-800 dark:text-white"
                >
                  Office
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-delay="600"
                  className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  Come say hello at our office HQ.
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-delay="650"
                  className="mt-2 text-sm text-primary dark:text-primary"
                >
                  Mirzapur, Tangail, Dhaka, Bangladesh.
                </p>
              </div>

              <div
                data-aos="fade-right"
                className="flex flex-col justify-center items-center text-center md:justify-normal md:items-start md:text-left lg:p-0 lg:ring-0 ring-1 ring-slate-100 p-8 my-transition hover:ring-primary rounded-tr-3xl rounded-bl-3xl hover:rounded-3xl"
              >
                <span
                  data-aos="fade-right"
                  data-aos-delay="500"
                  className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-gray-800"
                >
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2
                  data-aos="fade-right"
                  data-aos-delay="550"
                  className="mt-4 text-base font-medium text-gray-800 dark:text-white"
                >
                  Phone
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-delay="600"
                  className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  Mon-Fri from 8am to 5pm.
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-delay="650"
                  className="mt-2 text-sm text-primary dark:text-primary"
                >
                  +880 1716059182
                </p>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8"
            >
              <form ref={form} onSubmit={handleContactForm}>
                <div className="-mx-2 md:items-center md:flex">
                  <div
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duratin="900"
                    className="flex-1 px-2"
                  >
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Mehedi "
                      name="firstName"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white ring-1 ring-slate-100 hover:ring-primary rounded-lg focus:ring-primary outline-none dark:bg-dark dark:text-white"
                    />
                  </div>

                  <div
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-duratin="500"
                    className="flex-1 px-2 mt-4 md:mt-0"
                  >
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Hassan"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white ring-1 ring-slate-100 hover:ring-primary rounded-lg focus:ring-primary outline-none dark:bg-dark dark:text-white"
                    />
                  </div>
                </div>

                <div
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duratin="900"
                  className="mt-4"
                >
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Email address
                  </label>
                  <input
                    defaultValue={user?.email}
                    type="email"
                    name="email"
                    placeholder="dreammehedihassan@gmail.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white ring-1 ring-slate-100 hover:ring-primary rounded-lg focus:ring-primary outline-none dark:bg-dark dark:text-white"
                  />
                </div>

                <div
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duratin="900"
                  className="w-full mt-4"
                >
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    rows={8}
                    name="message"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white ring-1 ring-slate-100 hover:ring-primary rounded-lg focus:ring-primary outline-none dark:bg-dark dark:text-white"
                    placeholder="Thanks for Contacting."
                  ></textarea>
                </div>

                <button
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duratin="900"
                  className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
