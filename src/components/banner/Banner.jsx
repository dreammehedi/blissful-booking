// Import Swiper React components
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SliderItem from "../slider/SliderItem";
import "./myCss.css";
// banner image
import slider1 from "../../assets/slider/slider1.avif";
import slider2 from "../../assets/slider/slider2.jpg";
import slider3 from "../../assets/slider/slider3.avif";

// banner video
import video1 from "../../assets/video/video1.mp4";
import video3 from "../../assets/video/video3.mp4";

function Banner() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        navigation
        className="overflow-hidden h-[450px] md:h-[500px] lg:!h-[calc(100vh-84px)] w-full "
      >
        <SwiperSlide>
          <SliderItem
            video={video1}
            bg={slider1}
            title="Discover Your Next Escape"
            des="Unlock a world of possibilities with our hotel booking platform. Browse thousands of accommodations, from luxury resorts to budget-friendly stays, and find the perfect destination for your next adventure."
          >
            <button className="px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold  rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl ">
              Explore Destinations
            </button>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            bg={slider2}
            title="Your Gateway to Extraordinary Experiences"
            des="Elevate your travel experience with our unparalleled selection of hotels. Whether you seek a tranquil retreat, a vibrant urban oasis, or a cultural immersion, we've got you covered. Dive into our diverse range of accommodations and start crafting memories that last a lifetime."
          >
            <button className="px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold  rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl ">
              Start Your Journey
            </button>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            video={video3}
            bg={slider3}
            title="Escape to Tranquility"
            des="Discover serenity amidst picturesque landscapes and unparalleled hospitality. Our carefully curated selection of boutique hotels and intimate retreats offers a sanctuary for relaxation and rejuvenation. Embrace tranquility and immerse yourself in the beauty of your surroundings."
          >
            <button className="px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold  rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl ">
              Find Peaceful Getaways
            </button>
          </SliderItem>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
