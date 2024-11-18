import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Booktable.css';

function Booktable() {
    const [isBooking, setIsBooking] = useState(false);

    useEffect(()=> {
        Aos.init({
            duration: 1000,
        })
    }, [])


  return (
    <div >
      <div className="book-table">
        {
            isBooking && (
                <div className="overlay-book">
                    <div className="book-card">
                        <span>
                            <h2 data-aos="fade-up">Book Your Table</h2>
                            <form >
                                <input data-aos="fade-down" type="text" name='fullname' placeholder='Enter Your Full Name' />
                                <input data-aos="fade-left" type="phone" name='tel' placeholder='Enter Your Phone Number' />
                                <input data-aos="fade-right" type="email" name='email' placeholder='Enter Your Email Address' />
                                <input data-aos="fade-left" type="date" name='' placeholder='Choose a Date' />
                                <textarea data-aos="fade-right" name="text" id="" placeholder='Enter Your Message'></textarea>
                                <div className="btn">
                                <button data-aos="fade-up-right" type='submit'>SUBMIT</button>
                                <button data-aos="fade-down-left" onClick={()=> setIsBooking(false)}>CANCEL</button>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
            )}

            <div className="view-button">
                <button onClick={() => setIsBooking(true)}>BOOK A TABLE</button>
            </div>
      </div>
    </div>
  )
}

export default Booktable
