import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiDjango } from "react-icons/si";

const iconSize = 50;

const techStack = [
  { id: 1, icon: <FaHtml5 size={iconSize} color="#E34F26" />, name: "HTML" },
  { id: 2, icon: <FaCss3Alt size={iconSize} color="#1572B6" />, name: "CSS" },
  { id: 3, icon: <FaJs size={iconSize} color="#F7DF1E" />, name: "JavaScript" },
  { id: 4, icon: <BiLogoTypescript size={iconSize} color="#3178C6" />, name: "TypeScript" },
  { id: 5, icon: <FaReact size={iconSize} color="#61DAFB" />, name: "React" },
  { id: 6, icon: <FaGitAlt size={iconSize} color="#F05032" />, name: "Git" },
  { id: 7, icon: <FaGithub size={iconSize} color="#181717" />, name: "GitHub" },
  { id: 8, icon: <FaPython size={iconSize} color="#3776AB" />, name: "Python" },
  { id: 9, icon: <SiDjango size={iconSize} color="#092E20" />, name: "Django" },
];

const Skills = () => {
  return (
    <section id="skills" classNameName='py-4 md:px-8'>
      <div className="text-white rounded-3xl px-0 pt-2 sm:pt-6 md:px-2 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">My Skill</h2>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
          {techStack.map((item) => (
            <li
              key={item.id}
              className="w-20 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-black/40 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div>{item.icon}</div>
              <span className="mt-2 text-sm text-white text-center">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
