import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import Loader from "../../components/loader/Loader";
import SectionTitle from "../../components/section_title/SectionTitle";
import GalleryCart from "./GalleryCart";

function Gallery() {
  const getgalleryData = async () => {
    const response = await axios.get(
      "https://blissful-bookings.vercel.app/gallery"
    );
    const data = await response.data;
    return data;
  };
  // react query data get
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["featuredRooms"],
    queryFn: getgalleryData,
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
  console.log(data);
  return (
    <>
      <Helmet>
        <title>Blissful Booking | Gallery</title>
      </Helmet>

      <section className="py-8 md:py-12">
        {/* section title */}
        <SectionTitle
          title="Explore Our Stunning Hotel Gallery"
          description=" Embark on a virtual tour through our captivating hotel gallery and discover the essence of luxury, comfort, and elegance. Immerse yourself in a collection of breathtaking images showcasing our exquisite accommodations, picturesque surroundings, and world-class amenities."
        ></SectionTitle>

        {/* gallery cart */}
        <div className="container py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {data?.map((galleryItem) => {
            return (
              <GalleryCart
                key={galleryItem?._id}
                galleryItem={galleryItem}
              ></GalleryCart>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Gallery;
