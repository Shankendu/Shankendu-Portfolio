import { useContext, useEffect, useRef } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import Navbar from "../components/Navbar";
import PagePreload from "../components/PagePreload";
import gsap from "gsap";
import { Context } from "../context/context";
import { useGSAP } from "@gsap/react";


const Projects = () => {
  const { open, setOpen, loading, setLoading } = useContext(Context);
  const container = useRef();

  useEffect(() => {
    setLoading(true);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from("#preload", {
        y: "0",
        duration: 1,
      });
      tl.to("#preload", {
        y: "-150%",
        duration: 2,
        borderRadius: "50%",
        boxShadow: "0px 0px 100px 100px #2C2C2C",
        ease: "power4.inOut",
        onComplete: () => {
          setLoading(false);
          setTimeout(() => {
            document.body.classList.remove("overflow-hidden");
          }, 100);
        },
      });
      gsap.from(["#navbar", "#hamburger", "#about"], {
        y: "-200%",
        duration: 3,
        ease: "ease-in",
      });
      gsap.to(["#navbar", "#hamburger", "#about"], {
        y: "0",
        duration: 3,
        ease: "ease-in",
      });
    },
    { scope: container }
  );
  return (
    <>
      <div
        className="w-full min-h-screen dark:bg-[#1A1A1A] bg-[#F0F0F0] overflow-hidden"
        ref={container}
      >
        <PagePreload id="preload" className="absolute z-20" name="PROJECTS." />
        <HamburgerMenu
          id="hamburger"
          onClick={() => setOpen(!open)}
          className={`block sm:hidden absolute z-30 top-0 right-0 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          closeClassname={` ${
            open ? "scale-[1] translate-x-0" : "scale-0 translate-x-full"
          }`}
          menuClassname={` ${open ? "translate-x-0" : "translate-x-full"}`}
          socialClassname={` ${open ? "translate-x-0" : "translate-x-full"}`}
        />
        <Navbar onClick={() => setOpen(!open)} id="navbar" />
      </div>
    </>
  )
}

export default Projects
