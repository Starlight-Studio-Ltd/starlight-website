import React, { useEffect, useRef, useState } from "react";
import { Search } from "react-feather";
import StarlightLogo from "../assets/starlight_color_logo.png";
import "./NavBar.css";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const mainSectionEl = document.querySelector(
      "#main-section"
    ) as HTMLElement;

    window.addEventListener("scroll", (e) => {
      if (window.scrollY === 0) {
        setShowNav(true);
      }
      if (
        window.scrollY < mainSectionEl.scrollHeight - 150 &&
        window.scrollY !== 0
      ) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    });
  }, [showNav]);

  return (
    <div className="NavBar" id="navbar" style={{ top: showNav ? 0 : -88 }}>
      <div className="expanded">
        <img src={StarlightLogo} alt="" className="starlight_logo" />
      </div>

      <div className="hover_dropdown_container">
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

        <div className="search-icon ">
          <Search></Search>
        </div>
      </div>

      <button className="GetStarted">Get Started</button>
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
    <div className="hover_drop_down-item">
      <p className="drop_down-label">{dropDownLabel}</p>

      {items.length > 0 && (
        <div className="hover_drop_down-child ">
          <div className="hover_child-container">
            {items.map((e, index) => {
              return (
                <div
                  key={index}
                  className={`${itemStyles} hover:bg-gray-200`}
                  style={{
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    cursor: "pointer",
                  }}
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
