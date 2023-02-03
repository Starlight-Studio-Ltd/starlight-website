import React, { ReactNode } from "react";
import { User } from "react-feather";
import { Carousel } from "../../components/Carousel";

export const Review = () => {
  return (
    <section className="Review__gradient Review pb-10 pt-5">
      <h2 className="py-4 text-center text-4xl text-white">
        Check Out <br /> Recent Review
      </h2>
      <div className="mx-auto mt-4 w-[60%] gap-x-4 ">
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
