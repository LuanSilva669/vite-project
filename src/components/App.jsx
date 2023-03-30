import React from 'react';
import './App.css'
import Banner from './Banner'
import Navbar from './Navbar'
import Footer from './Footer'
import Main from './Main'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Main />
      <Footer />
    </div>

  )
}

export default App