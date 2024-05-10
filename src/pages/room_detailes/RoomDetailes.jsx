import { BsSafe } from "react-icons/bs";
import { FaBath, FaPhone, FaWifi } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiTowel } from "react-icons/gi";
import { IoBed, IoTvSharp } from "react-icons/io5";
import { LuRefrigerator } from "react-icons/lu";
import { MdBalcony, MdBreakfastDining, MdIron } from "react-icons/md";
import { PiBowlSteamFill, PiHairDryerFill } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import { TbAirConditioning } from "react-icons/tb";
import SectionTitle from "../../components/section_title/SectionTitle";

function RoomDetailes() {
  return (
    <section className="py-8 md:py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* room image */}
        <img
          className="w-full h-auto min-h-[400px] object-cover"
          src="https://pura.uxper.co/hostel/wp-content/uploads/sites/3/2021/06/r21.webp"
          alt=""
        />

        {/* room all content */}
        <div className="group flex flex-col space-y-4 ring-1 ring-slate-100 p-6 md:p-8 my-transition hover:ring-primary">
          <div className="flex flex-col space-y-3">
            <h4 className="text-primary font-semibold font-roboto">
              $100 Per Night
            </h4>
            <h1 className="text-dark font-bold text-3xl">Junior Suite</h1>

            <p className="text-slate-400">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 group-hover:*:text-primary">
            <div className="flex items-center gap-1 text-slate-500 text-xl">
              <SlSizeFullscreen></SlSizeFullscreen>
              35m<sup>2</sup>
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-xl">
              <IoBed></IoBed>3 Beds
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-xl">
              <FaBath></FaBath>2 Bath
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-xl">
              <FaPeopleRoof></FaPeopleRoof>5 Guests
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8">
            {/* availability */}
            <div className="flex flex-col space-y-4">
              <h1 className="text-dark text-2xl font-semibold">
                Availability:
              </h1>
              <button className="px-5 py-3 bg-white my-transition hover:shadow hover:shadow-primary ring-1 ring-primary rounded-full hover:bg-primary text-primary hover:text-white font-bold mr-auto ">
                Hotel Is Available
              </button>
              <button className="px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold mr-auto rounded-tr-3xl rounded-bl-3xl  group-hover:rounded-3xl ">
                Book Now
              </button>
            </div>

            {/* reviews */}
            <div className="flex flex-col space-y-4">
              <h1 className="text-dark text-2xl font-semibold">Reviews:</h1>
              <button className="px-5 py-3 bg-white my-transition hover:shadow hover:shadow-primary ring-1 ring-primary rounded-full hover:bg-primary text-primary hover:text-white font-bold mr-auto ">
                No Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* special offer if available  */}
      <section className="py-8 md:py-12 bg-white dark:bg-gray-900">
        <SectionTitle
          title="Exclusive Special Offers Available For You!"
          description="Indulge in our enticing array of exclusive special offers designed to elevate your stay. Whether you're planning a weekend getaway, a family vacation, or a business trip, we have the perfect package for you. Take advantage of these limited-time promotions and make your stay with us even more memorable!"
        ></SectionTitle>

        {/* offers */}
        <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 md:p-10 lg:py-12 flex flex-col justify-center items-center text-center space-y-2 ring-1 ring-primary rounded-tr-3xl rounded-bl-3xl my-transition hover:shadow-md hover:shadow-primary">
              <h1 className="text-xl font-semibold text-primary capitalize dark:text-white">
                Early Bird Discount
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Book your stay in advance and receive a discount on the nightly
                rate.
              </p>
            </div>
            <div className="p-8 md:p-10 lg:py-12 flex flex-col justify-center items-center text-center space-y-2 ring-1 ring-primary rounded-tr-3xl rounded-bl-3xl my-transition hover:shadow-md hover:shadow-primary">
              <h1 className="text-xl font-semibold text-primary capitalize dark:text-white">
                Early Bird Discount
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Book your stay in advance and receive a discount on the nightly
                rate.
              </p>
            </div>
            <div className="p-8 md:p-10 lg:py-12 flex flex-col justify-center items-center text-center space-y-2 ring-1 ring-primary rounded-tr-3xl rounded-bl-3xl my-transition hover:shadow-md hover:shadow-primary">
              <h1 className="text-xl font-semibold text-primary capitalize dark:text-white">
                Early Bird Discount
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Book your stay in advance and receive a discount on the nightly
                rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* room facilities and room rules */}
      <section className="container py-8 md:py-12 bg-white dark:bg-gray-900">
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {/* room facilities */}
          <div className="p-8 ring-1 ring-slate-100 my-transition hover:ring-primary rounded-tr-3xl rounded-bl-3xl">
            <SectionTitle
              title="Room Facilities"
              description="Experience comfort and convenience with our range of exceptional room facilities."
            ></SectionTitle>

            <ul className="text-xl pt-8 grid grid-cols-2 gap-3 *:text-slate-400 *:flex *:items-center *:gap-1">
              <li>
                <TbAirConditioning className="text-primary text-2xl"></TbAirConditioning>
                Air conditioner
              </li>
              <li>
                <FaWifi className="text-primary text-2xl"></FaWifi> Wifi Access
              </li>
              <li>
                <FaPhone className="text-primary text-2xl"></FaPhone>Telephone{" "}
              </li>
              <li>
                <LuRefrigerator className="text-primary text-2xl"></LuRefrigerator>
                Refrigerator
              </li>
              <li>
                <MdIron className="text-primary text-2xl"></MdIron>Ironing Board
              </li>
              <li>
                <BsSafe className="text-primary text-2xl"></BsSafe>Saving Safe
              </li>
              <li>
                <GiTowel className="text-primary text-2xl"></GiTowel>Towel
                Warmer
              </li>
              <li>
                <IoTvSharp className="text-primary text-2xl"></IoTvSharp>Flat
                Screen TV
              </li>
              <li>
                <MdBalcony className="text-primary text-2xl"></MdBalcony>Balcony
                or Terrace
              </li>
              <li>
                <PiBowlSteamFill className="text-primary text-2xl"></PiBowlSteamFill>
                BKettle Tea
              </li>
              <li>
                <PiHairDryerFill className="text-primary text-2xl"></PiHairDryerFill>
                Hairdryer
              </li>
              <li>
                <MdBreakfastDining className="text-primary text-2xl"></MdBreakfastDining>
                Breakfast Included
              </li>
            </ul>
          </div>

          {/* room rules */}
          <div className="p-8 ring-1 ring-slate-100 my-transition hover:ring-primary rounded-tr-3xl rounded-bl-3xl">
            <SectionTitle
              title="Room Rules"
              description="To ensure a pleasant stay for all our guests, we kindly ask you to adhere to the following room rules."
            ></SectionTitle>
            <ul className="text-xl pt-8 flex flex-col text-left items-center space-y-3 *:text-slate-400">
              <li>- Check-in: After 2:00 PM</li>
              <li>- Checkout: 11:00 AM</li>
              <li>- Self check-in with lockbox</li>
              <li>- No smoking</li>
              <li>- No pets</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default RoomDetailes;
