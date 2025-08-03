import React from 'react';
import './Starfall.css'; // ← Make sure this CSS file exists for the falling stars

function Hero() {
  return (
    <div id="Hero"  className="relative isolate px-6  lg:px-8 text-white overflow-hidden">
      {/* Starfall Animation */}
      <div className="starfall">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="falling-star"></div>
        ))}
      </div>

      {/* Background Blur Top */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] w-[36rem] sm:left-[calc(50%-30rem)] sm:w-[72rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-indigo-500 opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 text-center fade-in-up-smooth ">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r   from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Hi, I’m <span className="text-white">Prajwal</span>
          <br />
          Transforming Ideas into Interactive Web Solutions
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          I focus on clean code, modern design, and scalable architecture to
          craft web apps that don’t just work—they shine.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#projects"
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition duration-300"
          >
            View Portfolio
          </a>
          <a
            href="#about"
            className="text-sm font-semibold text-gray-200 hover:text-white transition"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Background Blur Bottom */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] w-[36rem] sm:left-[calc(50%+36rem)] sm:w-[72rem] aspect-[1155/678] -translate-x-1/2 bg-gradient-to-tr from-pink-500 to-indigo-500 opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
