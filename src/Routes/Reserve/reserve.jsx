import React, { useState } from 'react';
import './Reserve.css';

function Reserve() {
  const [reservation, setReservation] = useState(false);
  // const navigate = useNavigate();

  return (
    <div id="reservate">
      <div className="reserve">
        {reservation && (
          <div className="overlay">
            <div className="card">
              <span>
                <h3>RESERVE A TABLE</h3>
                <form>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Enter Your Full Name"
                  />
                  <input
                    type="mail"
                    name="email"
                    placeholder="Enter Your Email Address"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Your Phone Number"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Your Address"
                  />
                  <div className="btn">
                    <button type="">Submit</button>
                    <button onClick={() => setReservation(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              </span>
            </div>
          </div>
        )}
        <div className="view-btn">
          <button onClick={() => setReservation(true)}>RESERVATION</button>
        </div>
      </div>
    </div>
  )
}

export default Reserve
