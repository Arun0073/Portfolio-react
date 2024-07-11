import React, { useState,useContext } from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
import bars from '../../img/bars copy.png'
import { themeContext } from "../../Context";

const Navbar = () => {
  const mobile=window.innerWidth<=480?true:false
  const[menuOpened,setMenuOpened]=useState(false)
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
      <div className="wrapper">
        <div className="daaya">
            <div className="name">Arunoday</div>
            <Toggle/>
        </div>
{(menuOpened===false && mobile===true)?(
  <div style={{backgroundColor:'var(--orange)', padding:'0.5rem',borderRadius:'5px',height:'1.5rem',margin:'.8rem 0.2rem'}}
  onClick={()=>setMenuOpened(true)}>
  <img src={bars} alt="" style={{width:'1.5rem',height:'1.5rem'}} /></div>
):
                <ul className='people' style={{ color: darkmode ? "white" : "",}}>
                <Link onClick={()=>setMenuOpened(false)} spy={true} to='Navbar' smooth={true} activeClass='activeClass'><li>Home</li></Link>
                <Link onClick={()=>setMenuOpened(false)}  spy={true} to='Skills' smooth={true}><li>Services</li></Link>
                <Link onClick={()=>setMenuOpened(false)}  spy={true} to='Anubhav' smooth={true}><li>Experience</li></Link>
                <Link onClick={()=>setMenuOpened(false)}  spy={true} to='Portfolio' smooth={true}><li>Portfolio</li></Link>
                <Link onClick={()=>setMenuOpened(false)}  spy={true} to='Testimonials' smooth={true}><li>Testimonials</li></Link>  
              </ul>
        }
      </div>
  )
}

export default Navbar
