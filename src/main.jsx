
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Component/Home.jsx'
import Service from './Component/Service.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import{ BrowserRouter,Route,Routes} from "react-router-dom"
import DyanmicPage from './Component/DyanmicPage.jsx'
import Product from './Component/Product.jsx'
import Layout from './layout.jsx'
import Footer from './Component/Footer.jsx'

import "./index.css"
import ProductPage from './Component/Productpage.jsx'
import ProductDetail from './Component/ProductDetail.jsx'




createRoot(document.getElementById('root')).render(
  
<BrowserRouter>
<Layout >
  <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/product" element={<ProductPage />} />
    <Route path="/product/:id" element={<ProductDetail/>}/>
    <Route path="/dynamic/id" element={<DyanmicPage />} />
    <Route path="/services" element={<Service/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/> 
    <Route path ="/footer" element={<Footer/>}/>
  {/* <Route path="/" element={<App />} /> */}
  </Routes>
</Layout>





</BrowserRouter>

)
