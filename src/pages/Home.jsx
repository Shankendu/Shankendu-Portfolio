import male2 from "../assets/characterMale2.png";
import work from "../assets/work.png";
import favAudio from "../assets/favAudio.mp3";
import Navbar from "../components/Navbar";
import Preload from "../components/Preload";
import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Context } from "../context/context";
import HamburgerMenu from "../components/HamburgerMenu";

const Home = () => {
  const container = useRef();
  const { setLoading } = useContext(Context);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(favAudio));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  const playPause = () => {
    setIsPlaying(!isPlaying);
    audio.ended ? audio.play() : audio.pause();
  };

  //!Function for playing audio
  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

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
      gsap.from(["#navbar", "#home", "#rightLeft", "#marquee"], {
        y: "-200%",
        duration: 3,
        ease: "ease-in",
      });
      gsap.to(["#navbar", "#home", "#rightLeft", "#marquee"], {
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
        className="w-full min-h-screen relative overflow-hidden dark:bg-[#1A1A1A] bg-[#F0F0F0] "
        ref={container}
      >
        <Preload id="preload" className="absolute z-20" />
        <HamburgerMenu
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
        <div
          id="home"
          className="w-full h-screen flex items-center justify-center"
        >
          {/* Character component */}
          <div className=" h-screen w-[100%] basis-[100%] flex justify-center items-center relative overflow-y-hidden overflow-x-visible">
            <img
              className="min-h-[90vh] sm:h-[100vh] md:h-[130vh] object-cover absolute bottom-0 sm:top-0"
              src={male2}
              alt=""
            />
          </div>
        </div>

        <div
          id="rightLeft"
          className="w-full flex justify-between items-center absolute bottom-[-60px] sm:bottom-[-60px] md:bottom-[40%] md:top-[40%] lg:top-[25%] xl:top-[25%] z-10"
        >
          {/* Location component */}
          <div className="md:w-[250px] lg:w-[300px] h-[120px] rounded-r-full dark:bg-[#3C3C3C] bg-[#D4D4D4] hidden md:flex items-center justify-between">
            <div className="font-poppins dark:text-[#EAEAEA] text-[#333333] text-xl pl-10 ">
              <p>Located</p>
              <p>in the</p>
              <p>India</p>
            </div>
            <div className="w-24 h-24 rounded-full dark:bg-[#1A1A1A] mr-4 bg-[#F0F0F0] flex items-center justify-center">
              <div className="dark:flex hidden dark:items-center dark:justify-center ">
                <lord-icon
                  src="https://cdn.lordicon.com/rpviwvwn.json"
                  trigger="loop"
                  state="loop-rotate"
                  colors="primary:#eaeaea,secondary:#eaeaea"
                  style={{ width: "64px", height: "64px" }}
                ></lord-icon>
              </div>
              <div className="flex items-center justify-center dark:hidden">
                <lord-icon
                  src="https://cdn.lordicon.com/rpviwvwn.json"
                  trigger="loop"
                  state="loop-rotate"
                  colors="primary:#333333,secondary:#333333"
                  style={{ width: "64px", height: "64px" }}
                ></lord-icon>
              </div>
            </div>
          </div>

          {/* Rightcomponent */}
          <div className="w-full md:w-[380px] lg:w-[500px] h-[200px] flex md:flex-col items-center justify-between md:items-end md:justify-evenly">
            {/* Audio Component */}
            <div
              className="w-10 h-10 border-2 relative dark:border-[#5B84FF] border-[#5B84FF] rounded-full ml-5 md:mr-10 flex items-center justify-center cursor-pointer before:w-10 before:h-10 before:border-2 before:dark:border-[#5B84FF] before:border-[#5B84FF] before:absolute before:top-[-5%] before:left-[-5%] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:animate-ripple"
              onClick={playPause}
            >
              {isPlaying ? (
                <lord-icon
                  src="https://cdn.lordicon.com/jctchmfs.json"
                  trigger="hover"
                  colors="primary:#5B84FF"
                  style={{ width: "20px", height: "20px" }}
                ></lord-icon>
              ) : (
                <lord-icon
                  src="https://cdn.lordicon.com/becebamh.json"
                  trigger="hover"
                  colors="primary:#5B84FF"
                  style={{ width: "20px", height: "20px" }}
                ></lord-icon>
              )}
            </div>
            {/* Text component */}
            <div className="font-poppins dark:text-[#EAEAEA] text-[#333333] text-base md:text-3xl lg:text-4xl pr-5 md:pr-10">
              <p>Creator</p>
              <p>Designer & Developer</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full flex justify-center font-poppins">
          {/* Name Marquee */}
          <div
            id="marquee"
            className="flex items-center h-[50px] w-[200%] text-[max(2em,_16vw)] md:text-[max(6em,_16vw)] dark:text-[#EAEAEA] text-[#333333] relative selection:bg-transparent dark:selection:bg-transparent group/marquee cursor-pointer"
            draggable="false"
          >
            <div
              className="absolute w-full left-[100%] animate-scroll-left translate-y-[-150%] sm:translate-y-[-60%] md:translate-y-[-50%] lg:translate-y-[-45%] will-change-transform group-hover/marquee:[animation-play-state:paused]"
              style={{ "--position": 1 }}
            >
              <h1 className="whitespace-nowrap ">Shankendu Kunti -</h1>
            </div>
            <div
              className="absolute w-full left-[100%] animate-scroll-left translate-y-[-150%] sm:translate-y-[-60%] md:translate-y-[-50%] lg:translate-y-[-45%] will-change-transform group-hover/marquee:[animation-play-state:paused]"
              style={{ "--position": 2 }}
            >
              <h1 className="whitespace-nowrap">Shankendu Kunti -</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-[#eaeaea] bg-[#333333] min-h-screen w-full font-poppins dark:text-[#1a1a1a] text-[#F0F0F0] p-20">
        {/* About Section */}
        <div className=" w-full h-fit flex items-start justify-center px-5 pt-5 border-b-2 dark:border-[#A3A3A3] border-[#F0F0F0] ">
          <div className=" px-5 pt-5 h-[inherit] flex flex-col items-start justify-start gap-y-24">
            <h1 className="text-3xl leading-relaxed  ">
              I’m a passionate web developer with expertise in creating
              seamless, responsive, and impactful websites. Driven by curiosity
              and innovation, I transform ideas into digital experiences that
              leave a lasting impression.
            </h1>
            <h1 className="text-base">RECENT PROJECT</h1>
          </div>
          <div className=" flex flex-col gap-y-10 justify-start items-start p-8">
            <h1>
              I focus on creating user-centered designs with clean code,
              delivering tailored solutions that make every project stand out.
            </h1>
            <button className="group relative z-0 h-44 w-44 shadow-xl group-hover:shadow-2xl flex items-center justify-center overflow-hidden overflow-x-hidden rounded-full dark:bg-[#1a1a1a] bg-[#F0F0F0]  dark:text-[#eaeaea] text-[#333333]">
              <span className="relative z-10">About Me</span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-[#5B84FF] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Work Section */}
        <div className="w-full h-fit p-10 border-b-2 dark:border-[#A3A3A3] border-[#F0F0F0] flex items-center justify-between">
          <h1 className=" text-7xl">CRYPTOTRACKR</h1>

          <div className="h-[10em] w-[17em] rounded-[1em] overflow-hidden relative group p-4 z-0">
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#5B84FF] group-hover:scale-[800%] duration-500 group-hover:opacity-60 group-hover:blur-md"></div>

            <button className="text-[0.8em] absolute bottom-[1em] left-[1em] group-hover:dark:text-[#eaeaea] group-hover:text-[#333333] duration-500">
              <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] group-hover:before:bg-[white] duration-100 before:bottom-0 before:left-0 scale-0 group-hover:scale-100">
                source code
              </span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>

            <button className="absolute font-poppins scale-0 group-hover:scale-100 group-hover:dark:text-[#eaeaea] group-hover:text-[#333333]  duration-500 text-[1.4em]">
              VIEW PAGE
            </button>
            <img
              src={work}
              alt="work"
              className="scale-[1.7] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-30 group-hover:blur-[2px] group-hover:scale-[1.5] duration-300 "
            />
          </div>
        </div>

        {/* View More Button */}
        <div className="w-full h-fit px-20 pt-20 flex items-center justify-center">
          <button className="group relative inline-flex h-24 w-60 items-center justify-center overflow-hidden rounded-full border dark:border-[#A3A3A3] border-[#F0F0F0]  bg-transparent font-medium">
            <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-[600ms] group-hover:-translate-y-[150%]">
              More Projects
            </div>
            <div className="absolute inline-flex h-36 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
              <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-[600ms] group-hover:translate-y-0 group-hover:scale-[1.7]"></span>
              <span className="z-10">More Projects</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
