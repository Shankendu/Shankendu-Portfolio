/* eslint-disable react/prop-types */
import githubDark from "../assets/github-dark.png";
import githubLight from "../assets/github-light.png";
import linkedinDark from "../assets/linkedin-dark.png";
import linkedinLight from "../assets/linkedin-light.png";
import instaDark from "../assets/instagram-dark.png";
import instaLight from "../assets/instagram-light.png";
import facebookDark from "../assets/facebook-dark.png";
import facebookLight from "../assets/facebook-light.png";
import youtubeDark from "../assets/youtube-dark.png";
import youtubeLight from "../assets/youtube-light.png";

const HamburgerMenu = (props) => {
  return (
    <>
      <div
        id="ham"
        className={`dark:bg-[#2C2C2C] bg-[#333333] w-full h-screen ${props.className} transition-all duration-1000 ease-in-out px-6 py-7`}
      >
        {/*Animated Close Button Svg*/}
        <div
          onClick={props.onClick}
          className="dark:text-[#EAEAEA] text-[#F0F0F0] text-2xl w-full flex items-center justify-end "
        >
          <div
            className={`cursor-pointer shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] dark:bg-[#5B84FF] bg-[#5B84FF] dark:hover:bg-[#4A73D1] hover:bg-[#4A73D1] w-12 h-12 flex items-center justify-center rounded-full transition-transform duration-1000 ease-in-out delay-300  ${props.closeClassname}`}
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
          <div className={`mt-10 w-full transition-transform duration-1000 ease-in-out delay-300 ${props.menuClassname}`}>
            <h1 className="font-poppins text-base dark:text-[#A3A3A3] text-[#6B7280] pb-3 mb-5 border-b-2 dark:border-[#A3A3A3] border-[#6B7280]">
              NAVIGATION
            </h1>
            <ul className=" flex flex-col w-full items-start text-4xl gap-5 dark:text-[#EAEAEA] text-[#F0F0F0]">
              <li
                to={"/"}
                className="font-poppins cursor-pointer relative w-full hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-3 [&.active]:after:w-3 after:h-0 after:w-0 hover:after:h-3 [&.active]:after:h-3 hover:after:dark:bg-[#EAEAEA] [&.active]:after:dark:bg-[#EAEAEA] [&.active]:after:bg-[#333333] hover:after:bg-[#333333] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-[35%] [&.active]:after:top-[35%] hover:after:right-[5%] [&.active]:after:right-[5%] hover:after:z-10 [&.active]:after:z-10"
              >
                Home
              </li>
              <li
                to={"/about"}
                className="font-poppins cursor-pointer relative w-full hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-3 [&.active]:after:w-3 after:h-0 after:w-0 hover:after:h-3 [&.active]:after:h-3 hover:after:dark:bg-[#EAEAEA] [&.active]:after:dark:bg-[#EAEAEA] [&.active]:after:bg-[#333333] hover:after:bg-[#333333] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-[35%] [&.active]:after:top-[35%] hover:after:right-[5%] [&.active]:after:right-[5%] hover:after:z-10 [&.active]:after:z-10"
              >
                About
              </li>
              <li className="font-poppins cursor-pointer relative w-full hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-3 [&.active]:after:w-3 after:h-0 after:w-0 hover:after:h-3 [&.active]:after:h-3 hover:after:dark:bg-[#EAEAEA] [&.active]:after:dark:bg-[#EAEAEA] [&.active]:after:bg-[#333333] hover:after:bg-[#333333] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-[35%] [&.active]:after:top-[35%] hover:after:right-[5%] [&.active]:after:right-[5%] hover:after:z-10 [&.active]:after:z-10">
                Projects
              </li>
              <li className="font-poppins cursor-pointer relative w-full hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-3 [&.active]:after:w-3 after:h-0 after:w-0 hover:after:h-3 [&.active]:after:h-3 hover:after:dark:bg-[#EAEAEA] [&.active]:after:dark:bg-[#EAEAEA] [&.active]:after:bg-[#333333] hover:after:bg-[#333333] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-[35%] [&.active]:after:top-[35%] hover:after:right-[5%] [&.active]:after:right-[5%] hover:after:z-10 [&.active]:after:z-10">
                Contact
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className={`w-full pb-4 transition-transform duration-1000 ease-in-out delay-[400ms] ${props.socialClassname}`}>
            <h1 className="font-poppins text-base dark:text-[#A3A3A3] text-[#6B7280] pb-3 mb-5 border-b-2 dark:border-[#A3A3A3] border-[#6B7280]">
              SOCIALS
            </h1>
            <ul className="flex items-center justify-start gap-5">
              <li>
                <img
                  src={githubDark}
                  alt="github"
                  className="hidden dark:block h-9 cursor-pointer"
                />
                <img
                  src={githubLight}
                  alt="github"
                  className="block dark:hidden h-9 cursor-pointer"
                />
              </li>
              <li>
                <img
                  src={linkedinDark}
                  alt="linkedin"
                  className="hidden dark:block h-9 cursor-pointer"
                />
                <img
                  src={linkedinLight}
                  alt="linkedin"
                  className="block dark:hidden h-9 cursor-pointer"
                />
              </li>
              <li>
                <img
                  src={instaDark}
                  alt="instagram"
                  className="hidden dark:block h-9 cursor-pointer"
                />
                <img
                  src={instaLight}
                  alt="instagram"
                  className="block dark:hidden h-9 cursor-pointer"
                />
              </li>
              <li>
                <img
                  src={facebookDark}
                  alt="facebook"
                  className="hidden dark:block h-9 cursor-pointer"
                />
                <img
                  src={facebookLight}
                  alt="facebook"
                  className="block dark:hidden h-9 cursor-pointer"
                />
              </li>
              <li>
                <img
                  src={youtubeDark}
                  alt="youtube"
                  className="hidden dark:block h-9 cursor-pointer"
                />
                <img
                  src={youtubeLight}
                  alt="youtube"
                  className="block dark:hidden h-9 cursor-pointer"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
