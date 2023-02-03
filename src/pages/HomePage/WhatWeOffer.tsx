import React, { useEffect, useRef } from "react";
import GraduateIcon from "../../assets/business.png";
import BusinessIcon from "../../assets/graduate.png";
import PackageIcon from "../../assets/package.png";
import "../../styles/WhatWeOffer.css";

export const WhatWeOffer = () => {
  useEffect(() => {}, []);

  return (
    <section className="WhatWeOffer">
      <h1>What we are offering</h1>

      <div className="container_c offer__container">
        <div className="offer__item">
          <div className="shadow-custom offer_image_container bg-green">
            <img
              src={GraduateIcon}
              alt=""
              style={{ height: "3rem", width: "3rem" }}
            />
          </div>
          <h2>Advance Education</h2>
          <p>
            We aim to provide the highest level of education system to provide
            technology to the young blood by enhancing the individual skills
          </p>
        </div>
        <div className="offer__item ">
          <div className="shadow-custom offer_image_container bg-purple">
            <img
              src={BusinessIcon}
              alt=""
              style={{ height: "2.5rem", width: "2.5rem" }}
            />
          </div>
          <h2>Business Solutions</h2>
          <p>
            We have developed business related applications for many kinds of
            business (small to enterprise) and let us adjust and develop for
            you.
          </p>
        </div>
        <div className="offer__item ">
          <div className="shadow-custom offer_image_container bg-blue">
            <img
              src={PackageIcon}
              alt=""
              style={{ height: "2.5rem", width: "2.5rem" }}
            />
          </div>
          <h2>Exclusive Packages</h2>
          <p>
            Our Packages are exculsive and with our packages, you can develop
            quickly and high performance application with ease
          </p>
        </div>
      </div>
    </section>
  );
};
