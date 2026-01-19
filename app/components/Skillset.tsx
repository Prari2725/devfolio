import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaJava,
    FaDatabase,
    FaDocker,
    FaGitAlt,
    FaRing,
  } from "react-icons/fa";
  import { SiNextdotjs, SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";
  
  interface SkillCategory {
    id: number;
    title: string;
    skills: {
      name: string;
      icon: React.ReactNode;
    }[];
  }
  
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      id: 2,
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <FaRing /> },
        { name: "REST APIs", icon: <FaDatabase /> },
      ],
    },
    {
      id: 3,
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      id: 4,
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git", icon: <FaGitAlt /> },
      ],
    },
  ];
  
  export default function Skillset(): React.JSX.Element {
    return (
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
            Skillset
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 
                backdrop-blur-sm rounded-xl p-6 border-t-4 border-purple-700 
                hover:shadow-2xl hover:shadow-purple-900 transition-all"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  {category.title}
                </h3>
  
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg 
                      bg-black/30 border border-purple-900/40
                      hover:border-purple-500 transition"
                    >
                      <span className="text-2xl text-purple-400">
                        {skill.icon}
                      </span>
                      <span className="text-white text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  