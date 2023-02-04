import ShowCasePhoto from "../../assets/landing_showcase-originalc.png";
import "../../styles/MainSection.css";

export const MainSection = () => {
  return (
    <section className="MainSection" id="main-section">
      <h2 className="MainSection__header ">Build Apps for your Business</h2>
      <img src={ShowCasePhoto} alt="" className="MainSection__image" />

      <div className="MainBody__container">
        <p>
          We are providing many colorful features to your enterprise business.
          You can customize your features depending on your requirements. We are
          here for your service.
        </p>
        <a href="#contact" className="main_getStarted">
          Get Started
        </a>
      </div>
    </section>
  );
};
