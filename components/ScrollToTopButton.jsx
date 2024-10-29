// components/ScrollToTopButton.js

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scrolling
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-600 text-white p-2.5 rounded-full shadow-md transition duration-300 ease-in-out z-50`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={25} />
    </button>
  );
};

export default ScrollToTopButton;
