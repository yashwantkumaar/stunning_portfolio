import html from "../assets/langues/HTML.png";
import reactLangue from "../assets/langues/react.png";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import js from "../assets/langues/js.png";
import c from "../assets/langues/c.png";
import py from "../assets/langues/py.png";
import java from "../assets/langues/java.png";
import Sql from "../assets/langues/Sql.webp";
import FaceRecognition from "../assets/langues/FaceRecognition.webp";
import Com from "../assets/langues/Com.jpg";
import resi from "../assets/langues/resi.jpg";
import Smart from "../assets/langues/Smart.webp";


// Array of work objects
export const works = [
  {
    title: "E-commerce App",
    imgUrl:
      Com,
    tech: ["React, MYsql,Nodejs"],
    workUrl:
      "https://dpenterpriseswebs.netlify.app/",
    duration: "400",
  },

  {
    title: "Face -Recognition",
    imgUrl:
    Smart,
    tech: ["Python"],
    workUrl:
      "https://github.com/yashwantkumaar/smart_attendence",
    duration: "500",
  },
   // Adjust the path as needed

  {
    title: "DeepFake Detection",
    imgUrl: FaceRecognition, // Use the imported local image
    tech: ["Python & Co.."],
    workUrl: "https://github.com/yashwantkumaar/smart_attendence",
    duration: "600",
  },
  
  {
    title: "Restaurant Website Static",
    imgUrl:
      resi,
    tech: ["Html, Css, Js"],
    workUrl:
      "https://simplerestaurent.netlify.app/",
    duration: "700",
  },
];

// Array of experience objects
export const experiences = [
  {
    date: "2024",
    company: "Self employed",
    position: "Freelancer",
    description:
      "I specialize in designing user interfaces for websites and mobile applications. I also create logos, posters, and mockups. My designs are visually appealing, intuitive, and tailored to engage target audiences. With a deep understanding of design principles and industry trends, I consistently deliver high-quality work that captivates users.",
  },
];


// Array of langue objects
export const langues = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactLangue,
    title: "React",
    style: "shadow-sky-500",
  },
  {
    id: 5,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 6,
    src: Sql,
    title: "MySQL",
    style: "shadow-orange-500",
  },

  {
    id: 7,
    src: py,
    title: "Python",
    style: "shadow-yellow-400",
  },

  {
    id: 8,
    src: c,
    title: "C",
    style: "shadow-blue-400",
  },
  {
    id: 9,
    src: java,
    title: "Java",
    style: "shadow-orange-500",
  },
  
];
