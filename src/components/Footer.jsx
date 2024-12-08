/* eslint-disable react/prop-types */
import pp from "../assets/images/shank_front.jpg";
import { useEffect, useState } from "react";
import { socials } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        className={`${props.className} w-full min-h-screen dark:bg-[#1A1A1A] bg-[#F0F0F0] px-5 md:px-20 pt-20 md:pt-20 font-poppins dark:text-[#EAEAEA] text-[#333333]`}
      >
        <div className="text-4xl sm:text-5xl md:text-[5rem] flex items-center pb-10 md:pb-16 mb-10 border-b dark:border-[#A3A3A3] border-[#F0F0F0]">
          <div className=" h-12 md:h-16 w-12 md:w-16 rounded-full dark:bg-[#EAEAEA] bg-[#333333] overflow-hidden mr-3 bg-cover bg-center" style={{ backgroundImage: `url(${pp})` }}>
          </div>
          <h1>Let&apos;s Connect</h1>
        </div>

        <div className="flex flex-col justify-between h-screen">
          {/* Button Group */}
          <div className="flex flex-col md:flex-row items-center justify-start gap-10 mt-2 md:mt-10">
            <a
              href="mailto:shankenduk@gmail"
              className="group relative z-0 h-fit w-full md:w-fit py-8 px-10 shadow-xl group-hover:shadow-2xl flex items-center justify-center overflow-hidden overflow-x-hidden rounded-full border group-hover:border-0 dark:border-[#EAEAEA] border-[#333333]  dark:text-[#eaeaea] text-[#333333]"
            >
              <span className="relative z-10">
                shankenduk@gmail.com
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-[#5B84FF] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </a>

            <a
              href="tel:+918828198696"
              className="group relative z-0 h-fit w-full md:w-fit py-8 px-10 shadow-xl group-hover:shadow-2xl flex items-center justify-center overflow-hidden overflow-x-hidden rounded-full border group-hover:border-0 dark:border-[#EAEAEA] border-[#333333]  dark:text-[#EAEAEA] text-[#333333]"
            >
              <span className="relative z-10" href="tel:+918828198696">
                +91 8828198696
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-[#5B84FF] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </a>

            <NavLink to="/contact" className="group relative z-0 h-fit w-full md:hidden py-8 px-10 shadow-xl group-hover:shadow-2xl flex items-center justify-center overflow-hidden overflow-x-hidden rounded-full dark:bg-[#5B84FF] bg-[#5B84FF]  dark:text-[#eaeaea] text-[#333333]">
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-[#4A73D1] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </NavLink>
          </div>

          {/* Contact Button */}
          <div className="relative font-poppins md:block hidden">
            <NavLink to="/contact" className="group absolute right-[50%] top-[50%] translate-x-1/2 -translate-y-1/2 md:right-20 md:-top-5 z-0 h-44 sm:h-56 w-44 sm:w-56 shadow-xl group-hover:shadow-2xl flex items-center justify-center overflow-hidden overflow-x-hidden rounded-full dark:bg-[#5B84FF] bg-[#5B84FF]  dark:text-[#eaeaea] text-[#333333]">
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-[#4A73D1] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </NavLink>
          </div>

          <div className="w-full h-[1px] border-b dark:border-[#A3A3A3] border-[#F0F0F0]"></div>

          {/* Copyright and Socials */}
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

export default Footer;
