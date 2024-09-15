import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    

    
    <div className="min-h-screen bg-pink-600 bg-gray-100">
     
     

      {/* Hero Section */}
      <div>
      <header className="bg-cover bg-center h-96" style={{backgroundImage:'url("https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?w=826&t=st=1726115239~exp=1726115839~hmac=c904b6dcbf8b1b9cb3574eae6589677331bf201251dd26c2d4d43515c8f7298b")'}}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl font-bold text-wrap mb-4">Welcome </h1>
            <p className="text-lg mb-6">We provide the best solutions for your business</p>
            <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
              Get Started
            </a>
          </div>
        </div>
        
      </header>
      </div>
     

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Creating Dynamic webiste</h3>
              <p className="text-gray-600">Look no further!we specialize in creating dynamic websites that drive business results. Our team of expert developers uses cutting-edge technologies, including React, Tailwind CSS, and Node.js, to craft dynamic websites that meet the unique needs of our clients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">IT Solutions</h3>
              <p className="text-gray-600">In today's fast-paced digital landscape, having the right IT solutions in place is crucial for businesses to stay competitive, efficient, and secure. We offer a wide range of IT solutions designed to help businesses like yours thrive.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Marketing Strategy</h3>
              <p className="text-gray-600">To effectively market your IT solutions offering dynamic website creation services using React and Tailwind CSS, it's essential to develop a comprehensive strategy that showcases your expertise and highlights the benefits of your services .</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;