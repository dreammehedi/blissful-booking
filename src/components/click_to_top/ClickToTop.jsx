import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ClickToTop() {
  // show click to top button
  const [showClickToTop, setShowClickToTop] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 300) {
        setShowClickToTop(true);
      } else {
        setShowClickToTop(false);
      }
    };
    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  //   handle click to top
  const handleClickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showClickToTop && (
        <button
          onClick={handleClickToTop}
          className="animate-bounce  text-white text-xl p-4 bg-primary/80 my-transition hover:shadow hover:shadow-primary rounded-tr-3xl rounded-bl-3xl hover:rounded-br-3xl hover:bg-primary fixed bottom-10 right-10 z-[999"
        >
          <FaArrowUp></FaArrowUp>
        </button>
      )}
    </>
  );
}

export default ClickToTop;
