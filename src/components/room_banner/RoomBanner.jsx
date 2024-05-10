import roomBannerBg from "../../assets/roomBannerBg.jpg";

function RoomBanner() {
  return (
    <section
      style={{
        background: `linear-gradient(to right, rgb(2 2 2 / 80%), rgb(2 2 63 / 43%)),  url(${roomBannerBg})`,
      }}
      className="w-full !bg-no-repeat !bg-center !bg-cover"
    >
      <div
        style={{ height: `calc(100vh - 84px)` }}
        className="container md:!min-h-[500px] flex flex-col space-y-3 justify-center items-center text-center"
      >
        <h1 className="text-2xl font-semibold font-poppins text-white">
          Discover Your Perfect Retreat
        </h1>
        <h3 className="text-primary text-3xl font-bold font-roboto">
          Explore Our Range of Available Rooms
        </h3>
        <p className="text-slate-200 md:max-w-3xl">
          {`Welcome to our available rooms page, where your perfect retreat
          awaits. Dive into our diverse selection of accommodations, each
          designed to provide comfort, convenience, and a touch of luxury during
          your stay. Whether you're dreaming of a cozy hideaway or a spacious
          suite with stunning views, we have something to suit every traveler's
          preferences. Start your journey towards relaxation and rejuvenation by
          exploring our range of available rooms today.`}
        </p>
        <button className="mx-auto px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold  rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl ">
          View Rooms
        </button>
      </div>
    </section>
  );
}

export default RoomBanner;
