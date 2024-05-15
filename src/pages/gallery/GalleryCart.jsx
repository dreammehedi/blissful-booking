import PropTypes from "prop-types";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function GalleryCart({ galleryItem }) {
  const { name, description, image_url, amenities } = galleryItem;
  // flipped
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };
  return (
    <>
      <div
        data-aos="zoom-in"
        onMouseEnter={handleClick}
        onMouseLeave={handleClick}
      >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <img
            className=" align-middle rounded-tr-3xl rounded-bl-3xl p-1 w-full h-[300px] rounded-md"
            src={image_url}
            alt=""
          />

          <div
            style={{
              background: `linear-gradient(to right, rgb(15 15 15 / 48%), rgb(13 13 13 / 40%)), url(${image_url})`,
            }}
            className="rounded-tl-3xl rounded-br-3xl w-full min-h-[300px] p-6 rounded-md !bg-no-repeat align-middle !bg-cover !bg-center flex flex-col space-y-3 justify-center items-center text-center"
          >
            <h2 className="text-white font-bold text-2xl">{name}</h2>
            <p className="text-slate-200">{description}</p>
            <div>
              <h4 className="ring-1 ring-primary bg-primary/80 mx-auto rounded-full text-white font-semibold text-[18px] mb-4">
                Amenities
              </h4>
              <ul className="grid grid-cols-2 items-center gap-4 ">
                {amenities.map((amenitieItem, ind) => {
                  return (
                    <li
                      key={ind}
                      className="ring-1 px-4 py-1 ring-primary bg-primary/40 mx-auto rounded-full my-transition hover:bg-primary hover:cursor-pointer text-white font-medium text-sm"
                    >
                      {amenitieItem}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </>
  );
}

GalleryCart.propTypes = {
  galleryItem: PropTypes.object.isRequired,
};
export default GalleryCart;
