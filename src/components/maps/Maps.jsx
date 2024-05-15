import { Map, Marker, ZoomControl } from "pigeon-maps";
import { useState } from "react";
import SectionTitle from "../section_title/SectionTitle";
function Maps() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <section className="py-8 md:py-12">
      <div className="pb-8">
        <SectionTitle
          title="Find Your Perfect Stay: Interactive Maps"
          description="Explore our interactive maps to discover the ideal accommodation for your next adventure. Navigate through vibrant neighborhoods, iconic landmarks, and hidden gems with ease as you search for the perfect hotel. Our maps offer a bird's-eye view of the surrounding area, allowing you to pinpoint hotels in proximity to your desired attractions, restaurants, and transportation hubs. Filter by price, amenities, and ratings to tailor your search to your preferences. With real-time availability and secure booking options, planning your stay has never been simpler. Let our maps guide you to your dream destination and make your travel experience unforgettable"
        ></SectionTitle>
      </div>
      <Map
        twoFingerDrag={true}
        metaWheelZoom={true}
        metaWheelZoomWarning="Press Ctrl + Mouse Wheel to Zoom In Or Zoom Out!"
        maxZoom={17}
        animate={true}
        height={500}
        defaultCenter={[24.104289, 90.097894]}
        defaultZoom={10}
      >
        <ZoomControl
          style={{ left: "unset", right: 40, top: 40, zIndex: 100 }}
          buttonStyle={{
            background: "rgb(81 67 217 / 0.8)",
            color: "white",
            borderTopRightRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        ></ZoomControl>
        <Marker
          width={50}
          anchor={[24.104289, 90.097894]}
          color={color}
          onClick={() => setHue(hue + 20)}
        />
        <Marker
          width={50}
          anchor={[24.104289, 90.097894]}
          color={color}
          onClick={() => setHue(hue + 20)}
        ></Marker>
      </Map>
    </section>
  );
}

export default Maps;
