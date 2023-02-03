import { useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;

// If the cube is directly inside the container:
// #container:hover > #cube { background-color: yellow; }

// If cube is next to (after containers closing tag) the container:
// #container:hover + #cube { background-color: yellow; }

// If the cube is somewhere inside the container:
// #container:hover #cube { background-color: yellow; }

// If the cube is a sibling of the container:
// #container:hover ~ #cube { background-color: yellow; }
