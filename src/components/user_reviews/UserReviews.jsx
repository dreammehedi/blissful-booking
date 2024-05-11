import SectionTitle from "../../components/section_title/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Autoplay, Navigation } from "swiper/modules";
import Loader from "../loader/Loader";
import UserReviewCart from "./UserReviewCart";

function UserReviews() {
  // user revies data get
  const getUserReviews = async () => {
    const response = await axios.get("http://localhost:5000/userReviews");
    const data = await response.data;
    return data;
  };
  // react query data get
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["userReviews"],
    queryFn: getUserReviews,
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
  return (
    <section className="py-8 md:py-12">
      {/* section title */}
      <SectionTitle
        title="User Reviews"
        description="Explore detailed reviews of our hotel rooms straight from the guests who've stayed in them. Dive into firsthand experiences, insights, and ratings to help you choose the perfect accommodation for your trip. Whether you're seeking tranquility, luxury, or convenience, our room reviews provide the inside scoop to ensure a comfortable stay. Read on to discover your ideal room."
      ></SectionTitle>

      <div className="container py-8">
        <Swiper
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="py-8"
        >
          {data.map((review) => {
            return (
              <SwiperSlide key={review._id} className="p-4">
                <UserReviewCart review={review}></UserReviewCart>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default UserReviews;
