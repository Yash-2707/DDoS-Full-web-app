import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-gray-900 to-black min-h-screen text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2">
          <img src="CYBER-LOGO.png" alt="Whiz Cyber Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">100x<span className="text-blue-500">Dev</span></h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About Us</a>
          <a href="#" className="hover:text-blue-500">Services</a>
          <a href="#" className="hover:text-blue-500">Pages</a>
          <a href="#" className="hover:text-blue-500">Blog</a>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg hover:opacity-80">Contact Us</button>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-12 md:py-24 lg:py-32">
        {/* Left Side - Text */}
        <div className="flex-1 text-center lg:text-left ml-7 pl-7">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Protect Yourself Online with Our Cyber Solutions
          </h2>
          <p className="mt-4 text-gray-300 max-w-lg">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse ruam nihil molestiae.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <button className="bg-blue-500 px-6 py-3 rounded-full text-white shadow-lg hover:opacity-80">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-black">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side  */}
        <div className="flex-1 flex justify-center mb-10 lg:mb-0">
          <img src="cyber-main.jpg" alt="Cyber Security Robot" className="w-96 h-auto" />
        </div>
      </header>

      {/* Cyber Security Solutions Section */}
      <section className="text-white font-sans p-8">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold">Cyber Security Solutions</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {/* Security Cards */}
          <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg border border-blue-500">
            <div className="flex justify-center mb-4">
              <img src="card1.jpg" alt="Computer Security" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Computer Security</h3>
            <p className="text-center text-gray-300 mb-4">Quis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.</p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full shadow-lg hover:opacity-80">Read More</button>
            </div>
          </div>
          {/* FOLDER SECURITY  */}
          <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg border border-blue-500">
            <div className="flex justify-center mb-4">
              <img src="card2.jpg" alt="Folder Security" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Folder Security</h3>
            <p className="text-center text-gray-300 mb-4">Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.</p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full shadow-lg hover:opacity-80">Read More</button>
            </div>
          </div>

          {/* FINGER SECURITY  */}
          <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg border border-blue-500">
            <div className="flex justify-center mb-4">
              <img src="card3.jpg" alt="Finger Security" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Finger Security</h3>
            <p className="text-center text-gray-300 mb-4">Guis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.</p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full shadow-lg hover:opacity-80">Read More</button>
            </div>
          </div>

          {/* LOCKER SECURITY  */}
          <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg border border-blue-500">
            <div className="flex justify-center mb-4">
              <img src="card4.jpg" alt="Locker Security" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Locker Security</h3>
            <p className="text-center text-gray-300 mb-4">Quis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.</p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full shadow-lg hover:opacity-80">Read More</button>
            </div>
          </div>

        </div>

        {/* Cyber Security Operation Center Section */}
        <div className="flex flex-col md:flex-row items-center justify-center py-16 px-8 md:px-16 lg:px-32">
          <div className="flex justify-center mb-10 md:mb-0">
            <img src="operation.jpg" alt="Operation Center" className="w-96 h-auto" />
          </div>
          {/* Content */}
          <div className="text-center md:text-left ml-10 pl-10">
            <h2 className="text-3xl font-bold mb-4">24/7 Cyber Security Operation Center</h2>
            <p className="text-gray-300 mb-6">Duis aute irure dolor in reprehenderit in voluptate esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-transparent border-2 border-blue-500 px-6 py-3 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white">Malware Detection Removal</button>
              <button className="bg-transparent border-2 border-blue-500 px-6 py-3 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white">Cloud Security</button>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Expert Team Who are Behind The Security</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {/* Team Members*/}
          <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">KRISH SONI</h3>
            <p className="text-blue-500">TEAM-LEADER</p>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum natus totam quidem officiis laudantium odio. Quam ad et ipsam nulla quasi? Accusamus, veritatis optio?</p>
            <div className="flex justify-center space-x-4 mt-4 p-4 gap-8">
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-github fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
          </div>
          <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">DISHANT MIYANI</h3>
            <p className="text-blue-500">FULLSTACK DEVELOPER & BLOCKCHAIN ENTHUSIAST</p>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum natus totam quidem officiis laudantium odio. Quam ad et ipsam nulla quasi? Accusamus, veritatis optio?</p>
            <div className="flex justify-center space-x-4 mt-4 p-4 gap-8">
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-github fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
          </div>
          <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">MAYUR PANDYA</h3>
            <p className="text-blue-500">CYBER-EXPERT</p>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum natus totam quidem officiis laudantium odio. Quam ad et ipsam nulla quasi? Accusamus, veritatis optio?</p>
            <div className="flex justify-center space-x-4 mt-4 p-4 gap-8">
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-github fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
          </div>
          <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">PIYUSH BAGDI</h3>
            <p className="text-blue-500">DEVELOPER</p>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum natus totam quidem officiis laudantium odio. Quam ad et ipsam nulla quasi? Accusamus, veritatis optio?</p>
            <div className="flex justify-center space-x-4 mt-4 p-4 gap-8">
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-github fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
          </div>
          <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">HARSHITA SAGARIYA</h3>
            <p className="text-blue-500">DEVELOPER</p>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum natus totam quidem officiis laudantium odio. Quam ad et ipsam nulla quasi? Accusamus, veritatis optio?</p>
            <div className="flex justify-center space-x-4 mt-4 p-4 gap-8">
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-github fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
          </div>
          <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">YASH RATHOD</h3>
            <p className="text-blue-500">DEVELOPER</p>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum natus totam quidem officiis laudantium odio. Quam ad et ipsam nulla quasi? Accusamus, veritatis optio?</p>
            <div className="flex justify-center space-x-4 mt-4 p-4 gap-8">
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-github fa-2x"></i></a>
              <a href="#" className="text-blue-400 hover:text-white"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
          </div>
          {/* Other team members are similar... */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-16 px-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
    {/* Logo and Description Section */}
    <div className="flex flex-col items-start justify-center ">
      <div className="flex items-center mb-4">
        <img src="CYBER-LOGO.png" alt="Whiz Cyber Logo" className="w-12 h-12" />
        <h1 className="text-2xl font-bold ml-3">100x<span className="text-blue-500">DEV</span></h1>
      </div>
      <p className="text-gray-400 mb-4">
        Delentiti aeue corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f fa-2"></i></a>
        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
      </div>
    </div>

    {/* About Us Links */}
    <div className="flex flex-col items-start justify-center">
      <h2 className="text-lg font-semibold mb-4">About Us</h2>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Our Teams</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="flex flex-col items-start justify-center">
      <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
      <p className="text-gray-400">21 King Street, Melbourne, 3000, Australia</p>
      <p className="text-gray-400 mt-2">Phone: <a href="tel:+8801911129908" className="text-gray-400 hover:text-white">+91123456789</a></p>
      <p className="text-gray-400 mt-2">Email: <a href="mailto:shovon985@gmail.com" className="text-gray-400 hover:text-white">100xdev@gmail.com</a></p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default HomePage;
