import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { HiMiniXMark } from "react-icons/hi2";
import { CgMenu } from "react-icons/cg";
import './Navigation.css';

function Navigation() {
    const [isMobile, setIsMobile] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    // const NavLink= ({isActive})=> ({
    //     borderBottom: isActive ? '1px solid red' : ''
    // })

    useEffect(() => {
        const handleScroll = ()=> {
            if(window.scrollY > 600) {
                setScrolling(true);
            } else {
                setScrolling(false);
            };
        };
        window.addEventListener('scroll', handleScroll);
        return ()=> {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [])
  return (
    <div className={`navbar ${scrolling ? 'scrolled' : '' }`}>

        <Link to={'home'} style={{color: scrolling ? '#fff' : 'white'}} smooth={true} offset={-70} duration={500} spy={true} onClick={ ()=> setIsMobile(false)}>FoodFun</Link>
        <div className={`nav-link ${isMobile ? 'mobile active' : ''}`} onClick={ ()=> setIsMobile(false)}>
            
            <li>
                <Link to='about' style={ {color: scrolling ? '#fff' : 'white'}} smooth={true} offset={-70} duration={500} spy={true} onClick={()=> setIsMobile(false)}>About</Link>
            </li>

            <li>
                <Link to='blog' style={{color: scrolling ? '#fff' : 'white'}} smooth={true} offset={-70} duration={500} spy={true} onClick={()=> setIsMobile(false)}>Blogs</Link>
            </li>

            <li>
                <Link to='menu' style={{color: scrolling ? '#fff' : 'white'}} smooth={true} offset={-70} duration={500} spy={true} onClick={()=> setIsMobile(false)}>Menu</Link>
            </li>

            <li>
                <Link to='contact' style={{color: scrolling ? '#fff' : 'white'}} smooth={true} offset={-70} duration={500} spy={true} onClick={()=> setIsMobile(false)}>Contact</Link>
            </li>
            
            <li>
                <Link to=''></Link>
            </li>

        </div>
        <div className="toggle-menu" onClick={()=> setIsMobile(!isMobile)}>{isMobile ? <HiMiniXMark /> : <CgMenu />}</div>
    </div>
  )
}

export default Navigation;
