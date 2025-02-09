
import { Link } from "react-router-dom";
import "../css/Navbar.css";  // Import the CSS file


import React, { useState, useEffect, useRef } from "react";

import Header from "../Components/Header";

import "react-datepicker/dist/react-datepicker.css";


  
const Home = () => {


    const airports = [
        { name: "Phoenix Sky Harbor International Airport", code: "PHX",  },
        { name: "Los-Angeles International Airport", code: "LAX", },
        { name: "Oakland-International Airport", code: "OAK",  },
        { name: "San Diego International Airport", code: "SAN",  },
        { name: "Long Beach  Airport", code:'CA',  },
        { name: "Ontario-International Airport", code: "LAX", },
        { name: "Palm-Spring International Airport", code: "OAK", },
        { name: "Santa-Barbara International Airport", code: "SAN",  },
        { name: "San-Jose International Airport", code: "SJC",  },
        { name: "Sacramanto International Airport", code: "LAX", },
        { name: "John-Wayne International Airport", code: "OAK", },
        { name: "Denver-International Airport", code: "SAN",  },
        { name: "North West Florida Beaches International Airport", code: "SJC",  },
        { name: "Key West International Airport", code: "LAX",  },
        { name: "Lauderdale Hollywood International Airport", code: "OAK", },
    
        // Add more airports as needed
      ];
    
    
    


return(

<>




<section className="cards-section">
      <h2 className="section-heading">Explore Airports</h2>
      <div className="cards-container">
        {airports.map((airport, index) => (
          <a href={airport.link} key={index} className="cardy">
            
            <div className="content">
              <p>{airport.name}</p>
              <p>({airport.code})</p>
            </div>
          </a>
        ))}
      </div>
    </section>
    <style  jsx>{
      `
    .cards-section {
  padding: 2rem;
  margin-top:100px;
  background-color: #f8f8f8; /* Optional background for better contrast */
}

.section-heading {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
  justify-content: flex-start; /* Align to the left */
  margin-left: auto; /* Default for centered alignment */
  margin-right: auto; /* Default for centered alignment */

}

.cardy {
height:80px;
width:250px;
  text-decoration: none;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.cardy:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.cardy .content {
  padding: 1rem;
  text-align: center;
}

.cardy p {
 
}

/* Media Query for Mobile */
@media (max-width: 600px) {
  .cards-container {
    margin-left: 1rem; /* Add small margin for mobile screens */
    margin-right: 1rem; /* Maintain even spacing on both sides */
  }
}

/* Media Query for Tablets */
@media (max-width: 900px) and (min-width: 601px) {
  .cards-container {
    margin-left: 2rem; /* Increase margin for tablet screens */
    margin-right: 2rem;
  }
}

/* Media Query for Large Screens */
@media (min-width: 901px) {
  .cards-container {
    margin-left: 3rem; /* Adjust margin for larger screens */
    margin-right: 3rem;
  }
}

      
      `}

    </style>





   </>
  );
};

export default Home;