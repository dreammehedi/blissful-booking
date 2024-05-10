import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
function Maps() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <section className="py-8 md:py-12">
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
