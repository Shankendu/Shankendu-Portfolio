import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useContext } from "react";
import { Context } from "./context/context";

import About from "./pages/About";


function App() {
  const {loading} = useContext(Context);
  return (
    <>
      <div className={`w-full flex flex-col items-center relative ${loading ? "h-screen " : "min-h-screen"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
