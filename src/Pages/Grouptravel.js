
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
          heading: "Why Choose Travelingoo for Group Travel:",
          content: "Choose from our fleet of well-maintained SUVs, sedans, and sprinters, providing both style and comfort. No matter the occasion, we have the perfect vehicle for your group.",
        },
        {
          heading: "Professional Chauffeurs",
          content: "Our chauffeurs are not just drivers; they are your dedicated guides to a seamless journey. With extensive knowledge of the best routes and a commitment to your safety, they ensure a stress-free travel experience.",
        },
        {
          heading: "Safety as a Priority:",
          content: "Your safety is paramount. Bookinglane guarantees secure and private group travel, whether you're heading to a corporate event, a sporting spectacle, or a celebrity-studded affair.",
        },
      ];






return(

<>


<Header imgSrc="/imgs/Group.png" h1="Group Travel Excellence with Travelingoo" />

<CardSection />
<ParagraphSection sections={sectionsData}  />
<GridParagraph  
  
  sections={[
    {
      title: "Flexible and Customized Services:",
      text: "We understand that every group is unique. That's why we offer flexible and customized services to meet your specific requirements. Enjoy a tailored travel experience with Travelingoo.",
      image: "/imgs/drive1.png"
    },
   
  ]}
  
  
  
  
  />

<Contact />



<Reviews />
<Footer />


   </>
  );
};

export default Home;