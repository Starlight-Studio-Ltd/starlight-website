import React from "react";
import LawKaNat from "../../assets/clients/lawkanet.jpg";
import Marthin from "../../assets/clients/martin.jpg";
import TawWinHtarHtar from "../../assets/clients/tawwin.jpg";
import ThazinAndCherry from "../../assets/clients/thazin_cherry.jpg";
import "./pages.css";

export const OurClients = () => {
  return (
    <section className="OurClients container_c py-10">
      <div className="bg-white">
        <h2 className="mb-10 text-center text-4xl font-bold opacity-80">
          Our Clients
        </h2>

        <div className="flex flex-col items-center justify-center space-x-10 lg:flex-row">
          <HoverImage
            imageUrl={TawWinHtarHtar}
            text="Taw Win Htar Htar"
          ></HoverImage>
          <HoverImage imageUrl={LawKaNat} text="Law Ka Net"></HoverImage>
          <HoverImage imageUrl={Marthin} text="Mar Thin"></HoverImage>
          <HoverImage
            imageUrl={ThazinAndCherry}
            text="Thazin & Cherry"
          ></HoverImage>
        </div>
      </div>
    </section>
  );
};

interface IHoverImage {
  imageUrl: string;
  text: string;
  onClick?: () => void;
}

export const HoverImage = ({ imageUrl, text, onClick }: IHoverImage) => {
  return (
    <div className="image_container flex-1">
      <img src={imageUrl} alt={text} className="image" />
      <div className="overlay">
        <div className="overlay-child-container">
          <div className="">{text}</div>
          <button
            onClick={onClick}
            className="mt-5 rounded-full px-8 py-1 pb-2"
          >
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};
