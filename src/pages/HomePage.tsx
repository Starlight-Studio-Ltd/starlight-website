import React, { useRef } from "react";
import { MakeTheRightMove } from "./MakeTheRightMove";
import { Review } from "./Review";
import { WhatWeOffer } from "./WhatWeOffer";

export const HomePage = () => {
  return (
    <>
      <MainSection></MainSection>
      <WhatWeOffer></WhatWeOffer>
      <MakeTheRightMove></MakeTheRightMove>
      <WhatWeOffer></WhatWeOffer>
      <Review></Review>
    </>
  );
};

const MainSection = () => {
  return (
    <section className="HomePage bg-baseBlue pb-20">
      <h2 className="py-4 text-center text-5xl font-bold text-white">
        Build Apps for your Business
      </h2>
      <img
        src="../src/assets/landing_showcase-original.png"
        alt=""
        className=""
      />

      <div className="flex flex-col items-center justify-center">
        <p className="w-1/2 text-center text-xl text-white">
          We are providing many colorful features to your enterprise business.
          You can customize your features depending on your requirements. We are
          here for your service.
        </p>
        <button className="GetStarted mt-8 rounded-full bg-white px-8 py-2 text-lg font-bold text-baseBlue">
          Get Start
        </button>
      </div>
    </section>
  );
};
