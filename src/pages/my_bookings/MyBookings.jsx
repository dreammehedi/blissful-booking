import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";
import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../auth/AuthProvider";
import Loader from "../../components/loader/Loader";
import SectionTitle from "../../components/section_title/SectionTitle";

function MyBookings() {
  // user data
  const { user } = useContext(AuthContext);

  // handle layout
  const [layout, setLayout] = useState(true);

  const getgalleryData = async () => {
    const response = await axios.get(
      `https://blissful-bookings.vercel.app/my-booking-room/?email=${user?.email}`,
      {
        withCredentials: true,
      }
    );
    const data = await response.data;
    return data;
  };
  // react query data get
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["galleryBook"],
    queryFn: getgalleryData,
  });

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    return (
      <span className="flex justify-center items-center py-8 text-black font-bold text-3xl">
        Error: {error.message}
      </span>
    );
  }

  // handle update date after confirm
  const handleUpdateDate = async (roomId) => {
    Swal.fire({
      title: "Select Updated Date",
      input: "date",
      showCancelButton: true,
      confirmButtonColor: "rgb(81 67 217 / 80%)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update Confirm",
    }).then((result) => {
      if (result.isConfirmed && !result.value) {
        return toast.error("Please Select Update Date!");
      }
      if (result.isConfirmed && result.value) {
        const updateDateInBooking = async () => {
          const response = await axios.patch(
            `https://blissful-bookings.vercel.app/update-booked-date/${roomId}`,
            { bookingDate: result?.value }
          );
          const data = await response.data;
          if (data.modifiedCount > 0) {
            refetch();
            toast.success("Room Booked Date Updated Successfully.");
          } else {
            toast.error("Room Booked Date Not Updated.");
          }
        };
        updateDateInBooking();
      }
    });
  };

  // handle book cancellation
  const handleBookedCancel = (id, mainRoomId, bookingDate) => {
    // check booking date and current date
    const userBookedDate = moment(bookingDate);
    const currentDate = moment();
    const differentDate = userBookedDate.diff(currentDate, "days");

    if (differentDate > 1) {
      Swal.fire({
        title: "Are you sure?",
        text: "Your Room is Cancelled!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(81 67 217 / 80%)",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancel It!",
      }).then((result) => {
        if (result.isConfirmed) {
          const cancelBookedRoom = async () => {
            const response = await axios.delete(
              `https://blissful-bookings.vercel.app/my-booking/${id}`
            );
            const data = await response.data;
            if (data.deletedCount === 1) {
              const updateAvalable = async () => {
                const response = await axios.patch(
                  `https://blissful-bookings.vercel.app/update-booking-available/${mainRoomId}`,
                  {
                    available: true,
                  }
                );
                const res = await response.data;
                if (res.modifiedCount === 1) {
                  refetch();
                  toast.success("Room Cancelled Successfully.");
                } else {
                  toast.error("Room Not Cancelled.");
                }
              };
              updateAvalable();
            }
          };
          cancelBookedRoom();
        }
      });
    } else {
      toast.error("Access Denied!");
    }
  };
  return (
    <>
      <Helmet>
        <title>Blissful Booking | My Bookings</title>
      </Helmet>
      <section className="py-8 md:py-12">
        {/* section title */}
        <div className="container">
          <SectionTitle
            title="My Bookings"
            description="Explore your upcoming reservations and manage your bookings effortlessly. From here, you can view details of your booked rooms, cancel bookings if needed, and even update your booking dates with ease. Your comfort and convenience are our top priorities, and this page puts you in control of your stay. Whether you're planning your next getaway or making changes to your existing reservations, your journey starts here."
          ></SectionTitle>
        </div>
        {data?.length > 0 ? (
          // {/* hotel booking list */}
          <div className="container py-8 md:py-12">
            <div className="flex justify-between items-center gap-x-3">
              <div
                data-aos="fade-left"
                className="flex flex-col md:flex-row items-center gap-4"
              >
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  My Hotel Booking
                </h2>

                <span className="px-3 py-1 text-base text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                  {data?.length} Room
                </span>
              </div>
              <div
                data-aos="fade-right"
                className="flex flex-col md:flex-row items-center gap-4"
              >
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Change Layout
                </h2>
                <div className="flex  items-center gap-2 md:gap-4">
                  <button
                    onClick={() => {
                      setLayout(false);
                    }}
                    className={`${
                      !layout ? "text-primary" : null
                    } my-transition hover:text-primary`}
                  >
                    <BsFillGrid3X3GapFill className="text-xl"></BsFillGrid3X3GapFill>
                  </button>
                  <button
                    onClick={() => {
                      setLayout(true);
                    }}
                    className={`${
                      layout ? "text-primary" : null
                    } my-transition hover:text-primary`}
                  >
                    <FaBars className="text-xl"></FaBars>
                  </button>
                </div>
              </div>
            </div>

            {layout ? (
              <div
                data-aos="fade-down"
                data-aos-duration="900"
                className="flex flex-col mt-6"
              >
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                              <div className="flex items-center gap-x-3">
                                <span>Hotel Information</span>
                              </div>
                            </th>

                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                              <button className="flex items-center gap-x-2">
                                <span>$ Price</span>
                              </button>
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                              <button className="flex items-center gap-x-2">
                                <span>* Rating</span>
                              </button>
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                              Email address
                            </th>

                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                              Booking Date
                            </th>

                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                              Cancel Hotel
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                              Update Date
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                              Review Hotel
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                          {data?.map((roomBook) => {
                            const {
                              roomMainId,
                              _id,
                              name,
                              image_url,
                              price_per_night,
                              rating,
                              bookingDate,
                            } = roomBook;
                            return (
                              <tr key={roomBook._id}>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                  <div className="inline-flex items-center gap-x-3">
                                    <div className="flex items-center gap-x-2">
                                      <img
                                        className="object-cover w-10 h-10 rounded-full"
                                        src={image_url}
                                        alt=""
                                      />
                                      <div>
                                        <h2 className="font-medium text-gray-800 dark:text-white ">
                                          {name}
                                        </h2>
                                        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                          {user?.displayName}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  {price_per_night}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  {rating}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  {user?.email}
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                  <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                      {new Date(
                                        bookingDate
                                      ).toLocaleDateString()}
                                    </p>
                                  </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                  <button
                                    onClick={() => {
                                      handleBookedCancel(
                                        _id,
                                        roomMainId,
                                        bookingDate
                                      );
                                    }}
                                    className="rounded-full px-3 py-1 bg-red-500 text-dark hover:text-white hover:shadow hover:shadow-red-500 my-transition"
                                  >
                                    Cancel Booking
                                  </button>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                  <button
                                    onClick={() => {
                                      handleUpdateDate(_id);
                                    }}
                                    className="rounded-full px-3 py-1 bg-yellow-500 text-dark hover:text-white hover:shadow hover:shadow-yellow-500 my-transition"
                                  >
                                    Update Date
                                  </button>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                  <Link to={`/room-review/${roomMainId}`}>
                                    <button className="rounded-full px-3 py-1 bg-green-500 text-dark hover:text-white hover:shadow hover:shadow-green-500 my-transition">
                                      Review
                                    </button>
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {data?.map((roomBook) => {
                  const {
                    roomMainId,
                    _id,
                    name,
                    image_url,
                    price_per_night,
                    rating,
                    bookingDate,
                  } = roomBook;
                  return (
                    <div
                      data-aos="fade-left"
                      key={_id}
                      className="space-y-2 p-4 ring-1 ring-slate-100 rounded-lg"
                    >
                      <img
                        className="w-full h-auto object-cover rounded-lg"
                        src={image_url}
                        alt=""
                      />
                      <div className="text-primary font-bold">
                        Name:{" "}
                        <span className="text-dark dark:text-white">
                          {name}
                        </span>
                      </div>
                      <div className="text-primary font-bold">
                        Price Per Night:{" "}
                        <span className="text-dark dark:text-white">
                          {price_per_night}
                        </span>
                      </div>
                      <div className="text-primary font-bold">
                        Booking Date:{" "}
                        <span className="text-dark dark:text-white">
                          {new Date(bookingDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="text-primary font-bold">
                        Rating:{" "}
                        <span className="text-dark dark:text-white">
                          {rating}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={() => {
                            handleBookedCancel(_id, roomMainId, bookingDate);
                          }}
                          className="rounded-full px-3 py-1 bg-red-500 text-dark hover:text-white hover:shadow hover:shadow-red-500 my-transition"
                        >
                          Cancel Booking
                        </button>
                        <button
                          onClick={() => {
                            handleUpdateDate(_id);
                          }}
                          className="rounded-full px-3 py-1 bg-yellow-500 text-dark hover:text-white hover:shadow hover:shadow-yellow-500 my-transition"
                        >
                          Update Date
                        </button>
                        <Link to={`/room-review/${roomMainId}`}>
                          <button className="rounded-full px-3 py-1 bg-green-500 text-dark hover:text-white hover:shadow hover:shadow-green-500 my-transition">
                            Review
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="container justify-center py-8 md:py-12 flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                My Hotel Booking
              </h2>

              <span className="px-3 py-1 text-base text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                {data?.length} Room
              </span>
            </div>
            <div className="container flex flex-col space-y-2 justify-center items-center text-center ">
              <p className="text-primary text-3xl font-bold">
                {" "}
                You have no room booking. Please booked your room{" "}
              </p>
              <Link className="text-dark" to={"/rooms"}>
                <button className="px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold mr-auto rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl ">
                  All Rooms
                </button>
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default MyBookings;
