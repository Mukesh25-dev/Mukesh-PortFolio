import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { name: "HTML5", icon: faHtml5, color: "#e44d26", level: 95 },
  { name: "CSS3", icon: faCss3Alt, color: "#264de4", level: 90 },
  { name: "JavaScript", icon: faJs, color: "#f7df1e", level: 85 },
  { name: "React", icon: faReact, color: "#61dafb", level: 80 },
  { name: "Node.js", icon: faNodeJs, color: "#68a063", level: 75 },
  { name: "MongoDB", icon: faDatabase, color: "#4DB33D", level: 70 },
  { name: "Git", icon: faGitAlt, color: "#f34f29", level: 85 },
];

const Skills = () => {
  return (
    <section
      id="Skill"
      className="py-20 px-6 bg-gradient-to-br from-green-100 via-white to-green-100 text-green-900"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-lg text-gray-600">Circular representation of my tech skills</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-4 w-24">
            <div style={{ width: 80, height: 80 }}>
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  pathColor: skill.color,
                  textColor: "#333",
                  trailColor: "#e0e0e0",
                  textSize: "18px",
                })}
              />
            </div>
            <FontAwesomeIcon icon={skill.icon} className="text-2xl" style={{ color: skill.color }} />
            <span className="text-sm text-center font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
