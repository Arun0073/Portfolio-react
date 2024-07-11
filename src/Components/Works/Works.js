import React,{useContext} from 'react'
import  './Works.css';
import upwork from '../../img/Upwork.png'
import amazon from '../../img/amazon.png'
import fiverr from '../../img/fiverr.png'
import shopify from '../../img/Shopify.png'
import facebook from '../../img/Facebook.png'
import { themeContext } from "../../Context";
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const Works = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className='works'>
       <div className="awesome">
<span style={{ color: darkmode ? "white" : "" }}>Works for All these</span>
<span>Brands & Clients</span>
<spane>
Take a look at some of the companies client which i have worked with 
<br />
to create amazing websites and applications.
<br />
Let's create something awesome for your business too.
<br />
hire me to make your website look awesome.
</spane>
<Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
<div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
      </div>
      <div className="w-right">
        <motion.div
         initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
      
         className="mainCircle">
            <div className="secCircle">
                <img src={upwork} alt="" />
            </div>
            <div className="secCircle">
                <img src={fiverr} alt="" />
            </div>
            <div className="secCircle">
                <img src={amazon} alt="" />
            </div>
            <div className="secCircle">
                <img src={shopify} alt="" />
            </div>
            <div className="secCircle">
                <img src={facebook} alt="" />
            </div>
        </motion.div>
        <div className="backCircle blueCircle"></div>
        <div className="backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
