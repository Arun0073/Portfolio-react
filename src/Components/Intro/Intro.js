import React,{useContext} from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png' 
import Instagram from '../../img/instagram.png' 
import Vector1 from '../../img/Vector1.png' 
import Vector2 from '../../img/Vector2.png' 
import boy from '../../img/boy.png' 
import thumsup from '../../img/thumbup.png' 
import crown from '../../img/crown.png' 
import glassesimoji from '../../img/glassesimoji.png' 
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../Context";
import {motion} from "framer-motion"
const Intro = () => {

  const transition={duration:'2sec',type:'spring'}
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className='intro'>
      <div className="daaya2">
        <div className="i-name">
            <span style={{ color: darkmode ? "white" : "" }}>Hy! I am </span>
            <span>Arunoday Singh</span>
            <span>Full stack Developer with high level of experience in web designing and development, Producting the Quality Work</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="icons">
           <a href="https://github.com/Arun0073"><img src={Github} alt="" /></a>
           <a href="https://www.linkedin.com/in/arunoday-singh-66219222b/"><img src={Linkedin} alt=" "/></a>
           <a href="https://www.instagram.com/Arun_s_0072"><img src={Instagram} alt="" /></a>
        </div>
      </div>
      <div className="baaya2">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        
         src={glassesimoji} alt="" />
        <motion.div
        initial={{top:'-4%', left:'74%'}}
        whileInView={{left:'68%'}}
        transition={transition}
        className='floating-div'
        
         style={{top:"-4%" , left:"68%"}}>
            <FloatingDiv  image={crown} txt1='Web' txt2='Developer'/>
          </motion.div>
          <motion.div
          
          initial={{top:'18rem', left:'9rem'}}
          whileInView={{left:'0rem'}}
          transition={transition}
          className='floating-div'
           style={{top:"18rem" , left:"0rem"}}>
            <FloatingDiv image={thumsup} txt1='Best Design' txt2='Award'/>
          </motion.div>
          
          <div className='blur' style={{background:'rgb(238 210 255)'}}></div>
          <div className='blur' style={{background:'#C1F5FF',top:'17rem', width:'21rem', left:'-9rem', height:'11rem'}}></div>
          <button className="button n-button">Contact</button>
      </div>
    </div>
  )
}

export default Intro
