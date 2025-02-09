
import { Link } from "react-router-dom";
import "../css/Navbar.css";  // Import the CSS file

import React, { useState, useEffect, useRef } from "react";

import Header from "../Components/Header";

import "react-datepicker/dist/react-datepicker.css";

  
const CardSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    title: "",
    companyWebsite: "",
    email: "",
    comment: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };


   // Unique state for this popup
   const [isNewPopupOpen, setNewPopupOpen] = useState(false);
  
   const toggleNewPopup = () => {
     setNewPopupOpen(!isNewPopupOpen);
   };
  






return(

<>






    <style jsx>
  {`
  .unique-card-section {
    display: flex;
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
    justify-content: space-between; /* Distribute cards evenly */
    gap: 20px; /* Space between cards */
    margin: 50px auto; /* Top/bottom centering */
    max-width: 1200px; /* Limits the width for laptop screens */
    padding: 20px; /* Adds padding around the section */
  }

  .unique-card {
    background: white; /* White background for cards */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Subtle card shadow */
    padding: 20px; /* Inner spacing for content */
    width: calc(33.333% - 20px); /* 3 cards side-by-side on larger screens */
    text-align: center; /* Center-align content */
    transition: transform 0.3s, box-shadow 0.3s; /* Hover animation */
  }

  .unique-card:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  }

  .unique-card img {
    width: 60px; /* Icon size */
    margin-bottom: 10px; /* Space below icon */
  }

  .unique-card-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  .unique-card-description {
    font-size: 16px;
    color: #555;
  }

  @media (max-width: 1024px) {
    .unique-card {
      width: calc(50% - 20px); /* Two cards per row on tablets */
    }
  }

  @media (max-width: 768px) {
    .unique-card {
      width: 100%; /* Single card per row on small screens */
    }
  }
  `}
</style>

<section className="unique-card-section">
  <div className="unique-card">
    <img src="/imgs/icon1.png" alt="Icon" />
    <h2 className="unique-card-title">Instant Quote</h2>
    <p className="unique-card-description">With just a few clicks, get your quote and book instantly.</p>
  </div>

  <div className="unique-card">
    <img src="/imgs/icon2.png" alt="Icon" />
    <h2 className="unique-card-title">Chauffeur by hour</h2>
    <p className="unique-card-description">Professional chauffeurs available for hourly hire or full-day service.</p>
  </div>

  <div className="unique-card">
    <img src="/imgs/icon3.png" alt="Icon" />
    <h2 className="unique-card-title">Solo or group travel</h2>
    <p className="unique-card-description">Custom trip planning options available, ideal for both groups and individuals.</p>
  </div>
</section>

<h2 style={{marginLeft:'150px',marginTop:'0px'}}>

</h2>
<div className="card-container"style={{marginLeft:'150px',marginRight:'180px',marginTop:'10px'}}>

{isNewPopupOpen && (
        <div className="new-popup-overlay" style={{ marginTop: "0px" }}>
          <div className="new-popup-container">
            {/* Image Section */}
            <div className="popup-image-section">
              <img
                src="./imgs/picky.png"
                alt="Form Illustration"
                className="popup-image"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px 0 0 10px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Form Section */}
            <div className="popup-form-section" style={{ padding: "1.5rem" }}>
              <h2 style={{ marginBottom: "1rem", color: "#333" }}>Get in Touch</h2>

              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="firstName" style={{ display: "block", marginBottom: "0.5rem" }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your name"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>

                {/* Title Field */}
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="title" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Title/Position
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title/Position"
                    value={formData.title}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>

                {/* Company Website Field */}
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="companyWebsite" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Company Website *
                  </label>
                  <input
                    type="text"
                    name="companyWebsite"
                    placeholder="Company Website Link"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>

                {/* Email Field */}
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Business Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>

                {/* Comment Field */}
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="comment" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Comment *
                  </label>
                  <textarea
                    name="comment"
                    placeholder="Please provide additional details"
                    value={formData.comment}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      resize: "none",
                      height: "100px",
                    }}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "15px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </form>

              {/* Close Button */}
              <button
                onClick={toggleNewPopup}
                style={{
                  marginTop: "1rem",
                  padding: "10px 20px",
                  backgroundColor: "white",
                  color: "red",
                  border: "none",
                  borderRadius: "15px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      


 </div>
 <style jsx>
  {`
    .card-section {
      padding: 20px;
      text-align: center;
    }

    .card-container {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      margin-top: 0px;
      margin-left: auto; /* Automatically adjust margin from the left */
      margin-right: auto; /* Automatically adjust margin from the right */
      max-width: 1200px; /* Maximum container width */
    }

    .card {
      flex: 1 1 calc(33.333% - 20px); /* 3 cards per row on larger screens */
      background-color: black;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      position: relative; /* Allow button to overlay on image */
      transition: all 0.3s ease;
      margin-bottom: 20px;
    }

    .card-image {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.7; /* Adjust opacity of the image */
    }

    .card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7); /* Black overlay with opacity */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      text-align: center;
      padding: 20px;
      opacity: 1; /* Ensure the overlay itself is fully opaque */
    }

    .card-title {
      font-size: 24px;
      font-weight: bold;
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1; /* Keep the title on top */
      opacity: 1;
    }

    .card-description {
      font-size: 16px;
      color: white;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      opacity: 1;
    }

    .card-button {
      padding: 10px 20px;
      background-color:rgb(232, 157, 52); /* Orange button */
      color: black;
      border: none;
      font-size: 16px;
      border-radius: 20px;
      cursor: pointer;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      opacity: 1;
    }

    .card-button:hover {
      background-color:rgb(204, 125, 34);
    }

    /* Responsive Breakpoints */

    @media (max-width: 1024px) {
      .card {
        flex: 1 1 calc(45% - 20px); /* 2 cards per row on medium screens */
        max-width: 45%;
        margin-left: 10px;
        margin-right: 10px;
      }
      .card-container {
        margin-left: 20px; /* Adjustable left margin for laptop screens */
        margin-right: 20px; /* Adjustable right margin for laptop screens */
      }
    }

    @media (max-width: 768px) {
      .card {
        flex: 1 1 100%; /* 1 card per row on small screens */
        max-width: 100%;
        margin: 0 auto;
      }

      .card-title {
        font-size: 22px;
      }

      .card-description {
        font-size: 14px;
      }

      .card-button {
        font-size: 14px;
        padding: 8px 16px;
      }
    }

    @media (max-width: 480px) {
      .card-container {
        gap: 15px; /* Reduce gaps for smaller screens */
      }

      .card {
        flex: 1 1 calc(90% - 20px); /* 1 card per row on very small screens */
        max-width: 100%;
      }

      .card-title {
        font-size: 20px;
      }

      .card-description {
        font-size: 12px;
      }

      .card-button {
        padding: 6px 12px;
        font-size: 12px;
      }
    }

    @media (max-width: 350px) {
      .card {
        flex: 1 1 calc(95% - 20px); /* Slight padding for narrow screens */
        max-width: 100%; /* Full width for smaller devices */
      }

      .card-title {
        font-size: 18px;
      }

      .card-description {
        font-size: 11px;
      }

      .card-button {
        padding: 5px 10px;
        font-size: 11px;
      }
    }
  `}
</style>

<section className="card-section" style={{ marginTop: '50px', marginBottom: '50px' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Exclusive partnership opportunities</h2>
  <div className="card-container">
    <div className="card">
      <div className="card-image">
        <img src="./imgs/coprate.png" alt="Card Image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">Corporation and Businesses</h3>
        <p className="card-description"></p>
        <button onClick={toggleNewPopup} className="card-button">Get in touch</button>
      </div>
    </div>

    <div className="card">
      <div className="card-image">
        <img src="/imgs/influ.png" alt="Card Image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">Influencers and Public </h3>
        <p className="card-description"></p>
        <button onClick={toggleNewPopup} className="card-button">Apply Now</button>
      </div>
    </div>

    <div className="card">
      <div className="card-image">
        <img src="./imgs/travel.png" alt="Card Image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">Solo or Group Travel</h3>
        <p className="card-description"></p>
        <button onClick={toggleNewPopup} className="card-button">Learn More</button>
      </div>
    </div>
  </div>
</section>









   


    <style jsx>{`
  .layout-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .content-section {
    margin-bottom: 20px; /* Adds spacing between sections */
  }

  .line {
    height: 1px;
    background-color: lightgray; /* Line color */
    margin: 10px 0;
  }

  .content-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .heading {
    flex: 1; /* Allocates space for the heading */
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: left;
  }

  .paragraph {
    flex: 2; /* Allocates more space for the paragraph */
    font-size: 16px;
    color: #333;
    margin-left: 20px; /* Space between heading and paragraph */
    text-align: left;
  }

  @media (max-width: 768px) {
    .content-row {
      flex-direction: column; /* Stacks heading and paragraph vertically on small screens */
      text-align: center;
    }

    .paragraph {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`}</style>





    <style  jsx>{
      `
    .cards-section {
  padding: 2rem;
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
  gap: 1.5rem;
  justify-content: flex-start; /* Align to the left */
  margin-left: auto; /* Default for centered alignment */
  margin-right: auto; /* Default for centered alignment */
}

.cardy {
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
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #333;
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











  <style jsx>{
    `
    /* CSS file: styles.css */

/* Section with light grey background and flex layout */
.section-container {
  display: flex;
  background-color: #d3d3d3;
  padding: 20px;
  border-radius: 10px;
}

/* Left side with text */
.section-left {
  flex: 1;
  padding: 20px;
}

.section-left h2 {
  font-size: 24px;
  color: #333;
}

.section-left p {
  font-size: 16px;
  color: #555;
}

/* Right side with image */
.section-right {
  flex: 1;
  padding: 20px;
}

.section-right img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

    @media screen and (max-width: 1024px) {
  .section-container {
    padding: 20px;
    gap: 30px;
  }

  .section-left h2 {
    font-size: 24px;
  }

  .section-left p {
    font-size: 14px;
  }

  .section-left .search-btn {
    width: 180px;
    height: 40px;
  }
}

/* Small Screens (Mobile) */
@media screen and (max-width: 768px) {
  .section-container {
    flex-direction: column; /* Stacks the text and image vertically */
    text-align: center; /* Centers content for better visibility */
  }

  .section-left,
  .section-right {
    flex: none;
    width: 100%; /* Makes each section occupy the full width */
  }

  .section-left h2 {
    font-size: 20px;
  }

  .section-left p {
    font-size: 14px;
  }

  .section-left .search-btn {
    width: 100%; /* Full-width button */
    max-width: 300px;
    margin: 0 auto;
  }

  .section-right .responsive-img {
    margin-top: 20px;
  }
}

/* Extra Small Screens (Phones) */
@media screen and (max-width: 480px) {
  .section-left h2 {
    font-size: 18px;
  }

  .section-left p {
    font-size: 12px;
  }

  .section-left .search-btn {
    width: 100%;
    height: 50px; /* Larger button for easier taps */
    font-size: 14px;
  }

  .section-right .responsive-img {
    max-width: 90%; /* Limits image size */
    margin: 0 auto; /* Centers the image */
  }
}
    
    `}

  </style>



  <style jsx>{
  `
  
  /* General Row Styles */
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
}

/* Column Styles */
.col-lg-6 {
  width: 50%;
  padding: 1rem;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .col-lg-6 {
    width: 100%; /* Full width for smaller screens */
    padding: 0.5rem;
  }
}

/* Image Styles */
img {
  max-width: 100%; /* Ensure images fit within their container */
  height: auto;
  border-radius: 10px; /* Optional for rounded corners */
}

/* Text and Heading Styles */
h4 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: left;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: justify;
}

/* Margin Adjustments for Different Screen Sizes */
@media (max-width: 576px) {
  h4 {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  p {
    font-size: 0.9rem;
  }

  .row {
    margin: 0 0.5rem;
  }

  .col-lg-6 {
    padding: 0.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .row {
    margin: 0 2rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.95rem;
  }
}

/* Larger Screens */
@media (min-width: 1201px) {
  .row {
    margin: 0 4rem;
  }

  h4 {
    font-size: 1.7rem;
  }

  p {
    font-size: 1.1rem;
  }
}

/* Left Margin Adjustments for Images */
@media (max-width: 768px) {
  img {
    margin-left: 0; /* Center images on smaller screens */
  }
}

@media (min-width: 769px) {
  img {
    margin-left: opx; /* Maintain some margin for larger screens */
  }
}

  
  `}

</style>



{/* card popup */}
<style jsx>{`
        .new-popup-overlay {
       
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .new-popup-container {
          display: flex;
          width: 600px;
          background: white;
          border-radius: 10px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }

        .popup-image-section {
          flex: 1;
          background: #f5f5f5;
        }

        .popup-form-section {
          flex: 1;
   
        }
      `}</style>













   </>
  );
};

export default CardSection;