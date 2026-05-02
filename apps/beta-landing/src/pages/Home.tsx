import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import SectionA from "./components/SectionA";
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="App">
        <Header/>
        <Intro/>
        <SectionA/>
        <SectionB/>
        <SectionC/>
        <Footer/>
    </div>
  );
}

export default Home;
