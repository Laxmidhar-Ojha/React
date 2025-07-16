import React from "react";

export default function Portfolio() {
  return (
    <div className="text-white w-screen font-sans bg-[#0b0f2a]">
      {/* Navbar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-8 py-6 border-b border-gray-800 bg-[#0b0f2a] shadow-md z-50">
        <h1 className="text-3xl font-extrabold">LAXMIDHAR OJHA</h1>
        <nav className="space-x-10 text-xl font-semibold">
          <a href="#about" className="hover:text-blue-400">About Me</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
          <a href="#contact" className="bg-blue-500 px-6 py-2 rounded-xl hover:bg-blue-600 shadow-md transition">Let's Talk</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex w-full flex-col items-center justify-center text-center min-h-screen px-4 pt-40">
        <h2 className="text-7xl font-extrabold mb-6">Hey! I'm Laxmidhar</h2>
        <h3 className="text-4xl text-blue-400 mb-6">Aspiring Full-Stack Developer</h3>
        <p className="max-w-2xl text-gray-300 text-2xl leading-relaxed">
          Passionate about building scalable, user-focused applications using React.js, Node.js, and MongoDB.
        </p>
        <div className="flex space-x-8 mt-10 text-3xl">
          <a href="https://github.com" className="text-blue-400 hover:text-white">GitHub</a>
          <a href="https://linkedin.com" className="text-blue-400 hover:text-white">LinkedIn</a>
          <a href="mailto:laxmidharojha@gmail.com" className="text-blue-400 hover:text-white">Email</a>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 my-16 rounded-full"></div>

      {/* About Section */}
      <section id="about" className="w-full px-8 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl font-extrabold mb-12 text-blue-400">About Me</h2>
          <p className="text-gray-200 leading-relaxed text-3xl">
            Proficient in React.js, Node.js, and MongoDB. Skilled in DSA, OS, CN, and software engineering.
            Experienced in building responsive web apps with Tailwind CSS, GitHub, Vercel, and Postman.
          </p>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 my-16 rounded-full"></div>

      {/* Projects Section */}
      <section id="projects" className="w-full px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-extrabold mb-16 text-center text-blue-400">Recent Projects</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gray-900 rounded-2xl p-10 shadow-2xl hover:scale-105 transition-transform duration-300">
              <img src="https://source.unsplash.com/400x250/?travel" alt="TravelNest" className="rounded-xl mb-6" />
              <h3 className="text-3xl font-bold mb-4">TravelNest</h3>
              <p className="text-gray-400 text-xl mb-6">Vacation rental app with full-stack features.</p>
              <a href="https://travelnest-tpsb.onrender.com/listings" className="text-blue-400 hover:text-white text-2xl">Live Demo</a>
            </div>
            <div className="bg-gray-900 rounded-2xl p-10 shadow-2xl hover:scale-105 transition-transform duration-300">
              <img src="https://source.unsplash.com/400x250/?ecommerce" alt="Smile-Cart" className="rounded-xl mb-6" />
              <h3 className="text-3xl font-bold mb-4">Smile-Cart</h3>
              <p className="text-gray-400 text-xl mb-6">Responsive e-commerce app built with React.js and Tailwind CSS.</p>
              <a href="https://smile-cart-sigma.vercel.app/products" className="text-blue-400 hover:text-white text-2xl">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 my-16 rounded-full"></div>

      {/* Services Section */}
      <section id="services" className="w-full px-8 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-extrabold mb-16 text-blue-400">Design Services</h2>
          <div className="grid md:grid-cols-3 gap-14">
            <div className="bg-gray-900 rounded-2xl p-10 shadow-xl hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">UI/UX Design</h3>
              <p className="text-gray-300 text-xl">Designing intuitive and visually appealing interfaces for web apps.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-10 shadow-xl hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Frontend Development</h3>
              <p className="text-gray-300 text-xl">Creating responsive, fast, and user-friendly apps with React.js and Tailwind CSS.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-10 shadow-xl hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Backend Development</h3>
              <p className="text-gray-300 text-xl">Building robust backends with Node.js, Express, and MongoDB.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 my-16 rounded-full"></div>

      {/* Contact Section */}
      <section id="contact" className="w-full px-8 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl font-extrabold mb-12 text-blue-400">Get In Touch</h2>
          <p className="text-gray-200 mb-10 text-3xl">Reach out via any of the platforms below:</p>
          <p className="text-gray-400 text-2xl mb-2">Phone: +91 7606866257</p>
          <p className="text-gray-400 text-2xl mb-8">Email: laxmidharojha@gmail.com</p>
          <div className="flex justify-center space-x-10 text-3xl">
            <a href="https://github.com" className="text-blue-400 hover:text-white">GitHub</a>
            <a href="https://linkedin.com" className="text-blue-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="text-center py-12 text-gray-500 text-xl bg-[#0b0f2a]">
        © 2025 Laxmidhar Ojha. All Rights Reserved.
      </footer>
    </div>
  );
}
