import React from 'react';
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'


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