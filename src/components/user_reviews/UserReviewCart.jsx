import { MdStar } from "react-icons/md";

function UserReviewCart() {
  return (
    <>
      <div className="ring-1 ring-slate-100 flex items-center gap-4 md:gap-6 p-6 md:p-8 rounded-md my-transition hover:ring-primary group">
        <div className="flex flex-col space-y-3">
          <img
            className="ring-1 ring-primary w-16 h-16 object-cover rounded-full my-transition group-hover:!rounded-br-3xl "
            src="https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-happily-standing-white-wall_141793-30788.jpg?t=st=1715330610~exp=1715334210~hmac=9f2dfef54a9cdad04395af9f9f30beb83f39cca9a261e251da0284377c68aaa1&w=740"
            alt=""
          />
          <h3 className="font-semibold text-primary font-dmsans text-xl">
            John Doe
          </h3>
          <span className="flex items-center gap-1 font-roboto font-bold text-[18px]">
            <MdStar className="text-yellow-400 text-[18px]"></MdStar>
            <MdStar className="text-yellow-400 text-[18px]"></MdStar>
            <MdStar className="text-yellow-400 text-[18px]"></MdStar>
            <MdStar className="text-yellow-400 text-[18px]"></MdStar>
            <MdStar className="text-yellow-400 text-[18px]"></MdStar>
          </span>
          <b className="text-dark font-semibold">2024-05-09</b>
        </div>
        <div className=" ">
          <p className="text-slate-400 font-poppins my-transition group-hover:text-dark">
            Excellent experience! The room was clean and spacious, and the staff
            were veryfriendly and accommodating.
          </p>
        </div>
      </div>
    </>
  );
}

export default UserReviewCart;
