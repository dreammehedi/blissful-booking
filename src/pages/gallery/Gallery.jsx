import { Helmet } from "react-helmet";
import SectionTitle from "../../components/section_title/SectionTitle";
import GalleryCart from "./GalleryCart";

function Gallery() {
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
          <GalleryCart></GalleryCart>
          <GalleryCart></GalleryCart>
          <GalleryCart></GalleryCart>
          <GalleryCart></GalleryCart>
        </div>
      </section>
    </>
  );
}

export default Gallery;
