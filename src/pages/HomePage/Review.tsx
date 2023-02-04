import { useEffect, useState } from "react";
import { User } from "react-feather";
import { Carousel } from "../../components/Carousel";
import useWindowSize from "../../hooks/windowResize";
import "../../styles/Review.css";

export const Review = () => {
  const size = useWindowSize();
  const [showCount, setShowCount] = useState(3);

  function setWidth() {
    if (showCount == 1) {
      return `100%`;
    } else if (showCount == 2) {
      return `75%`;
    } else if (showCount == 3) {
      return `60%`;
    }
  }

  useEffect(() => {
    if (size.width > 640 && size.width < 1024) {
      setShowCount(2);
      setWidth();
      return;
    }
    if (size.width < 640) {
      setShowCount(1);
      setWidth();
    } else {
      setShowCount(3);
      setWidth();
    }
  }, [size, showCount]);

  return (
    <section className="Review__gradient Review">
      <h2>
        Check Out <br /> Recent Review
      </h2>
      <div
        className="container_c-sm container_carousel"
        style={{ width: setWidth() }}
      >
        <Carousel show={showCount}>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
        </Carousel>
      </div>
    </section>
  );
};

const CarouselItem = () => {
  return (
    <div>
      <div style={{ margin: 10 }}>
        <div className="carousel_item_container">
          <div className="carousel_item">
            <div className="avatar">
              <User></User>
            </div>
            <div className="user">
              <h4>Ye Myo Aung</h4>
              <p>Developer</p>
            </div>
          </div>
          <div className="review_desc">
            Lorem ipsum dolor, sit amet consetur adipisicing elit. Eveniet,
            repudiandae. Provident reicies nulla dolobus comod Labum
            repudiandae.
          </div>
        </div>
      </div>
    </div>
  );
};
