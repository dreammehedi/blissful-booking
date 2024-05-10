// Import Swiper React components
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SliderItem from "../slider/SliderItem";
import "./myCss.css";

function Banner() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        navigation
        spaceBetween={50}
        className="h-[450px] md:h-[500px] lg:!h-[calc(100vh-84px)] w-full "
      >
        <SwiperSlide>
          <SliderItem
            bg={
              "https://img.freepik.com/free-photo/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai_188544-7715.jpg?t=st=1715274886~exp=1715278486~hmac=b6a96b14af6a946adf869cb1ddb23b1333ac1199070577b61fc69ed10412cc6d&w=740"
            }
            title="Nature's Palette: A Journey Through Landscape Paintings"
            des="Experience the tranquil beauty of nature captured on canvas in our immersive landscape painting collection. Let these breathtaking vistas transport you to serene and picturesque destinations."
          ></SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            bg={
              "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2000.jpg?t=st=1715274922~exp=1715278522~hmac=a70e483bfe3a91c65056aceb40df6ea66a064fd2dfb6757aecf03e193be86a0e&w=900"
            }
            title="Watercolor Wonders: A Splash of Nature's Beauty"
            des="Dive into the mesmerizing world of watercolor painting and witness nature come alive with vibrant hues and fluid strokes. Explore our collection of watercolor masterpieces that capture the essence of landscapes in every brushstroke."
          ></SliderItem>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
