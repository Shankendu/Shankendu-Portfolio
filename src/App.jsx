import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/context";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  const {loading} = useContext(Context);
  return (
    <>
      <div className={`w-full flex flex-col items-center overflow-hidden relative ${loading ? "h-screen " : "min-h-screen"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
