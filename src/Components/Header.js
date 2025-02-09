
import { Link } from "react-router-dom";
import "../css/Navbar.css";  // Import the CSS file


import React, { useState, useEffect, useRef } from "react";

import Navbar from '../Components/Navbar.js'
import "react-datepicker/dist/react-datepicker.css";


  
const Header = ({ imgSrc, h1 }) => {


  const [isOpen, setIsOpen] = useState(false);
  const [isNewPopupOpen, setNewPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Flights");
  const [activeForm, setActiveForm] = useState(null);
  const [fromValue, setFromValue] = useState("");
  const [dropoffValue, setDropoffValue] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);



  const [flights, setFlights] = useState([]);








  const handleNavbarClick = (tab) => {
    setActiveTab(tab);
    setTripType("one-way"); // Reset trip type when switching tabs
  };

 
  const [tripType, setTripType] = useState("one-way");
  
  const [preferredAirline, setPreferredAirline] = useState("");

  

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const dropdownRef = useRef(null);

  const increaseAdults = () => setAdults(adults + 1);
  const decreaseAdults = () => adults > 1 && setAdults(adults - 1);

  const increaseChildren = () => setChildren(children + 1);
  const decreaseChildren = () => children > 0 && setChildren(children - 1);

  // Hide the controls when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowControls(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  // Handle input changes for "From"
  const handleFromChange = (e) => {
    const value = e.target.value;
    setFromValue(value);
    if (value) {
      const filtered = locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setFromSuggestions(filtered);
    } else {
      setFromSuggestions([]);
    }
  };













  // Handle input changes for "Dropoff"
  const handleDropoffChange = (e) => {
    const value = e.target.value;
    setDropoffValue(value);
    if (value) {
      const filtered = locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setDropoffSuggestions(filtered);
    } else {
      setDropoffSuggestions([]);
    }
  };

  // Select a suggestion for "From"
  const selectFromSuggestion = (suggestion) => {
    setFromValue(suggestion);
    setFromSuggestions([]);
  };

  // Select a suggestion for "Dropoff"
  const selectDropoffSuggestion = (suggestion) => {
    setDropoffValue(suggestion);
    setDropoffSuggestions([]);
  };














  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "San Francisco",
    "Boston",
    "Las Vegas",
    "Seattle",
    "Miami",
    "Atlanta",
  ];

  const togglePopup = () => setIsOpen(!isOpen);
  const toggleNewPopup = () => setNewPopupOpen(!isNewPopupOpen);
  const handleButtonClick = (formType) => setActiveForm(formType);
  const closeForm = () => setActiveForm(null);

  const handleInputChange = (value, setValue, setSuggestions) => {
    setValue(value);
    if (value) {
      const filtered = locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (suggestion, setValue, setSuggestions) => {
    setValue(suggestion);
    setSuggestions([]);
  };




  const addFlight = () => {
    setFlights([...flights, { from: "", to: "", date: "" }]);
  };

  const updateFlight = (index, field, value) => {
    const newFlights = [...flights];
    newFlights[index][field] = value;
    setFlights(newFlights);
  };

  const removeFlight = (index) => {
    const newFlights = flights.filter((_, i) => i !== index);
    setFlights(newFlights);
  };














  return (
   <>



<div className="app" >
  {/* Navbar */}

  {/* Hero Section */}
  <main className="hero"style={{ backgroundImage: `url(${imgSrc})`,backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        width: "100%", 
        height: "150vh" }}>
  <div className="top-buttons">
        <button className="top-btn" onClick={() => handleButtonClick("chauffeur")}>
          Chauffeur
        </button>
        <button className="top-btn" onClick={() => handleButtonClick("flight")}>
          Flight
        </button>
        <button className="top-btn" onClick={() => handleButtonClick("hotel")}>
          Hotel
        </button>
        </div>

        {activeForm && (
  <div className="form-container">
    <div className="form-content">
      {/* Picture Section */}
      
      <div className="image-section">
        <img
          src={`/imgs/seats.png`} // Assuming each form has a related image
         
          className="form-image"
        />
      </div>

      {/* Form Section */}
      <div className="form-section">
        {/* Close Icon */}
        <div className="close-icon" onClick={closeForm}>
          ✖
        </div>

        <h2>Comming Soon</h2>
        <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn" > Join us as we expand our services to include Business and First Class tickets across 300+ airlines, as well as bookings for luxury hotels.

Stay tuned and get ready to redefine your travel experience with Bookinglane!{activeForm}</p>
        <input type="email" placeholder="Enter your email" className="form-input" />
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  </div>
)}




 










    


<h1>{h1}</h1>

<div className="container" style={{ marginBottom: "80px" }}>
      {/* Navbar */}
      <div className="navbarr">
        {["Flights", "Hotels", "Cars", "Cruises", "Tours"].map((tabs) => (
          <button
            key={tabs}
            className={`nav-items ${activeTab === tabs ? "active" : ""}`}
            onClick={() => handleNavbarClick(tabs)}
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: "16px",
            }}
          >
            {tabs}
          </button>
        ))}
      </div>
      <hr style={{ marginBottom: "10px" }} />

      {/* Flight Type Tabs (Only for Flights) */}
      {activeTab === "Flights" && (
        <div className="tabs" style={{ background: "rgba(255, 255, 255, 0.8)" }}>
          {["one-way", "round-trip", "multi-city"].map((type) => (
            <button
              key={type}
              className={`tab ${tripType === type ? "active" : ""}`}
              onClick={() => setTripType(type)}
              style={{ borderRadius: "25px" }}
            >
              {type.replace("-", " ")}
            </button>
          ))}
        </div>
      )}

      {/* Dynamic Fields */}
      <div className="search-box">
        {activeTab === "Flights" && (
          <>
            {/* One-Way & Round-Trip (Side by Side Fields) */}
            {(tripType === "one-way" ) && (
              <div className="flight-fields">













                <div className="input-box">
                
                  <input type="text" placeholder="Enter departure city" style={{width:'200px'}} 
                 value={fromValue}
                 onChange={handleFromChange} />




{fromSuggestions.length > 0 && (
        <ul className="suggestions" style={{width:'220px'}}>
          {fromSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion"
              onClick={() => selectFromSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}











                </div>
                <div className="input-box">
                 
                  <input type="text" placeholder="Enter destination" style={{width:'200px'}}  value={dropoffValue}
                   onChange={handleDropoffChange}
                />
                    
{dropoffSuggestions.length > 0 && (
        <ul className="suggestions" style={{width:'220px'}}>
          {dropoffSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion"
              onClick={() => selectDropoffSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}


                </div>
                <div className="input-box">
                 
                  <input type="date" style={{width:'200px'}} />
                </div>


               

                <div className="passenger-container" ref={dropdownRef}>
      {/* Input Field - Click to show buttons */}
      <input
        type="text" style={{width:'200px'}}
        className="passenger-input"
        value={`${adults} Adult${adults > 1 ? "s" : ""} - ${children} Child${children > 1 ? "ren" : ""}`}
        readOnly
        onClick={() => setShowControls(!showControls)}
      />

      {/* Controls - Show when input is clicked */}
      {showControls && (
        <div className="passenger-box">
          <div className="passenger-group">
            <span>Adults</span>
            <button className="circle-btn" onClick={decreaseAdults}>−</button>
            <span className="count">{adults}</span>
            <button className="circle-btn" onClick={increaseAdults}>+</button>
          </div>

          <div className="passenger-group">
            <span>Children</span>
            <button className="circle-btn" onClick={decreaseChildren}>−</button>
            <span className="count">{children}</span>
            <button className="circle-btn" onClick={increaseChildren}>+</button>
          </div>
        </div>
      )}
    </div> 
    <button className="top-btn" style={{width:'200px',marginRight:'60px',borderRadius:'25px',color:'black',backgroundColor:'orange'}}>Submit</button>
      
    

 {/* Submit Button */}
      
              </div>
            )}

            {/* Round-Trip: Show "Returning" & Preferred Airline */}
            {tripType === "round-trip" && (
              <div className="flight-fields">
                


                <div className="input-box">
                 
                  <input type="text" placeholder="Enter departure city" style={{width:'200px'}} value={fromValue}
                   onChange={handleFromChange} />




{fromSuggestions.length > 0 && (
        <ul className="suggestions" style={{width:'220px'}}>
          {fromSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion"
              onClick={() => selectFromSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}











                </div>
                <div className="input-box">
                
                  <input type="text" placeholder="Enter destination" style={{width:'200px'}} value={dropoffValue}
                    onChange={handleDropoffChange}/>
                    
{dropoffSuggestions.length > 0 && (
        <ul className="suggestions" style={{width:'220px'}}>
          {dropoffSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion"
              onClick={() => selectDropoffSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}


                </div>
                <div className="input-box">
                 
                  <input type="date" style={{width:'200px'}}/>
                </div>


                

                <div className="passenger-container" ref={dropdownRef}>
      {/* Input Field - Click to show buttons */}
      <input
        type="text" style={{width:'200px'}}
        className="passenger-input"
        value={`${adults} Adult${adults > 1 ? "s" : ""} - ${children} Child${children > 1 ? "ren" : ""}`}
        readOnly
        onClick={() => setShowControls(!showControls)}
      />

      {/* Controls - Show when input is clicked */}
      {showControls && (
        <div className="passenger-box">
          <div className="passenger-group">
            <span>Adults</span>
            <button className="circle-btn" onClick={decreaseAdults}>−</button>
            <span className="count">{adults}</span>
            <button className="circle-btn" onClick={increaseAdults}>+</button>
          </div>

          <div className="passenger-group">
            <span>Children</span>
            <button className="circle-btn" onClick={decreaseChildren}>−</button>
            <span className="count">{children}</span>
            <button className="circle-btn" onClick={increaseChildren}>+</button>
          </div>
        </div>
      )}
    </div>  

    
                
                  <input style={{width:'200px',marginRight:'343px'}}
                    type="text"
                    placeholder="Enter airline"
                    value={preferredAirline}
                    onChange={(e) => setPreferredAirline(e.target.value)}
                  />
                
 {/* Submit Button */}
 <button className="top-btn" style={{width:'200px',marginRight:'340px',borderRadius:'25px',color:'black',backgroundColor:'orange'}}>Submit</button>
      
    

    </div>
      
              
            )}


 {/* Multi-City: Allow Adding More Flights */}
 {tripType === "multi-city" && (
              <div className="multi-city-section">
                <div className="flight-fields">
                  <div className="input-box">
                 
                  <input type="text" placeholder="Enter departure city" style={{width:'200px'}} value={fromValue}
                   onChange={handleFromChange} />
                  

{fromSuggestions.length > 0 && (
        <ul className="suggestions" style={{width:'220px'}}>
          {fromSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion"
              onClick={() => selectFromSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}











                </div>


                <div className="input-box">
                 
                 <input type="text" placeholder="Enter destination" style={{width:'200px'}} value={dropoffValue}
                   onChange={handleDropoffChange}/>
                   
{dropoffSuggestions.length > 0 && (
       <ul className="suggestions" style={{width:'220px'}}>
         {dropoffSuggestions.map((suggestion, index) => (
           <li
             key={index}
             className="suggestion"
             onClick={() => selectDropoffSuggestion(suggestion)}
           >
             {suggestion}
           </li>
         ))}
       </ul>
     )}


               </div>
               <div className="input-box">
                
                 <input type="date" style={{width:'200px'}}/>
               </div>









                </div>
                <button className="add-flight-btn" style={{marginBottom:'20px',background:' rgb(41, 145, 235)',color:'white'}} onClick={addFlight}>
        Add Flight 
      </button>
                <div className="flight-fields">
                 

                <div className="passenger-container" ref={dropdownRef}>
      {/* Input Field - Click to show buttons */}
      <input
        type="text" style={{width:'200px'}}
        className="passenger-input"
        value={`${adults} Adult${adults > 1 ? "s" : ""} - ${children} Child${children > 1 ? "ren" : ""}`}
        readOnly
        onClick={() => setShowControls(!showControls)}
      />

      {/* Controls - Show when input is clicked */}
      {showControls && (
        <div className="passenger-box">
          <div className="passenger-group">
            <span>Adults</span>
            <button className="circle-btn" onClick={decreaseAdults}>−</button>
            <span className="count">{adults}</span>
            <button className="circle-btn" onClick={increaseAdults}>+</button>
          </div>

          <div className="passenger-group">
            <span>Children</span>
            <button className="circle-btn" onClick={decreaseChildren}>−</button>
            <span className="count">{children}</span>
            <button className="circle-btn" onClick={increaseChildren}>+</button>
          </div>
        </div>
      )}
    </div> 
                </div>
                
                <button className="top-btn" style={{width:'200px',marginRight:'60px',borderRadius:'25px',color:'black',backgroundColor:'orange'}}>Submit</button>
      
    

               
 {/* Submit Button */}
       
      {/* Dynamically Added Flight Fields */}
      {flights.map((flight, index) => (
        <div key={index} className="flight-field" style={{marginBottom:'10px'}}>
          <input
            type="text"
            placeholder="Flying From"
            value={flight.from}
            onChange={(e) => updateFlight(index, "from", e.target.value)}
          />
          <input
            type="text"
            placeholder="Flying To"
            value={flight.to}
            onChange={(e) => updateFlight(index, "to", e.target.value)}
          />
          <input
            type="date"
            value={flight.date}
            onChange={(e) => updateFlight(index, "date", e.target.value)}
          />
          <button className="remove-flight-btn" onClick={() => removeFlight(index)}>
            ❌
          </button>
        </div>
      ))}
    





              </div>
            )}
             

            {/* Passenger & Coach Selection */}
            <div className="flight-fields">
              
              
            </div>

             </>
        )}
           
    {/* Hotels Fields */}
        {activeTab === "Hotels" && (
          <>
           


           <div className="input-box">
                
                <input type="text" placeholder="Enter departure city" style={{width:'200px',marginTop:'10px'}} value={fromValue}
                 onChange={handleFromChange} />




{fromSuggestions.length > 0 && (
      <ul className="suggestions" style={{width:'220px'}}>
        {fromSuggestions.map((suggestion, index) => (
          <li
            key={index}
            className="suggestion"
            onClick={() => selectFromSuggestion(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )}











              </div>
              <div className="input-box">
               
                <input type="text" placeholder="Enter destination" style={{width:'200px',marginTop:'10px'}} value={dropoffValue}
                  onChange={handleDropoffChange}/>
                  
{dropoffSuggestions.length > 0 && (
      <ul className="suggestions" style={{width:'220px'}}>
        {dropoffSuggestions.map((suggestion, index) => (
          <li
            key={index}
            className="suggestion"
            onClick={() => selectDropoffSuggestion(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )}


              </div>
              <div className="input-box">
               
                <input type="date" style={{width:'200px',marginTop:'10px'}}/>
              </div>


             

              <div className="passenger-container" ref={dropdownRef}>
    {/* Input Field - Click to show buttons */}
    <input
      type="text" style={{width:'200px',marginTop:'20px'}}
      className="passenger-input"
      value={`${adults} Adult${adults > 1 ? "s" : ""} - ${children} Child${children > 1 ? "ren" : ""}`}
      readOnly
      onClick={() => setShowControls(!showControls)}
    />

    {/* Controls - Show when input is clicked */}
    {showControls && (
      <div className="passenger-box">
        <div className="passenger-group">
          <span>Adults</span>
          <button className="circle-btn" onClick={decreaseAdults}>−</button>
          <span className="count">{adults}</span>
          <button className="circle-btn" onClick={increaseAdults}>+</button>
        </div>

        <div className="passenger-group">
          <span>Children</span>
          <button className="circle-btn" onClick={decreaseChildren}>−</button>
          <span className="count">{children}</span>
          <button className="circle-btn" onClick={increaseChildren}>+</button>
        </div>
      </div>
    )}
  </div> 


  <button className="top-btn" style={{width:'200px',marginRight:'60px',borderRadius:'25px',color:'black',backgroundColor:'orange',marginTop:'10px'}}>Submit</button>
         

          </>
        )}

        {/* Cars Fields */}
        {activeTab === "Cars" && (
          <>
            
           <div className="input-box">
                
                <input type="text" placeholder="Picking up" style={{width:'200px',marginTop:'10px'}} value={fromValue}
                 onChange={handleFromChange} />




{fromSuggestions.length > 0 && (
      <ul className="suggestions" style={{width:'220px'}}>
        {fromSuggestions.map((suggestion, index) => (
          <li
            key={index}
            className="suggestion"
            onClick={() => selectFromSuggestion(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )}











              </div>
              
              <div className="input-box">
               
                


              <input type="text" placeholder="Drop-Off" style={{width:'200px',marginTop:'10px'}} value={dropoffValue}
                  onChange={handleDropoffChange}/>
                  
{dropoffSuggestions.length > 0 && (
      <ul className="suggestions" style={{width:'220px'}}>
        {dropoffSuggestions.map((suggestion, index) => (
          <li
            key={index}
            className="suggestion"
            onClick={() => selectDropoffSuggestion(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )}

</div>
              
             
              <div className="input-box">
               
                <input type="date" style={{width:'200px',marginTop:'10px'}}/>
              </div>

              <button className="top-btn" style={{width:'200px',marginRight:'60px',borderRadius:'25px',color:'black',backgroundColor:'orange',marginTop:'10px'}}>Submit</button>

          </>
        )}

        {/* Cruises Fields */}
        {activeTab === "Cruises" && (
          <>
            
           <div className="input-box">
                
                <input type="text" placeholder="Enter departure city" style={{width:'200px',marginTop:'10px'}} value={fromValue}
                 onChange={handleFromChange} />




{fromSuggestions.length > 0 && (
      <ul className="suggestions" style={{width:'220px'}}>
        {fromSuggestions.map((suggestion, index) => (
          <li
            key={index}
            className="suggestion"
            onClick={() => selectFromSuggestion(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )}











              </div>
              <div className="input-box">
               
                


              <input type="text" placeholder="Enter Destination" style={{width:'200px',marginTop:'10px'}} value={dropoffValue}
                  onChange={handleDropoffChange}/>
                  
{dropoffSuggestions.length > 0 && (
      <ul className="suggestions" style={{width:'220px'}}>
        {dropoffSuggestions.map((suggestion, index) => (
          <li
            key={index}
            className="suggestion"
            onClick={() => selectDropoffSuggestion(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )}

</div>
              <div className="input-box">
               
                <input type="date" style={{width:'200px',marginTop:'10px'}}/>
              </div>


             

              <div className="passenger-container" ref={dropdownRef}>
    {/* Input Field - Click to show buttons */}
    <input
      type="text" style={{width:'200px',marginTop:'20px'}}
      className="passenger-input"
      value={`${adults} Adult${adults > 1 ? "s" : ""} - ${children} Child${children > 1 ? "ren" : ""}`}
      readOnly
      onClick={() => setShowControls(!showControls)}
    />

    {/* Controls - Show when input is clicked */}
    {showControls && (
      <div className="passenger-box">
        <div className="passenger-group">
          <span>Adults</span>
          <button className="circle-btn" onClick={decreaseAdults}>−</button>
          <span className="count">{adults}</span>
          <button className="circle-btn" onClick={increaseAdults}>+</button>
        </div>

        <div className="passenger-group">
          <span>Children</span>
          <button className="circle-btn" onClick={decreaseChildren}>−</button>
          <span className="count">{children}</span>
          <button className="circle-btn" onClick={increaseChildren}>+</button>
        </div>
      </div>
    )}
  </div> 


  <button className="top-btn" style={{width:'200px',marginRight:'60px',borderRadius:'25px',color:'black',backgroundColor:'orange',marginTop:'10px'}}>Submit</button>
         

          </>
        )}

        {/* Tours Fields */}
        {activeTab === "Tours" && (
          <>
              
              <div className="input-box">
                
                <input type="text" placeholder="Enter Departure city" style={{width:'200px',marginTop:'10px'}} value={fromValue}
                 onChange={handleFromChange} />




{fromSuggestions.length > 0 && (
      <ul className="suggestions" style={{width:'220px'}}>
        {fromSuggestions.map((suggestion, index) => (
          <li
            key={index}
            className="suggestion"
            onClick={() => selectFromSuggestion(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )}











              </div>
              
              <div className="input-box">
               
                <input type="date" style={{width:'200px',marginTop:'10px'}}/>
              </div>

              <div className="input-box">
               
                


               <input type="text" placeholder="Enter Destination" style={{width:'200px',marginTop:'10px'}} value={dropoffValue}
                   onChange={handleDropoffChange}/>
                   
 {dropoffSuggestions.length > 0 && (
       <ul className="suggestions" style={{width:'220px'}}>
         {dropoffSuggestions.map((suggestion, index) => (
           <li
             key={index}
             className="suggestion"
             onClick={() => selectDropoffSuggestion(suggestion)}
           >
             {suggestion}
           </li>
         ))}
       </ul>
     )}
 
 </div>
             
              <div className="input-box">
               
                <input type="date" style={{width:'200px',marginTop:'10px'}}/>
              </div>

              <button className="top-btn" style={{width:'200px',marginRight:'60px',borderRadius:'25px',color:'black',backgroundColor:'orange',marginTop:'0px'}}>Submit</button>

          </>
        )}
      </div>
    </div>

      
    {/* Information Section */}
    <div className="info-section">
      <div className="info">
        <span>✔️</span> Trusted by 2,500+ companies for seamless executive and corporate travel management
      </div>
      <div className="info">
        <span>✔️</span> Facilitating 100,000+ luxury transfers across US, UK, Germany, and France with unmatched reliability
      </div>
      <div className="info">
        <span>✔️</span> Dedicated 24/7 concierge support for every journey, from booking to drop-off
      </div>
    </div>
  </main>
</div>






<style jsx>{`

.flight-container {
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  text-align: center;
}

.add-flight-btn {
  padding: 10px 15px;
  border: none;
  background: orange;
  color: black;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.add-flight-btn:hover {
  background: darkorange;
}

.flight-fields {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
}

.flight-fields input {
  width: 30%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.remove-flight-btn {
  background: red;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
  border-radius: 5px;
}

.remove-flight-btn:hover {
  background: darkred;
}

/* Responsive */
@media (max-width: 768px) {
  .flight-fields {
    flex-direction: column;
    gap: 5px;
  }

  .flight-fields input {
    width: 100%;
  }
}



`
}</style>
<style jsx>{
  `

.flight-container {
  width: 100%;
  max-width: 500px;
  margin: 0px auto;
  text-align: center;
}

.add-flight-btn {

  padding: 10px 15px;
  border: none;
  background: orange;
  color: black;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.add-flight-btn:hover {
  background: darkorange;
}

.flight-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
}
.flight-field input {

  width: 30%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.flight-fields {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0px;
  gap: 10px;
}


.remove-flight-btn {
  background: red;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
  border-radius: 5px;
}

.remove-flight-btn:hover {
  background: darkred;
}

/* Responsive */
@media (max-width: 768px) {
  .flight-fields {
    flex-direction: column;
    gap: 5px;
  }

  .flight-fields input {
    width: 100%;
  }
}
.passenger-container {
  position: relative;
  width: 100%;
  max-width: 250px;
}

.passenger-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}

.passenger-box {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;
}

.passenger-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
}

.circle-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  font-size: 18px;
  background: orange;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-btn:hover {
  background: darkorange;
}

.count {
  width: 30px;
  text-align: center;
  font-weight: bold;
}

/* Responsive */
@media (max-width: 768px) {
  .passenger-container {
    max-width: 100%;
  }
}



  
  `}

</style>
<style jsx> {
  `/* General Styles */
.app {
  margin-top: 130px; /* Default for larger screens */
}

/* For Tablets (768px and below) */
@media (max-width: 768px) {
  .app {
    margin-top: 10px; /* Reduce margin for smaller screens */
  }
}

/* For Mobile Phones (480px and below) */
@media (max-width: 480px) {
  .app {
    margin-top: 0px; /* Further reduce margin for mobile */
  }
}


.container {
  width: 80%;
  margin: auto;
  max-width: 1100px;
}

.navbarr {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-items {
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.nav-items.active {
  font-weight: bold;
  text-decoration: underline;
}

/* Tabs */
.tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.tab {
  padding: 8px 15px;
  cursor: pointer;
}

/* Search Box */
.search-box {
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
}

/* Flight Input Fields */
.flight-fields {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.input-box {
  flex: 1;
  min-width: 220px; /* Prevents too-small fields */
}

.input-box label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.input-box input,
.input-box select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Submit Button */
.top-btn {
  width: 100%;
  background: rgba(57, 53, 53, 0.9);
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color:white;
  
}

/* Mobile & Tablet Adjustments */
@media (max-width: 1024px) {
  .container {
    width: 95%;
  }

  .flight-fields {
    flex-direction: column; /* Stack input fields */
  }

  .top-btn {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .navbarr {
    flex-direction: column;
    align-items: center;
  }

  .tabs {
    flex-direction: column;
  }

  .search-box {
    padding: 15px;
  }

  .top-btn {
    font-size: 14px;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .input-box {
    min-width: 100%;
  }

  .flight-fields {
    flex-direction: column;
  }

  .top-btn {
    width: 100%;
    padding: 14px;
    font-size: 14px;
  }
}



  `}

</style>
<style jsx>{
  `
  /* Form Container */






  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  
  
  
  
  
  
  
  
  
  
  }
  
  .form-content {
    display: flex;
    background: white;
    padding: 30px;
    border-radius: 8px;
    width: 80%;
    max-width: 800px;
    flex-wrap: wrap; /* Added flex-wrap for responsiveness */
  }
  
  .image-section {
    flex: 1;
    padding-right: 20px;
  }
  
  .form-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .form-section {
    flex: 1;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .signup-btn {
    width: 100%;
    padding: 10px;
    background-color:rgb(241, 163, 27);
    color: black;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .signup-btn:hover {
    background-color:rgb(47, 48, 145);
  }
  
  .close-btn {
    margin-top: 10px;
    padding: 10px;
    background-color:rgb(255, 255, 255);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .close-btn:hover {
    background-color:rgb(255, 255, 255);
  }
  
  /* Top buttons (Chauffeur, Flight, Hotel) */
  .top-buttons {
    margin-bottom: 20px;
    margin-left:25px;
    border-radius: 100px;
    width: 30%;
    background-color: rgba(39, 30, 30, 0.8);
    display: flex;
    justify-content: center; /* Center buttons */
    gap: 1rem;
  }
  
  .top-btn:hover {
    background-color:rgb(70, 120, 191);
  }
  
  /* Autocomplete Text Fields */
  .autocomplete {
    position: relative;
    flex: 1;
    min-width: 200px;
  }
  
  .input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .suggestions {
    list-style-type: none;
    padding: 0;
    margin: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-top: none;
    position: absolute;
    width: 100%;
    z-index: 10;
  }
  
  .suggestion {
    padding: 8px;
    cursor: pointer;
  }
  
  .suggestion:hover {
    background-color:rgb(28, 135, 193);
  }
  
  /* Date and Time Pickers */
  .date-picker,
  .time-picker {
    flex: 1;
    min-width: 150px;
  }
  
  .date-picker input,
  .time-picker input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .search-box {
    display: flex;
    align-items: center; /* Vertically center the items */
    justify-content: space-between; /* Distribute space between items */
    flex-wrap: wrap; /* Allow wrapping for smaller screens */
  }
  
  .autocomplete {
    margin-right: 10px; /* Space between the inputs */
  }
  
  .date-picker,
  .time-picker {
    margin-right: 10px; /* Space between the date/time pickers and other elements */
  }
  
  .search-btn {
    border-radius: 20px;
    margin-left: 10px; /* Space between the search button and other inputs */
    padding: 10px;
    background-color: rgb(41, 145, 235);
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .search-btn:hover {
    background-color:rgb(43, 114, 164);
  }
  
  .container {
    margin-left: 250px;
    width: 900px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Tabs */
  .tabs {
    margin-bottom: 20px;
  }
  
  .tab {
    padding: 10px 20px;
    background: transparent;
    border: 1px solid #ddd;
    margin-right: 10px;
    cursor: pointer;
  }
  
  .tab.active {
    background-color: rgb(41, 141, 229);
    color: white;
  }
  
  
  .hero {
    position: relative; /* Ensure positioning for the pseudo-element */
    padding: 2rem;
    height: 200vh; /* Full viewport height */
    
    align-items: center;
    justify-content: center;
    color: #black; /* Ensure content stands out */
    overflow: hidden; /* Prevent pseudo-element overflow */
    z-index: 1; /* Keep content above the pseudo-element */
  }
  
  .hero::before {
    content: ""; /* Add a pseudo-element */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   
    background-size: cover; /* Adjust to fit */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Prevent tiling */
    z-index: -2; /* Send behind everything */
  }
  
  .hero::after {
    content: ""; /* Add the black transparent overlay */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(9, 0, 0, 0.5); /* Black with transparency */
    z-index: -1; /* Place above the image but below content */
  }
  
  
  
  
  .hero h1 {
    margin-left: 250px;
    color: white;
    font-size: 2.5rem;
    margin-bottom: rem;
  }
  
  /* Top Buttons */
  .top-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  /* Info Section */
  .info-section {
  margin-left:50px;
  margin-right:50px;
    background-color: rgba(56, 54, 54, 0.8);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1rem;
    color: white;
    border-radius: 5px;
    gap: 1rem;
  }
  
  .info {
    max-width: 300px;
    text-align: left;
    font-size: 0.9rem;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
      margin-left: 0; /* Remove left margin for smaller screens */
    }
  
    .search-box {
      flex-direction: column;
      align-items: stretch;
    }
  
    .autocomplete {
      margin-right: 0;
    }
  
    .input,
    .date-picker input,
    .time-picker input {
      width: 100%;
      margin-bottom: 10px;
    }
  
    .info-section {
      flex-direction: column;
      align-items: center;
    }
  
    .tabs .tab {
      font-size: 1rem;
    }
  
    .container {
      margin-left: 0;
      width: 100%;
    }
  
    .top-buttons {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  
    .top-btn {
      width: 100%;
      margin-bottom: 10px;
    }
  
    .search-btn {
      width: 100%;
      margin-left: 0;
      padding: 12px;
    }
  }
  
  @media (max-width: 480px) {
    .hero h1 {
      font-size: 1.5rem;
    }
  
    .tabs .tab {
      font-size: 0.9rem;
    }
  
    .top-btn {
      padding: 0.5rem 1rem;
      font-size: 14px;
    }
  
    .form-content {
      flex-direction: column; /* Stack image and form for smaller screens */
      padding: 15px;
      width: 90%;
    }
  
    .image-section {
      padding-right: 0;
      flex: none;
    }
  
    .form-section {
      flex: none;
    }
  }
  
  


  
  
  `}


</style>

   </>
  );
};

export default Header;