import React, { ReactNode } from "react";
import { Carousel } from "../../components/Carousel";

export const Review = () => {
  return (
    <section className="Review__gradient Review pb-10 pt-5">
      <h2 className="py-4 text-center text-4xl text-white">
        Check Out <br /> Recent Review
      </h2>
      <div className="mx-auto mt-4 h-auto w-[55%]">
        <Carousel show={3}>
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
      <div style={{ padding: 10 }}>
        <div className="rounded-xl bg-white p-6">
          <div className="flex">
            <div className="avatar mr-4 h-14 w-14 rounded-full bg-cyan-400"></div>
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
