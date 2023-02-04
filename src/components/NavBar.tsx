import React, { useEffect, useRef, useState } from "react";
import { Search } from "react-feather";
import StarlightLogo from "../assets/starlight_color_logo.png";
import "./NavBar.css";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

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
      <div className="expanded" onClick={() => {}}>
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

        <div className="search-icon">
          <Search></Search>
        </div>
      </div>

      <a href="#contact" className="GetStarted">
        Get Started
      </a>

      <div className="hamburger">
        <button
          className={`${openMenu && "open"}  menu-btn`}
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
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

// {
//   openMenu && (
//     <div className="nav_backdrop" onClick={toggleMenu}>
//       <div className="nav_overlay" style={{ width: openMenu ? "60%" : "0" }}>
//         <div className="nav_overlay__content">
//           {/*  */}
//           <CollapsibleItem />
//           <CollapsibleItem />
//           <CollapsibleItem />
//           {/*  */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export const CollapsibleItem = () => {
//   const [expand, setExpand] = useState(true);
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (contentRef.current) {
//       contentRef.current.style.maxHeight = expand
//         ? `${contentRef.current.scrollHeight}px`
//         : "0";
//     }
//   }, [expand]);
//   return (
//     <div className="collapsible_item_container" style={{ width: "100%" }}>
//       <button
//         className={`collapsible ${expand && "active"}`}
//         onClick={(e) => {
//           e.stopPropagation();
//           setExpand(!expand); //toggle
//         }}
//       >
//         Open Section 1
//       </button>
//       <div className="content" ref={contentRef}>
//         <li>Mobile</li>
//         <li>Web</li>
//         <li>Desktop</li>
//         <li>Embedded</li>
//       </div>
//     </div>
//   );
// };
