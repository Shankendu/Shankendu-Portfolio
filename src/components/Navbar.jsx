/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const Navbar = (props) => {
  return (
    <>
      <nav id={`${props.id}`} className="w-full dark:text-[#EAEAEA] text-[#333333] flex flex-row items-center justify-between px-5 sm:px-10 pt-10">
        {/* copyright logo */}
        <NavLink to={"/"}>
          <div className="group/main flex items-center justify-center cursor-pointer overflow-visible">
            <div className="group-hover/main:rotate-[360deg] font-poppins transition-all duration-[1000ms] delay-75 text-lg pr-[5px]">
              &copy;
            </div>
            <div className="w-[220px] h-[25px] flex relative overflow-hidden">
              <p className="absolute left-[0px] top-0 group-hover/main:-left-[250px] transition-all duration-[800ms] ease-in-out delay-75 font-poppins font-medium dark:text-[#EAEAEA] text-[#333333]">
                Code by Shankendu
              </p>
              <p className="absolute -right-[150px] group-hover/main:right-[82px] transition-all duration-[1000ms] ease-in-out delay-75 font-poppins font-medium dark:text-[#EAEAEA] text-[#333333]">
                Shankendu Kunti
              </p>
            </div>
          </div>
        </NavLink>

        {/* Menu-Links */}
        <div>
          <ul className=" hidden sm:flex flex-row items-center justify-center gap-10 dark:text-[#EAEAEA] text-[#333333]">
            {/* <NavLink to={"/"} className="font-poppins cursor-pointer relative  hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-2 [&.active]:after:w-2 after:h-0 after:w-0 hover:after:h-2 [&.active]:after:h-2 hover:after:dark:bg-[#EAEAEA] [&.active]:after:dark:bg-[#EAEAEA] [&.active]:after:bg-[#333333] hover:after:bg-[#333333] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-8 [&.active]:after:top-8 hover:after:left-[50%] [&.active]:after:left-[50%] hover:after:z-10 [&.active]:after:z-10">
              Home
            </NavLink> */}
            <NavLink to={"/about"} className="font-poppins cursor-pointer relative  hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-2 [&.active]:after:w-2 after:h-0 after:w-0 hover:after:h-2 [&.active]:after:h-2 hover:after:dark:bg-[#EAEAEA] [&.active]:after:dark:bg-[#EAEAEA] [&.active]:after:bg-[#333333] hover:after:bg-[#333333] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-8 [&.active]:after:top-8 hover:after:left-[50%] [&.active]:after:left-[50%] hover:after:z-10 [&.active]:after:z-10">
              About
            </NavLink>
            <li className="font-poppins cursor-pointer relative  hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-2 [&.active]:after:w-2 after:h-0 after:w-0 hover:after:h-2 [&.active]:after:h-2 hover:after:dark:bg-[#EAEAEA] [&.active]:after:dark:bg-[#EAEAEA] [&.active]:after:bg-[#333333] hover:after:bg-[#333333] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-8 [&.active]:after:top-8 hover:after:left-[50%] [&.active]:after:left-[50%] hover:after:z-10 [&.active]:after:z-10">
              Projects
            </li>
            <li className="font-poppins cursor-pointer relative  hover:after:transition-all hover:after:duration-200 hover:after:delay-75 hover:after:ease-in hover:after:content-['_'] [&.active]:after:content-['_'] hover:after:w-2 [&.active]:after:w-2 after:h-0 after:w-0 hover:after:h-2 [&.active]:after:h-2 hover:after:dark:bg-[#EAEAEA] [&.active]:after:dark:bg-[#EAEAEA] [&.active]:after:bg-[#333333] hover:after:bg-[#333333] hover:after:rounded-full [&.active]:after:rounded-full hover:after:absolute [&.active]:after:absolute hover:after:top-8 [&.active]:after:top-8 hover:after:left-[50%] [&.active]:after:left-[50%] hover:after:z-10 [&.active]:after:z-10">
              {" "}
              Contact
            </li>
          </ul>
          <ul onClick={props.onClick} className=" sm:hidden flex flex-row items-end justify-end dark:text-[#EAEAEA] text-[#333333]">
                <li className="cursor-pointer flex items-center justify-end gap-2 text-lg ">
                    <div className="w-2 h-2 dark:bg-[#EAEAEA] bg-[#333333] rounded-full"></div>
                    <h1>Menu</h1>
                </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
