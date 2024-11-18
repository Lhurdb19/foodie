import React, { useEffect, useState } from 'react';
import { IoIosArrowDropup } from "react-icons/io";
import './Scrolltotop.css';

function Scrolltotop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = ()=> {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false)
        };
    };

    const Scrolltotop = ()=> {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <div>
      {
        isVisible && (
        <div className="scroll-to-top" onClick={Scrolltotop}>
            <IoIosArrowDropup  className='scroll-icon'/>
        </div>
        )
      }
    </div>
  )
}

export default Scrolltotop
