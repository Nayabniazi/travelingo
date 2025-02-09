
 
 import React, { useState } from "react";

 
export default function Brands() {

   // Unique state for this popup
   const [isNewPopupOpen, setNewPopupOpen] = useState(false);
  
   const toggleNewPopup = () => {
     setNewPopupOpen(!isNewPopupOpen);
   };

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









  const reviews = [
    { id: 1, image: './imgs/dip1.png', rating: 4, text: ' The doctor and techs informed me of the medical issue and gave treatment on site including a demonstration of how to administer.' },
    { id: 2, image: './imgs/dip2.png', rating: 5, text: ' Incredible place for such a demanding job, handling every pet that I saw with so much love and care.' },
    { id: 3, image: './imgs/dip3.png', rating: 3, text: ' The doctor and techs informed me of the medical issue and gave treatment on site including a demonstration of how to administer. ' },
    { id: 4, image: './imgs/dip1.png', rating: 4, text: ' Incredible place for such a demanding job, handling every pet that I saw with so much love and care.' },
    { id: 5, image: './imgs/dip2.png', rating: 5, text: 'I have been dealing with chronic back and neck pain due to my line of work. Dr. Nathan has been so helpful in treating and helping to maintain my discomfort. He is knowledgeable, polite, courteous and polite' },
    { id: 6, image: './imgs/dip3.png', rating: 5, text: 'I have been dealing with chronic back and neck pain due to my line of work. Dr. Nathan has been so helpful in treating and helping to maintain my discomfort. He is knowledgeable, polite, courteous and polite' },
    { id: 7, image: './imgs/dip1.png', rating: 4, text: 'I have been dealing with chronic back and neck pain due to my line of work. Dr. Nathan has been so helpful in treating and helping to maintain my discomfort. He is knowledgeable, polite, courteous and polite' },
    { id: 8, image: './imgs/dip2.png', rating: 3, text: 'I have been dealing with chronic back and neck pain due to my line of work. Dr. Nathan has been so helpful in treating and helping to maintain my discomfort. He is knowledgeable, polite, courteous and polite' },
    { id: 9, image: './imgs/dip3.png', rating: 4, text: 'I have been dealing with chronic back and neck pain due to my line of work. Dr. Nathan has been so helpful in treating and helping to maintain my discomfort. He is knowledgeable, polite, courteous and polite' },
  ];






    
    return (
        <>


<section className="section-container">
  <div className="section-left">
    <h2>Are you an executive car service provider?</h2>
    <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
      Optimize your business operations with our mobile CRM. Stay ahead with real-time access to your calendar, client invoices, fleet tracking, and driver payouts—all from the palm of your hand. Seamlessly transition between mobile and desktop platforms to access your profile. Plus, enjoy the benefits of global affiliate network at no extra cost.
    </p>
    <a href="/Login">
      <button className="search-btn">Become our Partner</button>
    </a>
  </div>

  <div className="section-right">
    <img src="/imgs/picty.png" alt="Description of image" />
  </div>
</section>







          
  <div className="review-slider"style={{marginBottom:'30px'}}>
      <div className="slider-track">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt="User Icon" className="review-icon" />
            <div className="rating">
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>












<style jsx>
  {`
    .section-container {
      display: flex;
      justify-content: space-between;
      margin-left: 100px;
      margin-right: 100px;
      margin-bottom: 200px;
      height: 350px;
      margin-top: 150px;
      flex-wrap: wrap;
    }

    .section-left {
      flex: 1;
      padding: 20px;
      max-width: 50%; /* Left section will take up 50% of the container */
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .section-left h2 {
      margin-top: 20px;
      font-size: 24px;
    }

    .section-left p {
      font-size: 16px;
      color: #4a4a4a; /* Adjusted text color */
      margin-bottom: 20px;
    }

    .search-btn {
      width: 200px;
      height: 40px;
      border-radius: 20px;
      background: rgb(255, 167, 14);
      color: black;
      border: none;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .search-btn:hover {
      background: rgb(209, 129, 30); /* Darker shade on hover */
    }

    .section-right {
      flex: 1;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .section-right img {
      height: 360px;
      width: 400px;
      object-fit: cover;
    }

    /* Responsive Breakpoints */

    @media (max-width: 1024px) {
      .section-container {
        flex-direction: column;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
      }

      .section-left {
        max-width: 100%;
        padding: 0;
        text-align: center;
      }

      .section-right {
        max-width: 100%;
        padding: 0;
      }

      .section-right img {
        width: 100%; /* Image will be responsive */
        height: auto;
      }

      .section-left h2 {
        font-size: 22px;
      }

      .section-left p {
        font-size: 14px;
      }

      .search-btn {
        width: 180px;
        height: 35px;
        font-size: 14px;
      }
    }

    @media (max-width: 768px) {
      .section-container {
        margin-left: 10px;
        margin-right: 10px;
      }

      .section-left h2 {
        font-size: 20px;
      }

      .section-left p {
        font-size: 13px;
      }

      .search-btn {
        width: 160px;
        height: 30px;
        font-size: 13px;
      }

      .section-right img {
        width: 100%;
        height: auto;
      }
    }

    @media (max-width: 480px) {
      .section-left h2 {
        font-size: 18px;
      }

      .section-left p {
        font-size: 12px;
      }

      .search-btn {
        width: 150px;
        height: 28px;
        font-size: 12px;
      }

      .section-right img {
        width: 100%;
        height: auto;
      }
    }
  `}
</style>





<style jsx>{
    
    
    `
    /* Slider Container */
.review-slider {
  width: 100%;
  overflow: hidden; /* Hide overflow to create a slider effect */
  position: relative;
  padding: 20px;
}

/* Slider Track */
.slider-track {
  display: flex;
  gap: 20px;
  animation: scroll 20s linear infinite;
}

/* Review Card */
.review-card {
  width: 250px;
  flex-shrink: 0; /* Prevent cards from shrinking */
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: white;
}

/* Review Icon */
.review-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 10px;
  border-radius: 50%;
  object-fit: cover;
}

/* Rating Stars */
.rating {
  font-size: 18px;
  color: #ffcc00;
  margin-bottom: 10px;
}

/* Review Text */
.review-text {
  font-size: 14px;
  color: #333;
}

/* Smooth Scrolling Animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .review-card {
    width: 200px;
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
    )
}
