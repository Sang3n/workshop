import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className="flex flex-col space-y-10 justify-center m-10">
      <div className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <Link to="/" className="hover:text-gray-900">Home</Link>
        <Link to="/about" className="hover:text-gray-900">About</Link>
        <Link to="/services" className="hover:text-gray-900">Services</Link>
        {/* <Link to="/media" className="hover:text-gray-900">Media</Link> */}
        {/* <Link to="/gallery" className="hover:text-gray-900">Gallery</Link> */}
        <Link to="/contact" className="hover:text-gray-900">Contact</Link>
      </div>

      <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
      </div>
      <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reserved.</p>
      {props.children}
    </div>
  )
}

export default Footer