
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
        
      
      ];






return(

<>


<Header imgSrc="/imgs/road3.png" h1="Book Executive Car & Chauffeur Service for Innercity and Intercity Rides" />

<CardSection />
<ParagraphSection sections={sectionsData}  />
<GridParagraph  
  
  sections={[
    {
      title: "Never before have airport transfers been so easy nationwide.",
      text: "Have you ever been in need of executive car or limousine service to travel within or between cities? With the executive level of chauffeur service provided by our transportation solution, your instant solution has arrived! We offer a professional and discrete way to get you where you need to be quickly and comfortably. Enjoy a carefree ride without having to worry about traffic, parking and figuring out directions - whether for business meetings or for private trips. Rest assured that with us, your comfort is our priority.",
      image: "/imgs/lady.png"
    },
    {
      title: "Your Reliable Domestic Airport Transfer Partner",
      text: "At Travelingoo, our goal is to provide valuable information about our services, and share the latest news and trends in the transportation industry. We specialize in providing high-end, luxury transportation solutions for inner-city and inter-city rides. Whether you're traveling for business or leisure, our experienced chauffeurs will ensure that you arrive at your destination on time, in comfort, and in style. Our fleet of executive cars includes a range of high-end vehicles, including luxury limousines. Our limos are equipped with the latest technology, including Wi-Fi and entertainment systems, to ensure that you have a smooth and enjoyable ride. Our chauffeurs are professional, courteous, and knowledgeable about the best routes to take to get you to your destination quickly and efficiently. When it comes to choosing a chauffeur service, safety and reliability are crucial factors. Our team of experts has a wealth of experience in the transportation industry, and we have a proven track record of providing safe, comfortable, and punctual rides to our clients.",
      image: "/imgs/drive3.png"
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