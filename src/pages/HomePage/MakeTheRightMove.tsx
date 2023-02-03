import { useLottie } from "lottie-react";
import React from "react";
import Businessmen from "../../assets/businessmen.json";
import "./pages.css";

export const MakeTheRightMove = () => {
  const options = {
    animationData: Businessmen,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <section className="MakeTheRightMove__gradient MakeTheRightMove py-4">
      <div className="container_c mx-40 flex items-center justify-between text-white">
        <div className="flex flex-1 flex-col">
          <h2 className="pb-2 text-5xl font-bold opacity-80">
            Make The Right Move:
          </h2>
          <p className="pb-2 text-xl font-bold opacity-80">Business Move</p>
          <div className="mb-8 h-1 w-24 rounded-full bg-white"></div>

          <p className="text-lg opacity-60">
            We are a team of branding experts; marketing stragists, digital
            traders, designers and growth programmers. We use the strength of
            human psychology and our understanding of digital landscapes to help
            business attract customers.
          </p>
        </div>
        <div className="animate-file flex-1"> {View}</div>
      </div>
    </section>
  );
};
