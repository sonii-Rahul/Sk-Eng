import React from 'react'
import Navbar from './Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Content from './Content' 
import Footer from './Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  )
}

export default App
