import { FaBath } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/section_title/SectionTitle";

function RoomDetailes() {
  // get room detailes data
  const roomDetailesData = useLoaderData();
  console.log(roomDetailesData);

  const {
    name,
    description,
    image_url,
    price_per_night,
    location,
    rating,
    property_details,
    special_offers,
    check_in_time,
    check_out_time,
    facilities,
    room_rules,
  } = roomDetailesData;
  return (
    <section className="py-8 md:py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* room image */}
        <img
          className="w-full h-auto min-h-[400px] object-cover"
          src={image_url}
          alt=""
        />

        {/* room all content */}
        <div className="group flex flex-col space-y-4 ring-1 ring-slate-100 p-6 md:p-8 my-transition hover:ring-primary">
          <div className="flex flex-col space-y-3">
            <h4 className="text-primary font-semibold font-roboto">
              ${price_per_night} Per Night
            </h4>

            <h1 className="text-dark font-bold text-3xl">{name}</h1>
            <p className="text-slate-400">{description}</p>
          </div>
          <div className="grid grid-cols-4 gap-4 group-hover:*:text-primary">
            <div className="flex items-center gap-1 text-slate-500 text-xl">
              <SlSizeFullscreen></SlSizeFullscreen>
              {property_details?.size}
              <sup>2</sup>
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-xl">
              <IoBed></IoBed>
              {property_details?.bedrooms} Bed
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-xl">
              <FaBath></FaBath>
              {property_details?.bathrooms}
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-xl">
              <FaPeopleRoof></FaPeopleRoof>
              {property_details?.guests} Guests
            </div>
          </div>
          <div className="flex items-center gap-6">
            <h2 className="text-dark text-xl font-bold">Location: </h2>
            <button className="mr-auto px-6 py-2 ring-1 ring-primary shadow shadow-primary rounded-full font-medium my-transition hover:bg-primary/80">
              {location}
            </button>
          </div>
          <div className="flex items-center gap-6">
            <h2 className="text-dark text-xl font-bold">Rating: </h2>
            <button className="mr-auto px-6 py-2 ring-1 ring-primary shadow shadow-primary rounded-full font-medium my-transition hover:bg-primary/80">
              {rating}
            </button>
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
              <div className="flex justify-between items-center py-4">
                <p className="font-dmsans text-sm font-bold text-dark">
                  Check In: {check_in_time}
                </p>
                <p className="font-dmsans text-sm font-bold text-dark">
                  Check Out: {check_out_time}
                </p>
              </div>
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
            {special_offers.map((roomOffer, ind) => {
              return (
                <div
                  key={ind}
                  className="p-8 md:p-10 lg:py-12 flex flex-col justify-center items-center text-center space-y-2 ring-1 ring-primary rounded-tr-3xl rounded-bl-3xl my-transition hover:shadow-md hover:shadow-primary"
                >
                  <h1 className="text-xl font-semibold text-primary capitalize dark:text-white">
                    {roomOffer?.name}
                  </h1>

                  <p className="text-gray-500 dark:text-gray-300">
                    {roomOffer?.description}
                  </p>
                  <p className="text-black font-dmsans text-sm dark:text-gray-300">
                    {roomOffer?.terms_and_conditions}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* room facilities and room rules */}
      <section className="container py-8 md:py-12 bg-white dark:bg-gray-900">
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {/* room facilities */}
          <div className="p-8 ring-1 ring-slate-100 my-transition hover:ring-primary rounded-tr-3xl rounded-bl-3xl group">
            <SectionTitle
              title="Room Facilities"
              description="Experience comfort and convenience with our range of exceptional room facilities."
            ></SectionTitle>

            <ul className="text-xl pt-8 grid grid-cols-2 gap-3 *:text-slate-400 *:flex *:items-center *:gap-1">
              {facilities.map((faciliti, ind) => {
                return (
                  <li
                    key={ind}
                    className="flex flex-col  text-center place-content-center gap-4 ring-1 ring-slate-100 p-8 rounded-tl-3xl rounded-br-3xl group-hover:ring-primary my-transition"
                  >
                    <h3 className="text-dark">{faciliti.name}</h3>
                    <p className="text-sm group-hover:text-primary/90">
                      {faciliti.description}
                    </p>
                  </li>
                );
              })}
              {/* <li>
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
              </li> */}
            </ul>
          </div>

          {/* room rules */}
          <div className="p-8 ring-1 ring-slate-100 my-transition hover:ring-primary rounded-tr-3xl rounded-bl-3xl group h-fit">
            <SectionTitle
              title="Room Rules"
              description="To ensure a pleasant stay for all our guests, we kindly ask you to adhere to the following room rules."
            ></SectionTitle>

            <ul className="text-xl pt-8 grid grid-cols-2 gap-3 *:text-slate-400 *:flex *:items-center *:gap-1">
              <li className="flex flex-col  text-center place-content-center gap-4 ring-1 ring-slate-100 p-8 rounded-tl-3xl rounded-br-3xl group-hover:ring-primary my-transition">
                <h3 className="text-dark">Check In:</h3>
                <p className="text-sm group-hover:text-primary/90">
                  {room_rules?.check_in}
                </p>
              </li>
              <li className="flex flex-col  text-center place-content-center gap-4 ring-1 ring-slate-100 p-8 rounded-tl-3xl rounded-br-3xl group-hover:ring-primary my-transition">
                <h3 className="text-dark">Check Out:</h3>
                <p className="text-sm group-hover:text-primary/90">
                  {room_rules?.check_out}
                </p>
              </li>
              <li className="flex flex-col  text-center place-content-center gap-4 ring-1 ring-slate-100 p-8 rounded-tl-3xl rounded-br-3xl group-hover:ring-primary my-transition">
                <h3 className="text-dark">Self Check In:</h3>
                <p className="text-sm group-hover:text-primary/90">
                  {room_rules?.self_check_in ? "Yes" : "No"}
                </p>
              </li>
              <li className="flex flex-col  text-center place-content-center gap-4 ring-1 ring-slate-100 p-8 rounded-tl-3xl rounded-br-3xl group-hover:ring-primary my-transition">
                <h3 className="text-dark">Smoking:</h3>
                <p className="text-sm group-hover:text-primary/90">
                  {room_rules?.smoking ? "Yes" : "No"}
                </p>
              </li>
              <li className="flex flex-col  text-center place-content-center gap-4 ring-1 ring-slate-100 p-8 rounded-tl-3xl rounded-br-3xl group-hover:ring-primary my-transition">
                <h3 className="text-dark">Pets:</h3>
                <p className="text-sm group-hover:text-primary/90">
                  {room_rules?.pets ? "Yes" : "No"}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default RoomDetailes;
