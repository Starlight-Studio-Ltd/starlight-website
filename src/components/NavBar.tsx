import React, { useEffect, useRef, useState } from "react";
import { Search } from "react-feather";
import "./NavBar.css";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const mainSectionEl = document.querySelector(
      "#nav-appear-section"
    ) as HTMLElement;
    setScrollPosition(mainSectionEl?.offsetTop);

    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      if (window.scrollY < scrollPosition) {
        // hide nav bar ::; position none
      } else if (scrollPosition > 380) {
        // show nav bar ::: position sticky
      }
    });
  }, [scrollPosition]);

  useEffect(() => {
    setTimeout(() => {
      setShowNav(true);
    }, 500);
  }, []);

  return (
    <div
      className="NavBar"
      style={
        {
          // transform: showNav ? "translateY(0)" : "translateY(-100%)",
          // transition: "transform 0.5s ease-in-out",
        }
      }
    >
      <div className="expanded">
        <img
          src="../src/assets/starlight_color_logo.png"
          alt=""
          className="starlight_logo"
        />
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

      <button className="GetStarted">Get Start</button>
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
