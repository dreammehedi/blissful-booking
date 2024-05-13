import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { AuthContext } from "../../auth/AuthProvider";
import SectionTitle from "../../components/section_title/SectionTitle";

function RoomReview() {
  // user data
  const { user } = useContext(AuthContext);

  // date picker new data
  const [startDate, setStartDate] = useState(new Date());

  //   handle review
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const rating = form.rating.value;
    const comment = form.comment.value;
    const timeStamp = startDate;

    if (!userName || !rating || !comment || !timeStamp) {
      toast.error("All Fields must be Required!");
      return;
    }
    const reviewAllData = {
      user: userName,
      user_image: user?.photoURL,
      rating,
      text: comment,
      timeStamp,
    };
    const reviewDataSend = async () => {
      const response = await axios.post(
        `http://localhost:5000/room-review`,
        reviewAllData
      );
      const data = await response.data;
      if (data.insertedId) {
        toast.success("Your review has been submitted!");
        form.reset();
      } else {
        toast.error("Your review has not been submitted!");
      }
    };
    reviewDataSend();
  };
  return (
    <>
      <Helmet>
        <title>Blissful Booking | Room Review</title>
      </Helmet>
      <section className="py-8 md:py-12">
        <div className="container">
          {/* section title */}
          <SectionTitle
            title="Room Reviews"
            description="The user's review provides insights into what to expect from the hotel, helping others make informed decisions."
          ></SectionTitle>

          <div className="container py-8 md:py-12">
            <form
              onSubmit={handleReview}
              className="group w-full md:max-w-2xl md:mx-auto ring-1 ring-slate-100 p-4 md:p-8 rounded-lg hover:ring-primary my-transition grid grid-cols-2 gap-4"
            >
              <div className="col-span-2 relative flex flex-col space-y-1 mt-4">
                <label
                  htmlFor="userName"
                  className="group-hover:text-primary font-medium text-dark"
                >
                  UserName
                </label>
                <input
                  disabled
                  defaultValue={user?.displayName}
                  type="text"
                  name="userName"
                  className=" w-full p-3 text-dark bg-white rounded-lg dark:bg-gray-900 dark:text-gray-300 ring-1 ring-slate-100 focus:ring-primary outline-none "
                />
              </div>

              <div className=" relative flex flex-col space-y-1 mt-4">
                <label
                  htmlFor="rating"
                  className="group-hover:text-primary font-medium text-dark"
                >
                  Rating
                </label>
                <input
                  min={1}
                  max={5}
                  maxLength={1}
                  name="rating"
                  type="number"
                  placeholder="Your rating..."
                  className=" w-full p-3 text-dark bg-white rounded-lg dark:bg-gray-900 dark:text-gray-300 ring-1 ring-slate-100 focus:ring-primary outline-none "
                />
              </div>
              <div className=" relative flex flex-col space-y-1 mt-4">
                <label
                  htmlFor="timeStamp"
                  className="group-hover:text-primary font-medium text-dark"
                >
                  TimeStamp
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className=" w-full p-3 text-dark bg-white rounded-lg dark:bg-gray-900 dark:text-gray-300 ring-1 ring-slate-100 focus:ring-primary outline-none "
                />
              </div>

              <div className="col-span-2 relative flex flex-col space-y-1 mt-4">
                <label
                  htmlFor="comment"
                  className="group-hover:text-primary font-medium text-dark"
                >
                  Comment
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Your comment here..."
                  className=" w-full p-3 text-dark bg-white rounded-lg dark:bg-gray-900 dark:text-gray-300 ring-1 ring-slate-100 focus:ring-primary outline-none "
                ></textarea>
              </div>
              <div className="col-span-2 mt-6">
                <button
                  type="submit"
                  className="w-full px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold  rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl "
                >
                  Review Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default RoomReview;
