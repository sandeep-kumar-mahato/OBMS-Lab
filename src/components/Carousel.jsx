import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const images = [
  "https://images.unsplash.com/photo-1573196873002-2b921759d9ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1561982558-05602498d458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-11/12 m-auto">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 py-1 focus:outline-none z-10"
        onClick={prevImage}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: "#000000", fontSize: "24px" }}
        />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-1 focus:outline-none z-10"
        onClick={nextImage}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ color: "#000000", fontSize: "24px" }}
        />
      </button>
      <div className="flex justify-center items-center">
        <img
          src={images[currentImageIndex]}
          alt="carousel"
          className="w-9/12 max-h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default Carousel;
