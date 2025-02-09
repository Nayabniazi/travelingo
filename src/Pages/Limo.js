
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

import Header from "../Components/Header";

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


<Header imgSrc="/imgs/background2.webp" h1="Professional limo services" />

<CardSection />
<ParagraphSection sections={sectionsData}  />
<GridParagraph  
  
  sections={[
    {
      title: "Never before have airport transfers been so easy nationwide.",
      text: "We make airport transfers easy, removing one worry. Our elite vehicle fleet ensures you arrive on time with extra luxury.",
      image: "/imgs/header.png"
    },
    {
      title: "Your Reliable Domestic Airport Transfer Partner",
      text: "All around the US, Bookinglane is the leading provider for airport transfers. Rest assured, your journey will be elegant and stylish.",
      image: "/imgs/drive2.png"
    }
  ]}
  
  
  
  
  />

 <Address />


<Reviews />
<Footer />


   </>
  );
};

export default Home;