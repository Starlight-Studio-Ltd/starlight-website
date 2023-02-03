import { useLottie } from "lottie-react";
import React from "react";
import Businessmen from "../assets/businessmen.json";
import "./pages.css";

export const MakeTheRightMove = () => {
  const options = {
    animationData: Businessmen,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <section className="MakeTheRightMove__gradient MakeTheRightMove">
      <div className="mx-40 flex items-center justify-between pt-10 text-white">
        <div className="flex w-2/3  flex-col">
          <h2 className="pb-2 text-4xl">Make The Right Move:</h2>
          <p className=" text-2xl">Business Move</p>
          <div className="my-4 h-1 w-24 rounded-full bg-baseBlue"></div>

          <p className="">
            We are a team of branding experts; marketing stragists, digital
            traders, designers and growth programmers. We use the strength of
            human psychology and our understanding of digital landscapes to help
            business attract customers.
          </p>
        </div>
        <div className="animate-file w-1/2"> {View}</div>
      </div>
    </section>
  );
};
