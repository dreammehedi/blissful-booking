import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function GalleryCart() {
  // flipped
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };
  return (
    <>
      <div onMouseEnter={handleClick} onMouseLeave={handleClick}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <img
            className=" align-middle rounded-tr-3xl rounded-bl-3xl p-1 w-full h-[300px] rounded-md"
            src="https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg"
            alt=""
          />

          <div
            style={{
              background: `linear-gradient(to right, rgb(235 235 235 / 91%), rgb(255 255 255 / 8%)),  url(https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg)`,
            }}
            className="rounded-tl-3xl rounded-br-3xl w-full auto p-6 rounded-md !bg-no-repeat align-middle !bg-cover !bg-center flex flex-col justify-center items-center text-center"
          >
            <h2 className="text-dark font-bold text-2xl">title</h2>
            <p className="text-slate-400">descriafdlsfkasd</p>
            <div>
              <h4 className="text-primary font-semibold text-[18px] mb-4">
                Amenities
              </h4>
              <ul className="grid grid-cols-2 gap-4 *:text-dark *:font-medium *:text-sm">
                <li>sdkfasldfasldf</li>
                <li>sdkfasldfasldf</li>
                <li>sdkfasldfasldf</li>
                <li>sdkfasldfasldf</li>
                <li>sdkfasldfasldf</li>
                <li>sdkfasldfasldf</li>
                <li>sdkfasldfasldf</li>
              </ul>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </>
  );
}

export default GalleryCart;
