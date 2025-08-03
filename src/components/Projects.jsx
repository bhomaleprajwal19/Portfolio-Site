import React from 'react';

const projects = [
  {
    title: 'TestAura',
    description:
      'A quiz/interview platform where users can take MCQ tests, view stats, and admins can create/manage quizzes with full auth system.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Vite'],
    hosted_link: "https://testaura-client.vercel.app/",
    link: 'https://github.com/bhomaleprajwal19/testaura.git',

  },
  {
    title: 'Smart City',
    description:
      'A full-stack app where users can report city issues using live location, with admin dashboard, real-time updates, and map integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Mapbox'],
    link: 'https://github.com/bhomaleprajwal19/smartcity.git',
  },

  {
    title: 'Thank Bank',
    description:
      'A donation-based website inspired by Patreon, allowing users to support creators with payments and messages.',
    tech: ['React', 'Node.js', 'Stripe API'],
    link: 'https://github.com/bhomaleprajwal19/thankbank.git',
  },
  {
    title: 'PassKeep',
    description:
      'A responsive password manager app to securely store and manage user credentials, built using React and local storage.',
    tech: ['React', 'CSS', 'LocalStorage'],
    link: 'https://github.com/bhomaleprajwal19/Passkeep.git',
    hosted_link: "https://passkeep-three.vercel.app/",

  }
  ,
 {
  title: 'Uber',
  description:
    'A clone of the Uber app where users can book rides, track real-time driver locations, authenticate securely, and view ride history with maps integration.',
  tech: ['Next.js', 'Node.js', 'MongoDB', 'JWT', 'Mapbox','Google Map'],
  link: 'https://github.com/bhomaleprajwal19/UBER.git', // update if the GitHub link is different
},{
  title: 'To-Do List',
  description:
    'A minimal and user-friendly to-do list app to add, delete, and manage daily tasks with persistent storage in the browser.',
  tech: ['React', 'CSS', 'LocalStorage'],
  link: 'https://github.com/bhomaleprajwal19/to-do-list.git',
},{
  title: 'Spotify Clone',
  description:
    'A frontend-only clone of Spotify built with HTML, JavaScript, and Tailwind CSS. It features a responsive layout, custom UI, and basic audio playback.',
  tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  link: 'https://github.com/bhomaleprajwal19/spotify-clone.git',
  hosted_link:"https://bhomaleprajwal19.github.io/spotify-clone/"
} ,{
    title: 'Stone Paper Scissors',
    description: 'A browser game with sound effects, score tracking, and random computer choices.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/bhomaleprajwal19/rock-paper-scissors.git',
    hosted_link:"https://bhomaleprajwal19.github.io/rock-paper-scissors/"
  },
  {
    title: 'Currency Converter',
    description: 'Real-time currency converter using a public exchange rate API with user-friendly UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    link: 'https://github.com/bhomaleprajwal19/Currency-Converter.git',
    hosted_link:"https://bhomaleprajwal19.github.io/Currency-Converter/"
  },
  {
    title: 'Tic Tac Toe',
    description: 'A classic two-player game with reset feature, win-check logic, and animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/bhomaleprajwal19/tic-tac-toe.git',
    hosted_link:"https://bhomaleprajwal19.github.io/tic-tac-toe/"
  },


];

const Projects = () => {
  return (
    <section id="project" className="bg-neutral-950 text-white py-16 px-4 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-neutral-900 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 fade-in-up-smooth`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-neutral-800 text-gray-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.hosted_link && (
                <a
                  href={project.hosted_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  Hosted site →
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm ml-4"
              >
                View on GitHub →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
