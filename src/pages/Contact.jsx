import { useContext, useEffect, useRef, useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import Navbar from "../components/Navbar";
import PagePreload from "../components/PagePreload";
import gsap from "gsap";
import { Context } from "../context/context";
import { useGSAP } from "@gsap/react";
import pp from "../assets/images/shank_front.jpg";
import { socials } from "../assets/assets";

const Contact = () => {
  const { open, setOpen, loading, setLoading } = useContext(Context);
  const [time, setTime] = useState(new Date());
  const container = useRef();

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
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
        className="w-full min-h-screen dark:bg-[#1A1A1A] bg-[#F0F0F0] overflow-hidden"
        ref={container}
      >
        <PagePreload id="preload" className="absolute z-20" name="CONTACT." />
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

        <div
          id="about"
          className="px-10 md:px-20 pt-10 md:pt-20 dark:text-[#EAEAEA] text-[#333333] font-poppins"
        >
          {/* Contact Header */}
          <div className="flex flex-row-reverse md:flex-row item-start md:items-end gap-x-5 md:gap-x-36 border-b md:border-b-0 dark:border-[#A3A3A3] border-[#F0F0F0] pb-5 md:pb-0">
            <h1 className="basis-[90%] md:basis-[70%] text-4xl sm:text-6xl md:text-7xl">Let’s Connect and Create!</h1>
            <div className="basis-[10%] md:basis-[30%]">
              <div
                className="size-10 sm:size-16 md:size-32 rounded-full bg-[#333333] bg-cover bg-center"
                style={{ backgroundImage: `url(${pp})` }}
              ></div>
            </div>
          </div>

          {/* Contact Body */}
          <div className="mt-10 md:mt-28 flex flex-col-reverse md:flex-row items-start md:gap-x-20 gap-x-36 ">

            {/* Contact Form */}
            <form className="mt-5 md:mt-0 basis-full md:basis-[80%] lg::basis-[70%] w-full">
              <div className="w-full flex flex-row gap-x-10 justify-start items-start py-10 border-y dark:border-[#a3a3a3] border-[#F0F0F0]">
                <section className="w-5 dark:text-[#a3a3a3] text-[#f0f0f0] text-sm">
                  01
                </section>
                <section className="flex flex-col w-full">
                  <label className="text-xl lg:text-2xl" htmlFor="username">
                    What&apos;s your name?
                  </label>
                  <input
                    className="my-5 bg-transparent w-full outline-none text-lg lg:text-xl placeholder:text-lg lg:placeholder:text-xl placeholder:text-[#f0f0f0] dark:placeholder:text-[#a3a3a3]"
                    type="text"
                    name=""
                    id="username"
                    placeholder="First Name, Last Name *"
                  />
                </section>
              </div>
              <div className="w-full flex flex-row gap-x-10 justify-start items-start py-10 border-b dark:border-[#a3a3a3] border-[#F0F0F0]">
                <section className="dark:text-[#a3a3a3] text-[#f0f0f0] text-sm">
                  02
                </section>
                <section className="flex flex-col w-full">
                  <label className="text-xl lg:text-2xl" htmlFor="email">
                    What&apos;s your email?
                  </label>
                  <input
                    className="my-5 bg-transparent w-full outline-none text-lg lg:text-xl placeholder:text-lg lg:placeholder:text-xl placeholder:text-[#f0f0f0] dark:placeholder:text-[#a3a3a3]"
                    type="email"
                    name=""
                    id="email"
                    placeholder="example@domain.com *"
                  />
                </section>
              </div>
              <div className="w-full h-fit flex flex-row gap-x-10 justify-start items-start pt-10 pb-16 border-b dark:border-[#a3a3a3] border-[#F0F0F0]" >
                <section className="dark:text-[#a3a3a3] text-[#f0f0f0] text-sm">
                  03
                </section>
                <section className="flex flex-col w-full">
                  <label className="text-xl lg:text-2xl" htmlFor="message">
                    Your message
                  </label>
                  <textarea
                    className="my-5 h-[15rem] bg-transparent w-full outline-none text-lg lg:text-xl resize-none placeholder:text-lg lg:placeholder:text-xl placeholder:text-[#f0f0f0] dark:placeholder:text-[#a3a3a3]"
                    name=""
                    id="message"
                    placeholder="Share Your Thoughts! *"
                    style={{scrollbarWidth: "thin", scrollbarColor: "#f0f0f0 #333333"}}
                  ></textarea>
                </section>
              </div>
            </form>

            {/* Contact Details */}
            <div className="basis-full md:basis-[30%]">
              <div>
                <p className="pb-3 dark:text-[#a3a3a3] text-[#f0f0f0] text-xs">
                  CONTACT DETAILS
                </p>
                <p className="">
                  <a className="text-lg md:text-xl " href="mailto:shankenduk@gmail">
                    shankenduk@gmail.com
                  </a>
                </p>
                <p className="mt-1">
                  <a className="text-lg md:text-xl" href="tel:+918828198696">
                    +91 8828198696
                  </a>
                </p>
              </div>
              <div className="mt-10 hidden md:block">
                <p className="pb-3 dark:text-[#a3a3a3] text-[#f0f0f0] text-xs">
                  SOCIALS
                </p>
                {socials.map((items, index) => {
                  return (
                    <a
                      href={items.link}
                      key={index}
                      className="flex flex-row group items-center pb-3"
                    >
                      <img
                        className="h-8 w-8 dark:block hidden"
                        src={items.imageDark}
                        alt={items.name}
                      />
                      <img
                        className="h-8 w-8 dark:hidden block"
                        src={items.imageLight}
                        alt={items.name}
                      />
                      <p className="-translate-x-8 scale-0 group-hover:translate-x-5 group-hover:scale-100 duration-300 ease-in-out text-sm">
                        {items.name}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Send Button */}
          <div className=" font-poppins">
            <button to="/contact" className="group translate-x-1/2 -translate-y-1/2 z-0 size-36 md:size-44 shadow-xl group-hover:shadow-2xl flex items-center justify-center overflow-hidden overflow-x-hidden rounded-full dark:bg-[#5B84FF] bg-[#5B84FF]  dark:text-[#eaeaea] text-[#333333]">
              <span className="relative z-10">Send it!</span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-[#4A73D1] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>
          </div>

          {/* Contact Footer */}
          <div className="flex flex-col-reverse md:flex-row items-start justify-between pb-5 gap-y-10">
            <div className="flex items-center gap-10">
              <section>
                <h1 className="text-start text-xs text-[#a3a3a3] pb-5">
                  MADE WITH ❤️
                </h1>
                <p className="text-sm md:text-base">
                  &copy; {new Date().getFullYear()} Shankendu Kunti
                </p>
              </section>
              <section>
                <h1 className="text-start text-xs text-[#a3a3a3] pb-5">
                  LOCAL TIME
                </h1>
                <p className="text-sm md:text-base">
                  {time.toLocaleTimeString()}
                </p>
              </section>
            </div>

            <div>
              <h1 className="text-start text-xs text-[#a3a3a3] pb-5">
                SOCIALS
              </h1>
              <section className="flex items-center">
                {socials.map((item, index) => {
                  return (
                    <div key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        className="flex flex-col items-center group cursor-pointer"
                      >
                        <img
                          className="hidden dark:block size-7"
                          src={item.imageDark}
                          alt={item.name}
                        />
                        <img
                          className="block dark:hidden size-7"
                          src={item.imageLight}
                          alt={item.name}
                        />
                        <h1 className="text-xs pt-3 translate-y-10 scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-150 ease-in">
                         {item.name}
                        </h1>
                      </a>
                    </div>
                  );
                })}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
