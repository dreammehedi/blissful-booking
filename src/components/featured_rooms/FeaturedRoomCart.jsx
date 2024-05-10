function FeaturedRoomCart() {
  return (
    <div className="ring-1 ring-slate-100 p-4 md:p-6 flex flex-col space-y-3 my-transition rounded-tr-[35px] rounded-bl-[35px] hover:ring-primary hover:!rounded-[35px] group">
      <img
        className="w-full h-auto md:h-[250px] object-cover my-transition rounded-tr-[35px] rounded-bl-[35px] group-hover:!rounded-[35px]"
        src="https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?t=st=1715327974~exp=1715331574~hmac=013eb95744f60549b17c422a4142671ad7c6d16e7a8ab70481f1c2fb8bacf522&w=740"
        alt=""
      />
      <h2 className="pt-4 font-bold text-2xl text-primary font-roboto">
        Standard Double Room
      </h2>
      <p className="text-slate-400 text-sm">
        Experience comfort and convenience in our Standard Double Room. Equipped
        with a queen-sized bed, cozy seating area, and modern amenities, this
        room provides the perfect retreat after a day of exploring. Unwind in
        style and make the most of your stay with us.
      </p>
      <span className="font-semibold text-dark font-dmsans">
        $500 per night
      </span>
      <button className="px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold mr-auto rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl ">
        Book Now
      </button>
    </div>
  );
}

export default FeaturedRoomCart;
