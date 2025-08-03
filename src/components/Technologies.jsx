import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGithub,
  FaJava,
  FaCogs,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiCplusplus,
  SiFlask,
  SiNumpy,
  SiPandas,
} from 'react-icons/si';

const techStack = [
  <FaReact className="text-cyan-400" />,
  <SiNextdotjs className="text-white" />,
  <FaNodeJs className="text-green-500" />,
  <SiExpress className="text-white" />,
  <SiMongodb className="text-green-400" />,
  <SiPostgresql className="text-blue-400" />,
  <SiJavascript className="text-yellow-400" />,
  <FaPython className="text-blue-300" />,
  <FaJava className="text-orange-500" />,
  <SiTailwindcss className="text-cyan-300" />,
  <FaHtml5 className="text-orange-600" />,
  <FaCss3Alt className="text-blue-600" />,
  <FaGithub className="text-gray-300" />,
  <SiCplusplus className="text-blue-400" />,
  <SiPandas className="text-white" />,
  <SiNumpy className="text-purple-300" />,
  <SiFlask className="text-white" />,
  <FaCogs className="text-gray-300" />,
];

const Technologies = () => {
  return (
    <section id="technologies"  className="bg-neutral-950 text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Technologies</h2>
      <div className="overflow-hidden relative">
        <div className="scrolling-tech inline-flex gap-12 px-8">
          {[...techStack, ...techStack].map((Icon, index) => (
            <span
              key={index}
              className="text-4xl hover:scale-110 transition-transform duration-300"
            >
              {Icon}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
