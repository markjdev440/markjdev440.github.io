import { memo } from "react";
import Link from 'next/link';

/**
 * About Component
 * Displays personal profile information with a photo, bio, skill tags, experience history,
 * and a button to open a contact form popup.
 *
 * @component
 * @returns {JSX.Element} About section UI
 */
function About() {

  const tags = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "AI & Machine Learning",
    "Mobile App Development",
    "Desktop App Development",
  ];

  const experiences = [
    ["Software Engineer", "Classmates", "2012"],
    ["Web Developer", "Starbucks", "2013"],
    ["Senior Web Developer", "Umpqua Bank", "2014"],
    ["Senior Web Developer", "Microsoft", "2016"],
    ["Senior Web Developer", "AT&T", "2018"],
    ["Senior Frontend Engineer", "Nurocor, Inc", "2022"],
    ["Senior Full Stack Engineer", "Jet City Web Development", "2023"],
  ];

  return (
    <section
      id="about"
      className="bg-black text-white px-4 py-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section - Profile Card */}
        <article
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg w-full lg:w-1/2"
          aria-label="Profile Information"
        >
          <div className="relative w-full overflow-hidden rounded-xl">
            <img
              src="/images/photo.jpg"
              alt="Portrait of Mark Johnson"
              className="rounded-xl w-full object-cover"
              loading="lazy"
              decoding="async"
              style={{
                filter: "grayscale(100%)"
              }}
            />
            <span
              className="absolute bottom-2 left-2 bg-black/70 px-3 py-1 text-xs rounded-full text-green-400"
              role="status"
              aria-live="polite"
            >
              ● Available for work
            </span>
          </div>
          <h2 id="about-heading" className="mt-6 text-2xl font-semibold">
            Hello, I am <span className="text-gray-300">Mark Johnson</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Senior Software Engineer Based in WA, USA.
          </p>

          {/* Connect Button */}
          <button
            className="mt-6 bg-gradient-to-r from-neutral-800 to-black px-6 py-3 border border-gray-700 rounded-full font-medium hover:opacity-90 transition"
          >
            <a
              className="d-flex"
              href="mailto:cj105026@gmail.com"
            >
              Connect with me
            </a>
          </button>
        </article>

        {/* Right Section - Bio, Skills, Experience */}
        <article
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg w-full lg:w-1/2"
          aria-label="About Arjun Mehra"
        >
          <p className="mb-4 text-gray-300">
            I'm Mark Johnson, a dedicated Web & Mobile Developer based in the
            San Jose of California, US. I specialize in software development
            with seamless technical execution to craft exceptional digital
            experiences.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6" role="list">
            {tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="bg-black/50 border border-white/10 text-white text-sm px-3 py-1 rounded-full backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Experience Table */}
          <div className="space-y-3 text-sm" role="table" aria-label="Work experience">
            {experiences.map(([role, company, year]) => (
              <div
                key={`${role}-${company}-${year}`}
                role="row"
                className="flex justify-between bg-black/50 border border-white/10 px-4 py-3 rounded-xl text-gray-300 backdrop-blur-md"
              >
                <span role="cell">{role}</span>
                <span role="cell">{company}</span>
                <span role="cell">{year}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default memo(About);
