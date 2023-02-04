import { useEffect, useState } from "react";
import { CloudLightning } from "react-feather";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    let timer1 = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <div className="">
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <NavBar></NavBar>
          <HomePage></HomePage>
        </>
      )}
    </div>
  );
}

export default App;
