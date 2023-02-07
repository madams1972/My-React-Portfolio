import React from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Playlist from "./components/Playlist"
import Footer from "./components/Footer"


function App() {
  return (
   <>
    <Header />      
    <Home />
      <About />
      <Contact />
      <Playlist />
    <Footer />
   </>
  );
}

export default App;
