import img1 from "../assets/p1.png";
import img2 from "../assets/p2.png";
import img3 from "../assets/p3.png";
import img4 from "../assets/p4.png";
import img5 from "../assets/p5.png";
import img6 from "../assets/p6.png";

const projects = [
    {
        id: 1,
        name: "The Donut Shop",
        description: "A responsive donut shop website built with React and Framer Motion.",
        img: img1,  // Store path as string
        skill: ["React", "Framer Motion", "Tailwind CSS"],
        link: "https://github.com/nisithferdinando/The-Donut-Shop",
    },
    {
        id: 2,
        name: "Railway Ticket Booking",
        description: "Web-based application for booking train tickets.",
        img: img2,
        skill: ["React", "Express Js", "MongoDB", "Stripe"],
        link: "https://github.com/nisithferdinando/Sri-Lanka-Railway-Ticket-Booking-System",
    },
    {
        id: 3,
        name: "Stage Shows Booking",
        description: "A full-stack web app for booking stage show tickets.",
        img: img3,
        skill: ["React", "Express Js", "MongoDB", "Stripe"],
        link: "https://github.com/nisithferdinando/Stage-Shows-Booking",
    },
    {
        id: 4,
        name: "CrustKicks - Pizza App",
        description: "User-friendly mobile app prototype designed using Figma.",
        img: img4,
        skill: ["Figma"],
        link: "https://www.figma.com/proto/HQylx5GBbNwVfBXYXDwERv/CrustKicks",
    },
    {
        id: 5,
        name: "BMI Calculator",
        description: "BMI calculator using C# .NET and MySQL.",
        img: img5,
        skill: ["C#", ".NET", "MySQL"],
        link: "https://github.com/nisithferdinando/BMI-Calculator",
    },
    {
        id: 6,
        name: "Note Manager",
        description: "A web app for managing notes with CRUD features.",
        img: img6,
        skill: ["React", "JWT", "Express Js", "MongoDB"],
        link: "https://github.com/nisithferdinando/Notes-manager",
    },
];

export default projects;
