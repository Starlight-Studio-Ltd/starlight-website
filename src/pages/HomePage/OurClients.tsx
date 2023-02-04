import LawKaNat from "../../assets/clients/lawkanet.jpg";
import Marthin from "../../assets/clients/martin.jpg";
import TawWinHtarHtar from "../../assets/clients/tawwin.jpg";
import ThazinAndCherry from "../../assets/clients/thazin_cherryc.jpg";
import "../../styles/OurClients.css";

export const OurClients = () => {
  return (
    <section className="OurClients container_c">
      <h2>Our Clients</h2>

      <div className="hover_image_container">
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
    <div className="image_container">
      <img src={imageUrl} alt={text} className="image" />
      <div className="overlay">
        <div className="overlay_child_container">
          <div>{text}</div>
          <button onClick={onClick}>Learn</button>
        </div>
      </div>
    </div>
  );
};
