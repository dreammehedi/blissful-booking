import { Link } from "react-router-dom";

function RoomCart() {
  return (
    <Link to={"/"}>
      <div className="ring-1 ring-slate-100 p-4 md:p-6 flex flex-col space-y-3 my-transition rounded-tr-[35px] rounded-bl-[35px] hover:ring-primary hover:!rounded-[35px] group">
        <div className="relative">
          <img
            className="w-full h-auto md:h-[250px] object-cover my-transition rounded-tr-3xl rounded-bl-3xl group-hover:!rounded-3xl"
            src="https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?t=st=1715327974~exp=1715331574~hmac=013eb95744f60549b17c422a4142671ad7c6d16e7a8ab70481f1c2fb8bacf522&w=740"
            alt=""
          />
          <h4 className="absolute top-0 left-0 px-4 py-2 mx-auto bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold mr-auto rounded-tr-3xl rounded-bl-3xl  group-hover:!rounded-3xl ">
            Available
          </h4>
          <h4 className="absolute bottom-0 right-0 px-4 py-2 mx-auto bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold mr-auto rounded-tr-3xl rounded-bl-3xl  group-hover:!rounded-3xl ">
            $500
          </h4>
        </div>
        <h2 className="pt-4 font-bold text-2xl text-primary font-roboto">
          Standard Double Room
        </h2>
        <p className="text-slate-400 text-sm">
          Experience comfort and convenience in our Standard Double Room.
          Equipped with a queen-sized bed, cozy seating area, and modern
          amenities, this room provides the perfect retreat after a day of
          exploring. Unwind in style and make the most of your stay with us.
        </p>
        <span className="font-semibold text-dark font-dmsans">
          <b className="text-primary font-bold font-roboto">Price: </b>$500
        </span>
        <span className="font-semibold text-dark font-dmsans">
          <b className="text-primary font-bold font-roboto"> Total Reviews: </b>
          309
        </span>
      </div>
    </Link>
  );
}

export default RoomCart;
