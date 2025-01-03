import { useParams } from "react-router-dom";
// import Mockup from "../components/Mockup";
import { useContext, useEffect, useRef } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import Navbar from "../components/Navbar";
import PagePreload from "../components/PagePreload";
import gsap from "gsap";
import { Context } from "../context/context";
import { useGSAP } from "@gsap/react";
import { projects } from "../assets/assets";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const param = useParams();
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
      gsap.from(["#navbar", "#hamburger", "#project-container", "#project"], {
        y: "200%",
        duration: 3,
        ease: "ease-in",
      });
      gsap.to(["#navbar", "#hamburger", "#project-container", "#project"], {
        y: "0",
        duration: 3,
        ease: "ease-in",
      });
    },
    { scope: container }
  );
  return (
    <div
      id="project-container"
      ref={container}
      className={`w-full ${
        loading
          ? "bg-[#1A1A1A]"
          : "bg-gradient-to-b from-[#1a1a1a] from-[30%] to-[#2C2C2C]"
      } min-h-screen overflow-hidden relative`}
    >
      <PagePreload
        id="preload"
        className="absolute z-20"
        name={param.id.toUpperCase() + "."}
      />
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
      <div id="project" className="w-full text-[#EAEAEA]">
        {projects.map((project, index) => {
          if (project.title === param.id) {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-full min-h-screen p-10 md:p-20 font-poppins "
              >
                <h1 className="w-full text-4xl sm:text-5xl md:text-[5rem] font-normal flex items-center mb-10">
                  {project.title}
                </h1>
                <div className="w-full pb-10">
                  <h1 className="mb-4 text-xs text-[#a3a3a3]">
                    TECHNOLOGY USED
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className={`
                px-3 py-1 
                text-sm sm:text-md 
                rounded-full
                transition-all duration-500
                border border-[#A3A3A3]
             hover:bg-[#A3A3A3]
               hover:text-[#1a1a1a]

              `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className=" font-poppins w-full flex items-center justify-start md:justify-end">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="relative group w-full h-20 md:size-44 shadow-xl group-hover:shadow-2xl flex items-center justify-center overflow-hidden overflow-x-hidden rounded-full bg-[#5B84FF] bg-[#5B84FF]  text-[#eaeaea] text-[#333333]"
                  >
                    <span className="relative z-10">Visit</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-[#4A73D1] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span>
                  </a>
                </div>
                <div className="w-full md:w-[80%] h-full flex items-center justify-center px-0 py-10 md:p-10">
                  <video
                    className=" overflow-hidden object-fit rounded-md"
                    src={project.video1}
                    muted
                    autoPlay
                    loop
                  ></video>
                </div>
                <div className="w-full md:w-[80%] h-full flex items-center justify-center px-0 pb-10 md:p-10">
                  <video
                    className=" overflow-hidden object-fit rounded-md"
                    src={project.video2}
                    muted
                    autoPlay
                    loop
                  ></video>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Footer className={`${loading ? "hidden" : "block"}`} />
    </div>
  );
};

export default ProjectDetail;
