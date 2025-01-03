/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/context";
import { socials } from "../assets/assets";

const HamburgerMenu = (props) => {
  const { setOpen, open } = useContext(Context);
  return (
    <>
      <div
        id="ham"
        className={`bg-[#2C2C2C] w-full h-screen ${props.className} transition-all duration-1000 ease-in-out px-6 py-7`}
      >
        {/*Animated Close Button Svg*/}
        <div
          onClick={props.onClick}
          className="text-[#EAEAEA] text-2xl w-full flex items-center justify-end "
        >
          <div
            className={`cursor-pointer shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] bg-[#5B84FF]  hover:bg-[#4A73D1] w-12 h-12 flex items-center justify-center rounded-full transition-transform duration-1000 ease-in-out delay-300  ${props.closeClassname}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="h-[80vh] w-full flex flex-col justify-between items-start">
          <div
            className={`mt-10 w-full transition-transform duration-1000 ease-in-out delay-300 ${props.menuClassname}`}
          >
            <h1 className="font-poppins text-base text-[#A3A3A3] pb-3 mb-5 border-b-2 border-[#A3A3A3]">
              NAVIGATION
            </h1>
            <ul className=" flex flex-col w-full items-start text-4xl gap-5 text-[#EAEAEA]">
              <NavLink
                to={"/"}
                onClick={() => setOpen(!open)}
                className="font-poppins cursor-pointer relative w-full hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-3 [&.active]:after:w-3 after:h-0 after:w-0 hover:after:h-3 [&.active]:after:h-3 hover:after:bg-[#EAEAEA] [&.active]:after:bg-[#EAEAEA] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-[35%] [&.active]:after:top-[35%] hover:after:right-[5%] [&.active]:after:right-[5%] hover:after:z-10 [&.active]:after:z-10"
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                onClick={() => setOpen(!open)}
                className="font-poppins cursor-pointer relative w-full hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-3 [&.active]:after:w-3 after:h-0 after:w-0 hover:after:h-3 [&.active]:after:h-3 hover:after:bg-[#EAEAEA] [&.active]:after:bg-[#EAEAEA] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-[35%] [&.active]:after:top-[35%] hover:after:right-[5%] [&.active]:after:right-[5%] hover:after:z-10 [&.active]:after:z-10"
              >
                About
              </NavLink>
              <NavLink
                to={"/projects"}
                onClick={() => setOpen(!open)}
                className="font-poppins cursor-pointer relative w-full hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-3 [&.active]:after:w-3 after:h-0 after:w-0 hover:after:h-3 [&.active]:after:h-3 hover:after:bg-[#EAEAEA] [&.active]:after:bg-[#EAEAEA] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-[35%] [&.active]:after:top-[35%] hover:after:right-[5%] [&.active]:after:right-[5%] hover:after:z-10 [&.active]:after:z-10"
              >
                Projects
              </NavLink>
              <NavLink
                to={"/contact"}
                onClick={() => setOpen(!open)}
                className="font-poppins cursor-pointer relative w-full hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-3 [&.active]:after:w-3 after:h-0 after:w-0 hover:after:h-3 [&.active]:after:h-3 hover:after:bg-[#EAEAEA] [&.active]:after:bg-[#EAEAEA] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-[35%] [&.active]:after:top-[35%] hover:after:right-[5%] [&.active]:after:right-[5%] hover:after:z-10 [&.active]:after:z-10"
              >
                Contact
              </NavLink>
            </ul>
          </div>

          {/* Social Links */}
          <div
            className={`w-full pb-4 transition-transform duration-1000 ease-in-out delay-[400ms] ${props.socialClassname}`}
          >
            <h1 className="font-poppins text-base text-[#A3A3A3] pb-3 mb-5 border-b-2 border-[#A3A3A3]">
              SOCIALS
            </h1>
            <ul className="flex items-center justify-start gap-5">
              {socials.map((item, index) => {
                return (
                  <div key={index}>
                    <li>
                      <a href={item.link} target="_blank">
                        <img
                          src={item.imageDark}
                          alt={item.name}
                          className="h-9 cursor-pointer"
                        />
                      </a>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
