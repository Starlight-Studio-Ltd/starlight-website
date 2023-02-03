import React, { ReactNode, useEffect, useState } from "react";
import { User } from "react-feather";
import { Carousel } from "../../components/Carousel";
import useWindowSize from "../../hooks/windowResize";
import "../../styles/Review.css";

export const Review = () => {
  const size = useWindowSize();
  const [showCount, setShowCount] = useState(3);

  useEffect(() => {
    if (size.width > 574 && size.width < 768) {
      setShowCount(2);
      return;
    }
    if (size.width < 574) {
      setShowCount(1);
    } else {
      setShowCount(3);
    }
  }, [size, showCount]);

  return (
    <section className="Review__gradient Review">
      <h2>
        Check Out <br /> Recent Review
      </h2>
      <div className="container_c container_carousel">
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
    <div className="">
      <div style={{ margin: 10 }}>
        <div className="rounded-xl bg-white p-6">
          <div className="flex">
            <div className="avatar mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-white">
              <User></User>
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-bold opacity-90">Ye Myo Aung</h4>
              <p className="font-semibold opacity-60">Developer</p>
            </div>
          </div>
          <div className="pt-2">
            Lorem ipsum dolor, sit amet consetur adipisicing elit. Eveniet,
            repudiandae. Provident reicies nulla dolobus comod Labum
            repudiandae.
          </div>
        </div>
      </div>
    </div>
  );
};
