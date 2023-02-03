import React, { ReactNode, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, MinusCircle } from "react-feather";
import "./Carousel.css";

interface ICarousel {
  children: ReactNode;
  show: number;
  //   infiniteLoop: boolean;
}

export const Carousel = ({ children, show }: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [length, setLength] = useState(React.Children.count(children));
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    setLength(React.Children.count(children));
  }, [children]);

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {/*  */}
          {currentIndex == 0 ? (
            <button
              onClick={prev}
              className="left-arrow shadow-custom cursor-not-allowed"
              disabled
            >
              <ArrowLeft style={{ opacity: 0.4 }} />
            </button>
          ) : (
            <button onClick={prev} className="left-arrow shadow-custom">
              <ArrowLeft />
            </button>
          )}
          <div
            className="carousel-content-wrapper overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={`carousel-content show-${show}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / show)}%)`,
              }}
            >
              {children}
            </div>
          </div>
          {/*  */}

          {currentIndex == length - show ? (
            <button
              onClick={next}
              className="right-arrow shadow-custom cursor-not-allowed"
            >
              <ArrowRight style={{ opacity: 0.4 }} />
            </button>
          ) : (
            <button onClick={next} className="right-arrow shadow-custom">
              <ArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
