"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();

  const handlePrev = () => {
    swiper.slidePrev();
  };

  const handleNext = () => {
    swiper.slideNext();
  };

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={handlePrev}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={handleNext}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;


