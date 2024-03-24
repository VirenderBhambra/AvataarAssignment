import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./styles.css";
import React from "react";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';


export const ImageSlider = () => {
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9
  ];
  const [currentSlide, setcurrentSlide] = useState(0);
  // console.log(images)
  

  const handlePrevious = () => {
    setcurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setcurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  

  const prevIndex = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
  const prevPrevIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
  const nextIndex = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
  const nextNextIndex = nextIndex === images.length - 1 ? 0 : nextIndex + 1;

  // Reorder images array based on prevPrev, prev, current, next, and nextNext indices
  const reorderedImages = [
    images[prevPrevIndex],
    images[prevIndex],
    images[currentSlide],
    images[nextIndex],
    images[nextNextIndex]
  ];
  console.log(reorderedImages)
  return (
    <div className="container">
      <ArrowBackIcon
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
    <div className="imgContainer">
      {reorderedImages&&reorderedImages.map((imageItem, index) => (
        <img
          key={index}
          className="current-image"
          src={imageItem}
        />
      ))}</div>
      <ArrowForwardIcon
        className="arrow arrow-right"
        onClick={handleNext}
      />
      {/* // renders indicator on bottom for slides */}
      <span className="circle-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentSlide ? "active-indicator" : "inactive-indicator"}
            onClick={() => setcurrentSlide(index)}
          />
        ))}
      </span>
    </div>
  );
};
