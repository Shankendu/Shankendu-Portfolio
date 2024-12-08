import Navbar from "../components/Navbar";
import Preload from "../components/Preload";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";
import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Context } from "../context/context";
import { NavLink } from "react-router-dom";
import favAudio from "../assets/audio/favAudio.mp3";
import work from "../assets/images/work.png";
import male2 from "../assets/images/characterMale2.png";
import cryptoLogo from "../assets/images/cryptoWork.png";
import layerLogo from "../assets/images/layerLogo.png";
import weatherLogo from "../assets/images/weatherLogo.png";
import latestLogo from "../assets/images/latestLogo.png";
import textLogo from "../assets/images/textLogo.png";
import qrLogo from "../assets/images/qrLogo.png";

const Home = () => {
  const container = useRef();
  const { loading, setLoading, open, setOpen } = useContext(Context);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(favAudio));
  
  useEffect(() => {
    const newAudio = new Audio(favAudio);
    setAudio(newAudio);
  }, []);

useEffect(() => {
  return () => {
    audio.pause();
  };
}, [audio]);


  useEffect(() => {
    setLoading(true);
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
    
  }, []);

  const playPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
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
      gsap.from(["#navbar", "#home", "#rightLeft", "#marquee", "#hamburger", "#hero"], {
        y: "200%",
        duration: 3,
        ease: "ease-in",
      });
      gsap.to(["#navbar", "#home", "#rightLeft", "#marquee", "#hamburger", "#hero"], {
        y: "0",
        duration: 3,
        ease: "ease-in",
      });
    },
    { scope: container }
  );
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full min-h-screen relative overflow-hidden dark:bg-[#1A1A1A] bg-[#F0F0F0] "
        id="hero"
        ref={container}
      >
        <Preload id="preload" className="absolute z-20" />
        <HamburgerMenu id="hamburger"
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
        {/* Character component */}
        <div
          id="home"
          className="w-full h-screen flex items-center justify-center"
        >
          <div className=" h-screen w-[100%] basis-[100%] flex justify-center items-center relative overflow-y-hidden overflow-x-visible">
            <img
              className="min-h-[90vh] sm:h-[100vh] md:h-[130vh] object-cover absolute bottom-0 sm:top-0"
              src={male2}
              alt=""
            />
          </div>
        </div>

        {/* Right and Left Component */}
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

        {/* Name Marquee */}
        <div className="absolute bottom-0 w-full flex justify-center font-poppins" id="marquee">
          <div
            className="flex items-center h-[50px] w-[200%] text-[max(2em,_16vw)] md:text-[max(6em,_16vw)] dark:text-[#EAEAEA] text-[#333333] relative selection:bg-transparent dark:selection:bg-transparent group/marquee cursor-pointer"
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

      {/* Below Hero Section */}
      <div
        className={`${
          loading ? "hidden" : "block"
        } dark:bg-[#eaeaea] bg-[#333333] min-h-screen w-full font-poppins dark:text-[#1a1a1a] text-[#F0F0F0] p-5 md:p-20`}
      >
        {/* About Section */}
        <div className=" w-full h-fit flex flex-col md:flex-row item-center md:items-start justify-center px-5 pt-5 border-b-2 dark:border-[#A3A3A3] border-[#F0F0F0] ">
          <div className=" px-5 pt-5 h-[inherit] flex flex-col item-center md:items-start justify-center md:justify-start gap-y-24">
            <h1 className="text-xl md:text-3xl leading-relaxed  ">
              I’m a passionate web developer with expertise in creating
              seamless, responsive, and impactful websites. Driven by curiosity
              and innovation, I transform ideas into digital experiences that
              leave a lasting impression.
            </h1>
            <h1 className="hidden md:block text-base">RECENT PROJECT</h1>
          </div>
          <div className=" flex flex-col gap-y-10 item-center md:items-start justify-center md:justify-start p-5">
            <h1>
              I focus on creating user-centered designs with clean code,
              delivering tailored solutions that make every project stand out.
            </h1>
            <NavLink to="/about" className="group relative z-0 h-44 w-44 shadow-xl group-hover:shadow-2xl flex items-center justify-center overflow-hidden overflow-x-hidden rounded-full dark:bg-[#1a1a1a] bg-[#F0F0F0]  dark:text-[#eaeaea] text-[#333333]">
              <span className="relative z-10">About Me</span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-[#5B84FF] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </NavLink>
          </div>
        </div>

        {/* Work Section */}
        <div className="w-full h-fit p-10 border-b-2 dark:border-[#A3A3A3] border-[#F0F0F0] flex md:flex-row flex-col items-center justify-between">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:7xl pb-10 md:pb-0 hover:text-[#A3A3A3] transition-colors duration-500">
            CRYPTOTRACKR
          </h1>

          <div className="h-[10em] sm:h-[12em] md:h-[10em] w-[17em] sm:w-[20em] md:w-[17em] rounded-[1em] overflow-hidden relative group p-4 z-0">
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#5B84FF] group-hover:scale-[800%] duration-500 group-hover:opacity-60 group-hover:blur-md"></div>

            <button className="text-[0.8em] absolute bottom-[1em] left-[1em] group-hover:dark:text-[#eaeaea] group-hover:text-[#333333] duration-500">
              <a href="https://github.com/Shankendu/CryptoTrackr---Price-Tracking-and-Market-Analysis" target="_blank" rel="noopener noreferrer" className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] group-hover:before:bg-[white] duration-100 before:bottom-0 before:left-0 scale-0 group-hover:scale-100">
                source code
              </a>
              <i className="fa-solid fa-arrow-right"></i>
            </button>

            <button className="absolute font-poppins scale-0 group-hover:scale-100 group-hover:dark:text-[#eaeaea] group-hover:text-[#333333]  duration-500 text-[1.4em]">
              <a href="https://crypto-trackr-price-tracking-and-market-analysis.vercel.app/" target="_blank" rel="noopener noreferrer">VIEW PAGE</a>
            </button>
            <img
              src={work}
              alt="work"
              className="scale-[1.7] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-30 group-hover:blur-[2px] group-hover:scale-[1.5] duration-300 "
            />
          </div>
        </div>

        {/* View More Button */}
        <div className="w-full h-fit md:px-20 py-10 md:pt-20 flex items-center justify-center">
          <NavLink to="/projects" className="group relative inline-flex h-24 w-full md:w-60 items-center justify-center overflow-hidden rounded-full border dark:border-[#A3A3A3] border-[#F0F0F0]  bg-transparent font-medium">
            <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-[600ms] group-hover:-translate-y-[150%]">
              More Projects
            </div>
            <div className="absolute inline-flex h-36 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
              <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#5B84FF] transition duration-[600ms] group-hover:translate-y-0 group-hover:scale-[1.7]"></span>
              <span className="z-10">More Projects</span>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Skill Section */}
      <div
        className={`${
          loading ? "md:hidden" : "md:block"
        } w-full h-fit pb-20 dark:bg-[#eaeaea] bg-[#333333] hidden`}
      >
        {/* Slider-1 */}
        <div
          className="w-full mb-5 h-[250px] overflow-hidden group"
          style={{ "--width": "600px", "--quantity": 6 }}
        >
          <div className="w-full min-w-[calc(var(--width)_*_var(--quantity))] border-b-2 flex items-center relative ">
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 left-[100%] animate-autorun group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300  dark:bg-[#A3a3a3] bg-[#f0f0f0]"
              style={{ "--position": 1 }}
            >
              <img className="w-full" src={cryptoLogo} alt="html" />
            </div>
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 left-[100%] animate-autorun group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
              style={{ "--position": 2 }}
            >
              <img className="w-full" src={layerLogo} alt="css" />
            </div>
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 left-[100%] animate-autorun group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
              style={{ "--position": 3 }}
            >
              <img className="w-full" src={weatherLogo} alt="javascript" />
            </div>
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 left-[100%] animate-autorun group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
              style={{ "--position": 4 }}
            >
              <img className="w-full" src={latestLogo} alt="react" />
            </div>
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 left-[100%] animate-autorun group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
              style={{ "--position": 5 }}
            >
              <img className="w-full" src={textLogo} alt="tailwind" />
            </div>
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 left-[100%] animate-autorun group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
              style={{ "--position": 6 }}
            >
              <img className="w-full" src={qrLogo} alt="bootstrap" />
            </div>
          </div>
        </div>

        {/* Slider-2 */}
        <div
          className="w-full h-[250px] overflow-hidden group"
          style={{ "--width": "600px", "--quantity": 6 }}
        >
          <div className="w-full min-w-[calc(var(--width)_*_var(--quantity))] border-b-2 flex items-center relative ">
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 right-[100%] animate-autorun-reverse group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
              style={{ "--position": 1 }}
            >
              <img className="w-full" src={cryptoLogo} alt="html" />
            </div>
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 right-[100%] animate-autorun-reverse group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
              style={{ "--position": 2 }}
            >
              <img className="w-full" src={layerLogo} alt="css" />
            </div>
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 right-[100%] animate-autorun-reverse group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
              style={{ "--position": 3 }}
            >
              <img className="w-full" src={weatherLogo} alt="javascript" />
            </div>
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 right-[100%] animate-autorun-reverse group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
              style={{ "--position": 4 }}
            >
              <img className="w-full" src={latestLogo} alt="react" />
            </div>
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 right-[100%] animate-autorun-reverse group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
              style={{ "--position": 5 }}
            >
              <img className="w-full" src={textLogo} alt="tailwind" />
            </div>
            <div
              className="w-[var(--width)] h-[250px] absolute top-0 right-[100%] animate-autorun-reverse group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
              style={{ "--position": 6 }}
            >
              <img className="w-full" src={qrLogo} alt="bootstrap" />
            </div>
          </div>
        </div>
      </div>
          <Footer className={`${loading ? "hidden" : "block"}`}/>
    </>
  );
};

export default Home;
