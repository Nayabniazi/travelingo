

import "../css/Navbar.css";  // Import the CSS file


import ParagraphSection from "../Components/ParagraphSection.js";
import Footer from "../Components/Footer.js";


import Header from "../Components/Header";

import "react-datepicker/dist/react-datepicker.css";
import Brands from '../Components/Brands.js';
import CardSection from '../Components/CardSection.js';
import ServicesCards from '../Components/ServicesCards.js';
import Slider from '../Components/Slider.js';
import Reviews  from "../Components/Reviews.js";


const About = () => {
   // Define the content sections
   const sectionsData = [
  
  ];
return(

<>


<Header imgSrc="/imgs/subcar.png" h1="Book your chauffeur service" />
<ParagraphSection
        sections={sectionsData}
        containerStyle={{ marginLeft: "150px", marginRight: "150px", marginTop: "100px" }}
      />
<CardSection />
<ServicesCards />
<Brands />
<Slider />
<Reviews />
<Footer />
   </>
  );
};

export default About;