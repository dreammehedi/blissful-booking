import { Map, Marker } from "pigeon-maps";
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
      <Map height={450} defaultCenter={[23.810331, 90.412521]} defaultZoom={11}>
        <Marker
          width={50}
          anchor={[23.810331, 90.412521]}
          color={color}
          onClick={() => setHue(hue + 20)}
        />
        <Marker
          width={50}
          anchor={[23.810331, 90.412521]}
          color={color}
          onClick={() => setHue(hue + 20)}
        ></Marker>
      </Map>
    </section>
  );
}

export default Maps;
