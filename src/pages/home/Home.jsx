import Banner from "../../components/banner/Banner";
import FeaturedRooms from "../../components/featured_rooms/FeaturedRooms";
import Maps from "../../components/maps/Maps";
import Newsletter from "../../components/newsletter/Newsletter";

function Home() {
  return (
    <>
      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <Maps></Maps>
      <Newsletter></Newsletter>
    </>
  );
}

export default Home;
