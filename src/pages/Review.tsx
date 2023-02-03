import React from "react";
import { Carousel } from "../components/Carousel";

export const Review = () => {
  return (
    <section className="Review__gradient Review ">
      <h2 className="text-center text-4xl text-white">
        Checkout Recent Review
      </h2>
      <div className="mx-auto h-auto w-1/2">
        <Carousel show={3}>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
