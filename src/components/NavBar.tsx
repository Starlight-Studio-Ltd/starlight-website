import React, { useRef, useState } from "react";
import { Search } from "react-feather";

export const NavBar = () => {
  return (
    <div className="navbar sticky top-0 flex items-center justify-between bg-baseBlue px-12 py-6 text-white">
      <div className="flex-1">
        <img
          src="../src/assets/starlight_color_logo.png"
          alt=""
          className="h-8 w-auto"
        />
      </div>

      <div className="hidden items-center md:flex">
        <HoverDropDown
          dropDownLabel="Learn"
          items={["Mobile", "Web", "Desktop", "Embedded"]}
        ></HoverDropDown>
        <HoverDropDown
          dropDownLabel="Packages"
          items={[
            "Learn",
            "Flutter Favourite",
            "Packages",
            "Monetization",
            "Games",
          ]}
        ></HoverDropDown>
        <HoverDropDown
          dropDownLabel="ShowCase"
          items={["Community", "Event", "Culture"]}
        ></HoverDropDown>

        <div className="pill cursor-pointer px-6 py-2 hover:bg-lightGray">
          <Search></Search>
        </div>
      </div>

      <button className="GetStarted ml-12 rounded-full bg-white px-8 py-2 font-bold text-baseBlue">
        Get Start
      </button>
    </div>
  );
};

interface IHoverDropDown {
  items: string[];
  itemStyles?: string;
  onClickItem?: () => void;
  dropDownLabel: string;
}

export const HoverDropDown = ({
  itemStyles = "",
  items,
  dropDownLabel,
  onClickItem,
}: IHoverDropDown) => {
  return (
    <div className="relative mx-1">
      <p className="pill peer cursor-pointer px-6 py-2 pt-1 font-bold hover:bg-lightGray">
        {dropDownLabel}
      </p>

      {items.length > 0 && (
        <div className="absolute-x-center hidden w-max flex-col bg-transparent pt-2 hover:flex peer-hover:flex">
          <div className="flex min-w-[200px] flex-col rounded-xl bg-white py-6 text-black">
            {items.map((e, index) => {
              return (
                <div
                  key={index}
                  className={`${itemStyles} py-2 px-6 hover:bg-gray-200`}
                >
                  {e}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
