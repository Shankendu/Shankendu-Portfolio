import { useContext, useEffect, useRef } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import Navbar from "../components/Navbar";
import PagePreload from "../components/PagePreload";
import gsap from "gsap";
import { Context } from "../context/context";
import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../assets/assets";
import Footer from "../components/Footer";

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
      gsap.from(["#navbar", "#hamburger", "#projects", "#project-container"], {
        y: "200%",
        duration: 3,
        ease: "ease-in",
      });
      gsap.to(["#navbar", "#hamburger", "#projects", "#project-container"], {
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
        className="w-full relative min-h-screen bg-[#1A1A1A]  overflow-hidden"
        ref={container}
        id="projects"
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


        <div id="project-container" className="w-full mt-20 font-poppins p-10 md:p-20 bg-gradient-to-b from-[#1A1A1A] to-[#333333] ">
        <h1 className="text-4xl sm:text-5xl md:text-[5rem] flex items-center pb-10 md:pb-16 mb-10 border-b border-[#A3A3A3] text-[#EAEAEA]">My Projects</h1>
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
        <Footer className={`${loading ? "hidden" : "block"}`} />
      </div>
    </>
  );
};

export default Projects;
