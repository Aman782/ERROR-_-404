import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import './index.css'
import Imsec_imgs from './Imsec_imgs.jsx'
import Footer from './Footer.jsx'
import Contact_Us from './Contact_Us.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Imsec_imgs/>
    <Contact_Us/>
    <Footer/>
  </React.StrictMode>
)
