
import { Link } from "react-router-dom";
import "../css/Navbar.css";  // Import the CSS file

import ParagraphSection from "../Components/ParagraphSection.js";
import Footer from "../Components/Footer.js";


import Address from "../Components/Address.js";

import "react-datepicker/dist/react-datepicker.css";
import Brands from '../Components/Brands.js';
import CardSection from '../Components/CardSection.js';
import ServicesCards from '../Components/ServicesCards.js';
import Slider from '../Components/Slider.js';
import Reviews  from "../Components/Reviews.js";
import GridParagraph from "../Components/GridParagraph.js";

import React, { useState, useEffect, useRef } from "react";

import Header from "../Components/Header.js";

import "react-datepicker/dist/react-datepicker.css";

import Contact from "../Components/Contact.js";

  
const Home = () => {

    const sectionsData = [
        
        {
          heading: "3.Customizable Fleet Solutions: Handling Various Client Demand Bookinglane is a reliable chauffeur service in the city or airport",
          content: "Our consumers choose Vans, SUVs, and business sedans among other choices, that provide flexible and satisfy a variety of needs from corporate meetings to special events. Get your instant quote with easy and transparent booking system with no hidden costs. Bookinglane emphasizes personal requirements and guaranteed contentment for a luxurious and safe journey, while also providing 24-hour support and free cancellation options.",
        },
      ];






return(

<>


<Header imgSrc="/imgs/sky.png" h1="Luxury Private Ski Transportation Across the USA" />

<CardSection />
<ServicesCards />
<Brands />
<ParagraphSection sections={sectionsData}  />
<GridParagraph  
  
  sections={[
    {
      title: "Luxury Ski Transfers Across the USA - Private & Comfortable Ski Transportation",
      text: "Experience premium ski transportation with our luxury ski chauffeur service available at all ski resorts across the USA. Get an instant quote for solo or group travel and enjoy seamless private ski transfers designed for comfort and convenience.",
      image: "/imgs/sky.png"
    },
    {
      title: "Your Reliable Domestic  Partner",
      text: "All around the US, Bookinglane is the leading provider for airport transfers. Rest assured, your journey will be elegant and stylish.",
      image: "/imgs/ski.png"
    }
  ]}
  
  
  
  
  />

<Contact />



<Reviews />
<Footer />


   </>
  );
};

export default Home;