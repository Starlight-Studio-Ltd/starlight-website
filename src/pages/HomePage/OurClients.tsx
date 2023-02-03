import React from "react";
import "./pages.css";

export const OurClients = () => {
  return (
    <section className="OurClients container_c">
      <div className="my-10 bg-white">
        <h2 className="text-center text-4xl font-bold opacity-80">
          Our Clients
        </h2>

        <div className="flex flex-col items-center justify-center lg:flex-row">
          <HoverImage
            imageUrl="../../src/assets/clients/tawwin.jpg"
            text="Taw Win Htar Htar"
          ></HoverImage>
          <HoverImage
            imageUrl="../../src/assets/clients/lawkanet.jpg"
            text="Law Ka Net"
          ></HoverImage>
          <HoverImage
            imageUrl="../../src/assets/clients/martin.jpg"
            text="Mar Thin"
          ></HoverImage>
          <HoverImage
            imageUrl="../../src/assets/clients/thazin_cherry.jpg"
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