import React from 'react';

const certificates = [
  {
    title: 'MERN Internship',
    type: 'Internship',
    issuer: 'Scaler Technologies',
    link: 'https://www.linkedin.com/in/prajwal-bhomale-30811828b',
  },
  {
    title: 'Deloitte Virtual Internship',
    type: 'Internship',
    issuer: 'Forage',
    link: 'https://www.linkedin.com/in/prajwal-bhomale-30811828b',
  },
  {
    title: 'The Complete Python Pro Bootcamp',
    type: 'Course',
    issuer: 'Udemy',
    link: 'https://www.linkedin.com/in/prajwal-bhomale-30811828b',
  },
  {
    title: 'Java Programming',
    type: 'Course',
    issuer: 'Tirupati Engineering',
    link: 'https://www.linkedin.com/in/prajwal-bhomale-30811828b',
  },
  {
    title: 'The Complete 2024 Web Development Bootcamp',
    type: 'Course',
    issuer: 'Udemy',
    link: 'https://www.linkedin.com/in/prajwal-bhomale-30811828b',
  },
];


const About = () => {
  return (
    <section id="about" className="bg-neutral-950 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10">
I'm Prajwal Bhomale, a passionate full-stack developer and AI/ML enthusiast currently pursuing a degree in Artificial Intelligence and Data Science. With a solid foundation in the MERN stack and a growing expertise in machine learning, I thrive on building innovative solutions that address real-world challenges.

My portfolio spans impactful projects in Smart City,Payment, and EdTech, where I blend technology and purpose. I actively participate in hackathons, contribute to open-source communities, and enjoy sharing knowledge to empower others in tech.        </p>

        {/* Certificates Section */}
        <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[220px] bg-neutral-900 gap-3 flex flex-col hover:bg-neutral-800 transition rounded-xl shadow-lg p-4 border border-neutral-700"
            >
              <h4 className="text-lg font-medium">{cert.title}</h4>
              <p className="text-sm text-gray-400">{cert.type}</p>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <p className="text-sm text-blue-400 hover:underline hover:text-blue-300 transition duration-200">
                View on LinkedIn
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
