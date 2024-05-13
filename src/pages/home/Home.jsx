import { Helmet } from "react-helmet";
import Banner from "../../components/banner/Banner";
import FeaturedRooms from "../../components/featured_rooms/FeaturedRooms";
import Maps from "../../components/maps/Maps";
import Newsletter from "../../components/newsletter/Newsletter";
import UserReviews from "../../components/user_reviews/UserReviews";

function Home() {
  return (
    <>
      <Helmet>
        <title>Blissful Booking | Home</title>
      </Helmet>
      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <UserReviews></UserReviews>
      <Maps></Maps>
      <Newsletter></Newsletter>
    </>
  );
}

export default Home;
