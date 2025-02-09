
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
        heading: "Safety",
        content: "Safety is always a top priority at Bookinglane. Our chauffeurs are background checked, and our vehicles are equipped with the latest safety features. You can rest assured that you will be in safe hands with us.",
      },
      {
        heading: "Reliability",
        content: "Reliability is at the core of what we do at Bookinglane. Our leading automated technology ensures that you can book your travel quickly and easily. Our chauffeurs are always on time, and our vehicles are well-maintained, so you can be sure that your travel plans will go off without a hitch.",
      },
        {
          heading: "Comfort",
          content: "Our leading automated technology ensures that you can book your travel quickly and easily. Our chauffeurs are always on time, and our vehicles are well-maintained, so you can be sure that your travel plans will go off without a hitch.",
   
         
        },
      ];






return(

<>


<Header imgSrc="/imgs/background.webp" h1="Airport transfers with Travelingoo" />

<CardSection />
<ParagraphSection sections={sectionsData}  />
<GridParagraph  
  
  sections={[
    {
      title: "Traveling for business?",
      text: "travelingoo is a leading corporate travel management company that offers executive car and chauffeur services both locally and nationwide. Our service is specifically designed to cater to any unique needs requiring reliable and efficient transportation to and from any destination. With a fleet of luxury vehicles and experienced drivers, Bookinglane ensures that you arrive at your desired destination on time and in style. Our service is available 24/7, so you can rest assured that you have a reliable transportation service at any time of the day or night. With our personalized support, advanced technology, and attention to detail, you can fully focus on your work while leaving your travel arrangements in the hands of our technology experts.",
      image: "/imgs/cop1.png"
    },
    {
      title: "Private jet transportation",
      text: "travelingoo executive car and chauffeur service provides transportation to and from a variety of private jet terminals, including JSX, Signature, and more. With a fleet of luxury vehicles and experienced drivers, travelingoo ensures that business travelers arrive at their destination on time and with comfort.",
      image: "/imgs/cop2.png"
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