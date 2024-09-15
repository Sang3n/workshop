import React from 'react'
import {Link } from 'react-router-dom'
import Footer from './Component/Footer'


const Layout = ({children}) => {
  return (
    <div >
        <div>
            <nav className="bg-white shadow-lg" >
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/Home" className="text-xl font-bold text-gray-800">
                    SSR IT
                </Link>
                <ul className="flex space-x-6 text-gray-600">
                    <li><Link to ="/" className="hover:text-blue-500">Home</Link></li>
                    <li><Link to ="/product" className="hover:text-blue-500" >Product</Link></li>
                    <li><Link to ="/about" className="hover:text-blue-500">About</Link></li>
                    <li><Link to ="/services" className="hover:text-blue-500">Services</Link></li>
                    <li><Link to ="/Contact" className="hover:text-blue-500">Contact</Link></li>
                  
                </ul>
                </div>
            </nav>

        </div>
        {children}
        <Footer/>


    </div>
   
  )
 
}

export default Layout