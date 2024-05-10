import SectionTitle from "../../components/section_title/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import UserReviewCart from "./UserReviewCart";

function UserReviews() {
  return (
    <section className="py-8 md:py-12">
      {/* section title */}
      <SectionTitle
        title="User Reviews"
        description="Explore detailed reviews of our hotel rooms straight from the guests who've stayed in them. Dive into firsthand experiences, insights, and ratings to help you choose the perfect accommodation for your trip. Whether you're seeking tranquility, luxury, or convenience, our room reviews provide the inside scoop to ensure a comfortable stay. Read on to discover your ideal room."
      ></SectionTitle>

      <div className="container py-8">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="py-8"
        >
          <SwiperSlide className="p-4">
            <UserReviewCart></UserReviewCart>
          </SwiperSlide>
          <SwiperSlide className="p-4">
            <UserReviewCart></UserReviewCart>
          </SwiperSlide>
          <SwiperSlide className="p-4">
            <UserReviewCart></UserReviewCart>
          </SwiperSlide>
          <SwiperSlide className="p-4">
            <UserReviewCart></UserReviewCart>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default UserReviews;
