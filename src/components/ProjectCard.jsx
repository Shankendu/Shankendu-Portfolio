/* eslint-disable react/prop-types */
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = ({
  title,
  description,
  thumbnail,
  techStack,
  githubLink,
  liveLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isViewMoreHovered, setIsViewMoreHovered] = useState(false);
  return (
    <>
      <div
        className={`
        relative w-full max-w-sm mx-auto bg-[#eaeaea] text-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg 
        border border-[#a3a3a3] transition-all duration-500 transform 
        ${
          isHovered
            ? "scale-105 bg-gradient-to-br from-[#eaeaea] to-indigo-50 shadow-2xl"
            : "scale-100 bg-white"
        }
        group
        hover:border-blue-100
      `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail with Overlay */}
        <div className="relative h-56 overflow-hidden">
          <div
            className={`
            absolute inset-0 
            bg-black/20 
            z-10 
            transition-opacity duration-500
            ${isHovered ? "opacity-40" : "opacity-20"}
          `}
          ></div>
          <img
            src={thumbnail}
            alt={title}
            className={`
            w-full h-full object-cover 
            transition-transform duration-500
            ${isHovered ? "scale-110" : "scale-100"}
          `}
          />

          {/* Project Links Overlay */}
          <div
            className={`
            absolute inset-0 z-20 
            bg-black bg-opacity-0 
            group-hover:bg-opacity-40 
            flex items-center justify-center
            transition-all duration-300
          `}
          >
            <div
              className={`
              flex space-x-4 md:opacity-0 
              md:group-hover:opacity-100 
              transition-opacity duration-300
            `}
            >
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                p-3 bg-white rounded-full 
                transition-all duration-300
                hover:bg-blue-50 hover:scale-110
               shadow-lg shadow-black/50
              `}
              >
                <Github
                  className={`
                  text-gray-700 
                  transition-colors duration-300
                  ${isHovered ? "text-[#5B84FF]" : "text-gray-700"}
                `}
                />
              </a>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                p-3 bg-white rounded-full 
                transition-all duration-300
                hover:bg-blue-50 hover:scale-110 shadow-lg shadow-black/50
              `}
              >
                <ExternalLink
                  className={`
                  text-gray-700 
                  transition-colors duration-300
                  ${isHovered ? "text-[#5B84FF]" : "text-gray-700"}
                `}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 space-y-4">
          <div>
            <h3
              className={`
              text-2xl font-bold mb-2 
              transition-all duration-500
              ${isHovered ? "text-[#5B84FF] translate-x-1" : "text-gray-800"}
            `}
            >
              {title}
            </h3>
            <p
              className={`
              text-sm 
              transition-colors duration-500
              ${isHovered ? "text-gray-700" : "text-gray-600"}
              line-clamp-2
            `}
            >
              {description}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className={`
                px-3 py-1 
                text-xs 
                rounded-full
                transition-all duration-500
                ${
                  isHovered
                    ? "bg-blue-100 text-[#5B84FF]"
                    : "bg-gray-100 text-gray-700"
                }
              `}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View More Button */}
          <div
            className="mt-4"
            onMouseEnter={() => setIsViewMoreHovered(true)}
            onMouseLeave={() => setIsViewMoreHovered(false)}
          >
            <NavLink
            to={"/projects/" + title}
              className={`
              flex items-center justify-center px-4 py-2 rounded-full text-sm transition-all duration-500
              ${isHovered ? "bg-blue-500 text-white translate-x-1": "bg-gray-100 text-gray-800"}
              ${isViewMoreHovered && isHovered ? "bg-blue-600 translate-x-2" : ""}
            `}>
              View More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
