import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Anubhav from "./Components/Anubhav/Anubhav";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import { useContext } from "react";

function App() {
  const theme=useContext(themeContext);
  const darkmode=theme.state.darkmode;
  return (
    <div className="App"
    style={
      {
        background : darkmode?'black':'',
        color:darkmode?'white':'',
      }}>
    <Navbar/>
    <Intro/>
    <Skills/>
    <Anubhav/>
    <Works/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
