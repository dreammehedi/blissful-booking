import { useEffect, useState } from "react";
import { CgCloseO } from "react-icons/cg";
import showOfferBg from "../../assets/showOfferBg.jpg";

function SpecialOfferPromotion() {
  // modal control
  const [showOffer, setShowOffer] = useState(false);
  useEffect(() => {
    const handleShowOfferDisplayed =
      sessionStorage.getItem("showOfferDisplayed");
    if (!handleShowOfferDisplayed) {
      setShowOffer(true);
    }
  }, []);

  //   handle closer offer
  const handleCloseOffer = () => {
    setShowOffer(false);
    sessionStorage.setItem("showOfferDisplayed", true);
  };
  return (
    <>
      {showOffer && (
        <section
          id="specialOfferPromotion"
          className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999] bg-dark/90 flex justify-center items-center w-full h-screen"
        >
          <div
            style={{
              background: `linear-gradient(to right, rgb(17 17 17 / 40%), rgb(86 71 4 / 30%)), url(${showOfferBg})`,
            }}
            className="!bg-no-repeat !bg-bottom !bg-cover max-w-2xl mx-auto flex justify-center items-center flex-col p-8 md:p-12 lg:p-20 rounded-tr-[120px] space-y-3 text-center rounded-bl-[120px] hover:bg-primary/95 my-transition bg-primary/90 text-white group relative"
          >
            <h1 className="text-white font-bold font-dmsans text-3xl">
              Romantic Retreat Special
            </h1>
            <p className="text-slate-100">
              Reignite the romance with our special retreat package. Champagne,
              roses, and a cozy evening await.
            </p>
            <div className="flex justify-center items-center gap-6">
              <button className="px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold mr-auto rounded-tr-3xl rounded-bl-3xl  ring-1 group-hover:ring-white hover:rounded-3xl ">
                $249 per night
              </button>
              <button className="px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-orange-400 font-bold mr-auto rounded-tr-3xl rounded-bl-3xl ring-1 group-hover:ring-white hover:rounded-3xl ">
                ★★★★★
              </button>
            </div>
            <button onClick={handleCloseOffer} className="text-4xl">
              <CgCloseO></CgCloseO>
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default SpecialOfferPromotion;
