import { useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";

function App() {
  useEffect(() => {
    const input: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (const num of input) {
      console.log(linear(num));
    }

    function linear(n: number): number {
      return (n - 1) * 1.5;
    }
  }, []);

  return (
    <div className="">
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
