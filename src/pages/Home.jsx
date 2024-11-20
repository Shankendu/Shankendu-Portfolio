import male2 from "../assets/characterMale2.png";
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
      audio.removeEventListener('ended', () => setIsPlaying(false));
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
        className="w-full min-h-screen relative overflow-hidden dark:bg-[#1A1A1A] bg-[#F0F0F0]"
        ref={container}
      >
        <Preload id="preload" className="absolute z-20" />
        <HamburgerMenu onClick={() => setOpen(!open)} className={`block sm:hidden absolute z-30 top-0 right-0 ${open ? "translate-x-0" : "translate-x-full"}`}/>
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
              className="w-10 h-10 border-2 relative dark:border-[#4A73D1] rounded-full ml-5 md:mr-10 hidden dark:flex items-center justify-center cursor-pointer before:w-10 before:h-10 before:border-2 before:border-[#4A73D1] before:absolute before:top-[-5%] before:left-[-5%] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:animate-ripple"
              onClick={playPause}
            >
              {isPlaying ? (
                <lord-icon
                  src="https://cdn.lordicon.com/jctchmfs.json"
                  trigger="hover"
                  colors="primary:#4A73D1"
                  style={{ width: "20px", height: "20px" }}
                ></lord-icon>
              ) : (
                <lord-icon
                  src="https://cdn.lordicon.com/becebamh.json"
                  trigger="hover"
                  colors="primary:#4A73D1"
                  style={{ width: "20px", height: "20px" }}
                ></lord-icon>
              )}
            </div>
            <div
              className="w-10 h-10 border-2 relative border-[#5B84FF] rounded-full ml-5 md:mr-10 dark:hidden flex items-center justify-center cursor-pointer before:w-10 before:h-10 before:border-2 before:border-[#5B84FF] before:absolute before:top-[-5%] before:left-[-5%] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:animate-ripple"
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
            className="flex items-center h-[50px] w-[200%] text-[max(2em,_16vw)] md:text-[max(6em,_16vw)] dark:text-[#EAEAEA] text-[#333333] relative selection:bg-transparent dark:selection:bg-transparent"
            draggable="false"
          >
            <div
              className="absolute w-full left-[100%] animate-scroll-left translate-y-[-150%] sm:translate-y-[-60%] md:translate-y-[-50%] lg:translate-y-[-45%] will-change-transform"
              style={{ "--position": 1 }}
            >
              <h1 className="whitespace-nowrap ">Shankendu Kunti -</h1>
            </div>
            <div
              className="absolute w-full left-[100%] animate-scroll-left translate-y-[-150%] sm:translate-y-[-60%] md:translate-y-[-50%] lg:translate-y-[-45%] will-change-transform"
              style={{ "--position": 2 }}
            >
              <h1 className="whitespace-nowrap">Shankendu Kunti -</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
