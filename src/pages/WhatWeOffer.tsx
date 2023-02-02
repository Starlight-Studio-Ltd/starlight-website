import React, { useEffect, useRef } from "react";

/* bottom
: 
499.984375
height
: 
436
left
: 
0
right
: 
1423
top
: 
63.984375
width
: 
1423
x
: 
0
y
: 
63.984375 */

export const WhatWeOffer = () => {
  const whatweofferRef = useRef<HTMLInputElement>(null);

  const handleScroll = () => {
    const position = whatweofferRef.current?.getBoundingClientRect();

    console.log(position);
  };

  useEffect(() => {}, []);

  return (
    <section className="py-6" ref={whatweofferRef}>
      <h2 className="py-4 text-center text-4xl font-bold text-baseBlue">
        What we are offering
      </h2>

      <div className="mx-40 flex items-center justify-between space-x-4 py-12 ">
        <div className="offer-item flex flex-col items-center justify-center">
          <div className="shadow-custom flex h-16 w-16 items-center justify-center rounded-full bg-green-800">
            <img
              src="../src/assets/graduate.png"
              alt=""
              className="h-12 w-12"
            />
          </div>
          <h2 className="mt-6 mb-2 text-center text-lg font-bold opacity-70">
            Advance Education
          </h2>
          <p className="text-center opacity-80">
            We aim to provide the highest level of education system to provide
            technology to the young blood by enhancing the individual skills
          </p>
        </div>
        <div className="offer-item flex flex-col items-center justify-center">
          <div className="shadow-custom flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 ">
            <img
              src="../src/assets/business.png"
              alt=""
              className="h-10 w-10"
            />
          </div>
          <h2 className="mt-6 mb-2 text-center text-lg font-bold opacity-70">
            Business Solutions
          </h2>
          <p className="text-center opacity-80">
            We have developed business related applications for many kinds of
            business ( small to enterprise ) and let us adjust and develop for
            you.
          </p>
        </div>
        <div className="offer-item flex flex-col items-center justify-center">
          <div className="shadow-custom flex h-16 w-16 items-center justify-center rounded-full bg-blue-400 ">
            <img src="../src/assets/package.png" alt="" className="h-10 w-10" />
          </div>
          <h2 className="mt-6 mb-2 text-center text-lg font-bold opacity-70">
            Exclusive Packages
          </h2>
          <p className="text-center opacity-80">
            Our Packages are exculsive and with our packages, you can develop
            quickly and high performance application with ease
          </p>
        </div>
      </div>
    </section>
  );
};
