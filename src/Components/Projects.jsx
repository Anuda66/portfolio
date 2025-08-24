import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div id="projects">
      <div className="mt-12 sm:mt-20">
        <h1 className="text-2xl sm:text-4xl text-blue-500 font-bold text-center">
          Projects 📂
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center px-4 sm:px-48 mt-8 sm:mt-12">
          {projects.map((item) => {
            const isActive = activeProject === item.id;

            return (
              <motion.div
                key={item.id}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                onClick={() =>
                  setActiveProject(isActive ? null : item.id) // Toggle active state on click
                }
              >
                <div className="flex flex-col items-center bg-slate-900 pb-6 sm:pb-8 min-h-[350px] sm:min-h-[450px] rounded-2xl shadow-lg">
                  <div className="rounded-2xl w-full px-4 pt-4">
                    <img
                      src={item.img}
                      className="rounded-xl h-[150px] sm:h-[200px] w-full object-cover"
                      alt={item.name}
                    />
                  </div>
                  <h1 className="text-xl sm:text-2xl text-slate-300 font-bold mt-4 sm:mt-8 text-center px-4">
                    {item.name}
                  </h1>
                  <p className="text-xs sm:text-base text-slate-400 font-light text-justify px-4 sm:px-5 mt-2 sm:mt-4 border-b border-blue-300 pb-2 sm:pb-4">
                    {item.description}
                  </p>
                  <div className="mt-4 sm:mt-7 flex flex-wrap justify-center gap-2 sm:gap-x-4 px-4">
                    {item.skill.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-slate-900 border border-slate-600 text-xs sm:text-sm font-light px-2 py-1 sm:px-2 sm:py-2 rounded-xl drop-shadow-xl"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
               
                <div
                  className={`absolute inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center rounded-2xl transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <button className="flex gap-x-2 sm:gap-x-4 bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-700">
                    <a
                      className="text-sm sm:text-base"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                    <FaGithub className="text-lg sm:text-2xl" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
