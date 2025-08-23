
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { CgFigma } from "react-icons/cg";
import { SiStorybook } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { SiPostman } from "react-icons/si";

const Tool=[
    {
        id:1,
        name:"Git",
        icon: FaGitAlt, 
      },

    {
        id:2,
        name:"Github",
        icon:IoLogoGithub,
      },
    {
        id:3,
        name:"Figma",
        icon: CgFigma,
      },

    {
        id:4,
        name:"Storybook",
        icon:SiStorybook,
      },

    {
        id:5,
        name:"Vs Code",
        icon:VscVscode,
    },

    {
        id:6,
        name:"Visual Studio",
        icon:DiVisualstudio,
      },

    { 
        id:7,
        name:"Postman",
        icon:SiPostman,
      }
];

export default Tool;