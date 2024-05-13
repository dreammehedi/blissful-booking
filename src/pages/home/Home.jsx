import { Helmet } from "react-helmet";
import Banner from "../../components/banner/Banner";
import FeaturedRooms from "../../components/featured_rooms/FeaturedRooms";
import Maps from "../../components/maps/Maps";
import Newsletter from "../../components/newsletter/Newsletter";
import SpecialOfferPromotion from "../../components/special_offers_promotions/SpecialOfferPromotion";
import UserReviews from "../../components/user_reviews/UserReviews";

function Home() {
  return (
    <>
      <Helmet>
        <title>Blissful Booking | Home</title>
      </Helmet>
      <SpecialOfferPromotion></SpecialOfferPromotion>
      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <UserReviews></UserReviews>
      <Maps></Maps>
      <Newsletter></Newsletter>
    </>
  );
}

export default Home;
