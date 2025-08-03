import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">&copy; 2025 Prajwal Bhomale. All rights reserved.</p>

        <div className="flex gap-4 text-gray-400 text-sm">
          <a
            href="https://github.com/bhomaleprajwal19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/prajwal-bhomale-30811828b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
