import { useContext, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HamburgerMenu from "../components/HamburgerMenu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PagePreload from "../components/PagePreload";
import { Context } from "../context/context";
import shank_front from "../assets/images/shank_front.jpg";
import shank_back2 from "../assets/images/shank_back2.jpg";
import resume from "../assets/images/ShankenduResume.pdf";
import { skills, extraSkills } from "../assets/assets";

const About = () => {
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
        y: "200%",
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
        className="w-full min-h-screen relative bg-gradient-to-b from-[#1a1a1a] to-[#333333] overflow-hidden"
        ref={container}
      >
        <PagePreload id="preload" className="absolute z-20" name="ABOUT." />
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

        <div className="pt-10 p-5 md:p-20 text-[#EAEAEA] font-poppins" id="about">
          {/* About Heading */}
          <div className="pb-5 md:pb-20 border-b border-[#A3A3A3]">
            <h1 className="text-3xl md:text-6xl lg:text-7xl lg:w-3/4">
              Behind the Code: The Web Developer Who Plays Piano Too!
            </h1>
          </div>

          {/* About Desc*/}
          <div
            className={`flex pt-10 md:pt-20 flex-col-reverse md:flex-row justify-center items-center md:items-start md:gap-x-20`}
          >
            <section className="w-full md:w-[40%] relative">
              <p className="pt-3 md:pt-0 text-center md:text-left text-xl font-light">
                I’m a passionate web developer with expertise in creating
                seamless, responsive, and impactful websites. Driven by
                curiosity and innovation, I transform ideas into digital
                experiences that leave a lasting impression.
              </p>
              <p className="text-center md:text-left text-lg pt-6 italic font-light text-[#a3a3a3]">
                Code, Create, Explore.
              </p>

              <div className="flex justify-center md:block">
                <a
                  href={resume}
                  download={true}
                  type="submit"
                  className="w-fit flex justify-center gap-2 items-center mt-10 shadow-xl text-lg bg-[#eaeaea] text-[#1a1a1a] backdrop-blur-md lg:font-semibold isolation-auto border-[#eaeaea] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#5B84FF] hover:text-[#eaeaea] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                  <p>Resume</p>
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </a>
              </div>
            </section>
            <section className="w-full md:w-[60%]">
              <img
                className="w-full hover:grayscale transition-all duration-1000"
                src={shank_front}
                alt=""
              />
            </section>
          </div>

          {/* About Education*/}
          <div
            className={` flex pt-20 flex-col-reverse md:flex-row-reverse justify-center items-start gap-x-20`}
          >
            <section className="w-full md:w-[40%]">
              <p className="hidden md:block text-left text-sm font-light text-[#a3a3a3] pb-5 border-b border-[#A3A3A3]">
                EDUCATION
              </p>
              <div className="pt-5">
                <p className="text-left text-lg ">• B.E. in Computer Science</p>
                <p className="pl-3 text-base font-light pt-1">
                  Vasantdada Patil Pratisthan&apos;s College of Engineering and
                  Visual Arts, Mumbai.
                </p>
                <div className="pl-3 text-sm font-light text-[#a3a3a3] flex justify-between items-center pt-1">
                  <p>2024</p>
                  <p>8.31 GPA</p>
                </div>
              </div>

              <div className="pt-3 md:pt-5">
                <p className="text-left text-lg ">
                  • Higher Secondary Education
                </p>
                <p className="pl-3 text-base font-light pt-1">
                  Mother Mary Jr. College of Science, Commerce and Arts, Mumbai.
                </p>
                <div className="pl-3 text-sm font-light text-[#a3a3a3] flex justify-between items-center pt-1">
                  <p>2020</p>
                  <p>75.54 %</p>
                </div>
              </div>

              <div className="pt-5">
                <p className="text-left text-lg ">
                  • Secondary School Education
                </p>
                <p className="pl-3 text-base font-light pt-1">
                  Father Joseph English High School, Mumbai.
                </p>
                <div className="pl-3 text-sm font-light text-[#a3a3a3] flex justify-between items-center pt-1">
                  <p>2018</p>
                  <p>86.40 %</p>
                </div>
              </div>
            </section>
            <section className="w-full md:w-[60%]">
              <img
                className="w-full hover:grayscale transition-all duration-1000"
                src={shank_back2}
                alt=""
              />
            </section>
          </div>
        </div>

        {/* About Skills */}
        <div
          className={`${
            loading ? "hidden" : "block"
          } text-[#eaeaea]`}
        >
          <div className="py-5 md:py-10 font-poppins w-full text-center">
            <h1 className="pb-10 text-5xl">SKILLS</h1>
            {/* Skill Section */}
            <div className={`${loading ? "hidden" : "block"} w-full h-fit`}>
              {/* Slider-1 */}
              <div
                className="w-full mb-5 h-[150px] overflow-hidden group "
                style={{ "--width": "150px", "--quantity": 10 }}
              >
                <div className="w-full min-w-[calc(var(--width)_*_var(--quantity))] flex items-center relative ">
                  {skills.map((item, index) => {
                    return (
                      <div key={index}>
                        <div
                          className="w-[var(--width)] h-[150px] absolute top-0 left-[100%] animate-autorun group-hover:[animation-play-state:paused] group-hover:grayscale hover:[filter:grayscale(0)!important] transition duration-300"
                          style={{ "--position": `${index + 1}` }}
                        >
                          <img
                            className="w-full"
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Code Preview */}
        <div
          className={`${
            loading ? "hidden" : "block"
          } px-5 md:px-20  text-[#1a1a1a]`}
        >
          <section className="p-8 bg-[#1a1a1a]">
            <h2 className="text-xl md:text-2xl font-bold text-[#eaeaea] mb-6 font-poppins">
              MY SKILLS
            </h2>
            <div className=" bg-[#1a1a1a] text-[#eaeaea] rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#272728] flex items-center px-4 py-2">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></span>
                </div>
                <span className="ml-auto text-sm text-[#a3a3a3]">skills.js</span>
              </div>
              <div className="p-4 font-source text-sm">
                <p className="text-green-400 ">
                  const
                  <span className="text-blue-400 "> skills</span>
                  <span className="text-white"> = &#123;</span>
                </p>
                {skills.map((item, index) => {
                  return (
                    <div key={index}>
                      <span className="ml-4 text-yellow-400">
                        &quot;{item.name}&quot;
                      </span>
                      :{" "}
                      <span className="text-purple-400">
                        &quot;{item.percent}&quot;
                      </span>
                      ,
                      <br />
                    </div>
                  );
                })}
                <span className="text-white">&#125;;</span>
              </div>
            </div>
          </section>
        </div>

        {/* Extra Skills */}
        <div
          className={`${
            loading ? "hidden" : "block"
          } py-10 px-5 md:p-20`}
        >
          <section className="p-8 bg-[#1a1a1a] font-poppins">
            <h2 className="text-xl md:text-2xl font-bold text-[#eaeaea] mb-6">
              BEYOND CODING
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-y-0">
              {extraSkills.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-[#272728] text-[#eaeaea] p-5">
                      <div>
                        <div
                          className="group-hover:scale-110 w-full h-60 bg-blue-400 duration-500 bg-cover"
                          style={{ backgroundImage: `url(${item.image})` }}
                        ></div>
                        <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                          <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-[#1a1a1a]"></div>
                          <span className="text-sm font-normal">{item.name}</span>
                          <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <Footer className={`${loading ? "hidden" : "block"}`} />
      </div>
    </>
  );
};

export default About;
