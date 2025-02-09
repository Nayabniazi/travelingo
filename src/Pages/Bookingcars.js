
import { Link } from "react-router-dom";
import "../css/Navbar.css";  // Import the CSS file

import React, { useState, useEffect, useRef } from "react";

import Header from "../Components/Header";

import "react-datepicker/dist/react-datepicker.css";
import Brands from "../Components/Brands";

import Reviews from "../Components/Reviews";
import { FaWifi, FaClock, FaPhoneAlt, FaUtensils } from "react-icons/fa";
import Footer from "../Components/Footer";
import CardSection from "../Components/CardSection";
  
const Home = () => {


    const [childrenCount, setChildrenCount] = useState(0);
    const incrementChildren = () => {
      setChildrenCount(childrenCount + 1);
    };
  
    const decrementChildren = () => {
      if (childrenCount > 0) setChildrenCount(childrenCount - 1);
    };
  
  
    const [selectedCard, setSelectedCard] = useState(null);
  
    const handleCardSelection = (index) => {
      setSelectedCard(index);
    };
  
    const cards = [
      {
        title: "Premium Sedan",
        features: [
          { icon: <FaWifi />, label: "Complimentary Wi-Fi" },
          { icon: <FaClock />, label: "Punctual service" },
          { icon: <FaPhoneAlt />, label: "Cell phone chargers" },
          { icon: <FaUtensils />, label: "Complimentary water" },
        ],
        image: "/imgs/car1.png",
        price: "0.00 USD",
        badge: "Best price",
        badgeColor: "red",
        
      },
      {
        title: "Premium SUV",
        features: [
          { icon: <FaWifi />, label: "Complimentary Wi-Fi" },
          { icon: <FaClock />, label: "Punctual service" },
        ],
        
        image: "/imgs/car3.png",
        price: "0.00 USD",
        badge: "Most popular",
        badgeColor: "orange",
       
      },
  
      {
        title: "Premium Sedan",
        features: [
          { icon: <FaWifi />, label: "Complimentary Wi-Fi" },
          { icon: <FaClock />, label: "Punctual service" },
          { icon: <FaPhoneAlt />, label: "Cell phone chargers" },
          { icon: <FaUtensils />, label: "Complimentary water" },
        ],
        image: "/imgs/car2.png",
        price: "0.00 USD",
        badge: "Best price",
        badgeColor: "green",
      },
      {
        title: "Premium SUV",
        features: [
          { icon: <FaWifi />, label: "Complimentary Wi-Fi" },
          { icon: <FaClock />, label: "Punctual service" },
        ],
        image: "/imgs/car1.png",
        price: "0.00 USD",
        badge: "Most popular",
        badgeColor: "blue",
      },
    ];
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      const [isOpen, setOpen] = useState(false)
  
   const [activeTab, setActiveTab] = useState("one-way");
    const [suggestions, setSuggestions] = useState([]);
    const [locationInput, setLocationInput] = useState("");
  
    const handleLocationChange = (e) => {
      const query = e.target.value;
      setLocationInput(query);
  
      // Simulating location suggestions (use an API like Google Places in real scenarios)
      const mockLocations = ["New York", "Los Angeles", "San Francisco", "Chicago", "Miami"];
      if (query) {
        setSuggestions(mockLocations.filter((location) => location.toLowerCase().includes(query.toLowerCase())));
      } else {
        setSuggestions([]);
      }
    };
  
    const handleSuggestionClick = (location) => {
      setLocationInput(location);
      setSuggestions([]);
    };
  
  
  
    const [activeForm, setActiveForm] = useState(null);
  
    const handleButtonClick = (formType) => {
      setActiveForm(formType); // Set the active form type based on button clicked
    };
  
    const closeForm = () => {
      setActiveForm(null); // Close the form
    };
  
  
  
  
  
  
    const [fromSuggestions, setFromSuggestions] = useState([]);
    const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
    const [fromValue, setFromValue] = useState("");
    const [dropoffValue, setDropoffValue] = useState("");
  
    // Example list of locations for autocomplete
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      return (
          <>
           
  

<Header imgSrc="/imgs/subcar.png" h1="Professional car services" />
<CardSection /> 
  
  
  
  
  <div
        style={{
          display: "flex",
          gap: "2rem",
          padding: "2rem",
         
          
        }}
      >
        {/* Cards Section */}
        <div style={{ flex: 2 }}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                fontSize:'12px',
                display: "flex",
                position: "relative",
                border: `2px solid ${selectedCard === index ? "blue" : "#ccc"}`,
                borderRadius: "10px",
                padding: "1rem",
                marginBottom: "1rem",
                alignItems: "center",
                gap: "1rem",
                transition: "border 0.3s ease",
                marginLeft:'100px',
                marginRight:'140px',
              }}
            >
              {/* Radio Button at Top Right */}
              <input
                type="radio"
                name="card"
                value={index}
                checked={selectedCard === index}
                onChange={() => handleCardSelection(index)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  transform: "scale(1.5)",
                }}
              />
  
              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "10px",
                  backgroundColor: card.badgeColor,
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                fontSize:"10px",
                }}
              >
                {card.badge}
              </div>
  
              {/* Image */}
              <div>
                <img
                  src={card.image}
                  alt="Car"
                  style={{ borderRadius: "10px", width: "150px" }}
                />
              </div>
  
              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3>{card.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {card.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      {feature.icon}
                      {feature.label}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
                  All-in price: {card.price}
                </div>
              </div>
            </div>
          ))}
        </div>
  
       </div>
       
  
  <Reviews />
  
  
    <section className="contact-us">
        <h2>Let’s plan your trip</h2>
        <form className="contact-form" >
          <div className="form-group">
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="from" style={{ display: "block", marginBottom: "0.5rem" }}>
              From *
            </label>
            <input
              type="text"
              id="from"
              placeholder="Enter pickup location"
              style={{ width: "100%", padding: "0.5rem", borderRadius: "5px" }}
            />
          </div>
          </div>
  
          <div className="form-group">
           
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="dropoff" style={{ display: "block", marginBottom: "0.5rem" }}>
              Dropoff *
            </label>
            <input
              type="text"
              id="dropoff"
              placeholder="Enter dropoff location"
              style={{ width: "100%", padding: "0.5rem", borderRadius: "5px" }}
            />
          </div>
          </div>
  
          <div className="form-group">
          <div style={{ flex: 1 }}>
              <label htmlFor="pickup-time" style={{ display: "block", marginBottom: "0.5rem" }}>
                Pickup time *
              </label>
              <input
                type="time"
                id="pickup-time"
                style={{ width: "100%", padding: "0.5rem", borderRadius: "5px" }}
              />
            </div>
          </div>
           
          
  
          <div className="form-group">
          <div style={{ marginBottom: "1rem" ,}}>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>Children *</label>
              <div
                style={{
                 
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "0.5rem",
                }}
              >
                <button
                  type="button"
                  onClick={decrementChildren}
                  style={{
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #ccc",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <span>{childrenCount}</span>
                <button
                  type="button"
                  onClick={incrementChildren}
                  style={{
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #ccc",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
  
          <div className="form-group">
            
          </div>
  
          <button type="submit" className="contact-btn">
            Continue
          </button>
        </form>
      </section>
  
  
  <style jsx>{
      `
      .contact-us {
    padding: 2rem;
    background-color: #f9f9f9;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 28px;
  }
  
  .contact-us h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 24px;
    color: #333;
  }
  
  .contact-form {
    display: grid;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-group label {
    font-size: 16px;
    margin-bottom: 5px;
    color:none;
    
  }
    .form-group input, .form-group select, .form-group textarea {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 25px;
    width: 100%;
  }
  
    
  .phone-input-container {
    display: flex;
    gap: 10px;
  }
  
  .phone-input-container select {
    width: 30%;
  }
  
  .phone-input-container input {
    width: 70%;
    color:none;
  }
  
  .contact-btn {
    background-color:rgb(30, 71, 115);
    color: white;
    padding: 12px 20px;
    font-size: 16px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .contact-btn:hover {
    background-color: #0056b3;
  }
  
      
      `}
  
  </style>
  
  <Footer />
  
  
  
  
  
  </>
  
  

   
  );
};

export default Home;