
import { useNavigate } from "react-router-dom";
  
 import React, { useState } from "react";
 import { Link } from "react-router-dom";
 
export default function Brands() {
  const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => setIsOpen(!isOpen);

    return (
        <>
<style jsx>
  {`
    .image-section {
      margin-top: 80px;
      margin-bottom: 50px;
  
    }

    .image-section h3 {
      margin-bottom: 50px;
      font-size: 24px;
      text-align: center; /* Center align title */
    }

    .image-row {
      
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap; /* Allow images to wrap on smaller screens */
      margin-left: auto;
      margin-right: auto;
    }

    .image {
      margin-right: 30px;
      margin-bottom: 30px;
      transition: all 0.3s ease;
    }

    .image:nth-child(1) {
      width: 205px;
     margin-right:130px;
    }

    .image:nth-child(2) {
      width: 205px;
        margin-left:100px;
    }

    .image:nth-child(3) {
      width: 100px;
margin-left:180px;
    }

    .image:nth-child(4) {
      width: 250px;

     
    }

    .image:nth-child(5) {
      width: 170px;

    }

    .image:nth-child(6) {
      width: 250px;
     
    }

    /* Desktop & Laptop Screens (min-width: 1024px) */
    @media (min-width: 1024px) {
      .image-row {
        width: 80%;
        margin-left: 130px;
        margin-right: 130px;
      }

      .image {
        width: 205px;
      }
    }

    /* Tablets and Smaller Laptops (max-width: 1024px) */
    @media (max-width: 1024px) {
      .image-section h3 {
        font-size: 20px;
      }

      .image-row {
        width: 85%;
        margin-left: 50px;
        margin-right: 50px;
      }

      .image {
        width: 150px;
        margin-right: 15px;
      }
    }

    /* Small Mobile Screens (max-width: 768px) */
    @media (max-width: 768px) {
      .image-section h3 {
        font-size: 18px;
      }

      .image-row {
        width: 90%;
        margin-left: 20px; /* Reduced margin-left for small screens */
        margin-right: 20px; /* Reduced margin-right for small screens */
      }

      .image {
        width: 120px;
        margin-right: 0;
        margin-bottom: 20px;
      }
    }

    /* Very Small Mobile Screens (max-width: 480px) */
    @media (max-width: 480px) {
      .image-section h3 {
        font-size: 16px;
      }

      .image-row {
        width: 100%;
        margin-left: 0; /* No margin-left */
        margin-right: 0; /* No margin-right */
      }

      .image {
        width: 100px;
        margin-bottom: 15px;
      }
    }

    /* Special Case for Very Small Screen Widths (max-width: 200px) */
    @media (max-width: 200px) {
      .image-section h3 {
        font-size: 12px;
      }

      .image-row {
        width: 100%;
        margin-left: 0; /* No margin-left for extremely small screens */
        margin-right: 0; /* No margin-right for extremely small screens */
      }

      .image {
        width: 80px; /* Adjust image size for 200px screen */
        margin-right: 5px;
      }
    }
  `}
</style>

<section className="image-section">
  <h3>Trusted by professionals at</h3>

  <div className="image-row top-row">
    <img src="./imgs/netflix.png" alt="Image 2" className="image" />
    <img src="./imgs/google.png" alt="Image 3" className="image" />
    <img src="./imgs/apple.png" alt="Image 4" className="image" />
  </div>

  <div className="image-row bottom-row">
    <img src="./imgs/microsoft.png" alt="Image 6" className="image" />
    <img src="./imgs/adidas.png" alt="Image 7" className="image" />
    <img src="./imgs/more.png" alt="Image 8" className="image" />
  </div>
</section>


<style jsx>
  {`
    .section-wrapper {
      display: flex;
   
      margin-left: 130px;
      margin-right: 130px;
      margin-top: 80px;
      flex-wrap: wrap;
    }

    /* Left Card */
    .card {
      padding: 20px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .dark-card {
      background-color: #333;
      color: white;
      width: 45%; /* Dark card width */
    }

    .light-card {
      background-color: #f5f5f5;
      color: black;
      width: 55%; /* Light card width (greater than dark card) */
    }

    .dark-card h2,
    .light-card h2 {
      font-size: 25px;
      margin-bottom: 40px;
    }

    .dark-card ul,
    .light-card ul {
      list-style-type: none;
      padding: 0;
    }

    .dark-card li,
    .light-card li {
      margin-bottom: 20px;
    }

    .cta-button {
      width: 200px;
      height: 40px;
      background-color: rgb(241, 162, 33);
      color: black;
      font-size: 16px;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      text-align: center;
      padding: 10px;
    }

    .cta-button:hover {
      background-color: rgb(182, 124, 37);
    }

    /* Responsive Breakpoints */

    @media (max-width: 1024px) {
      .section-wrapper {
        flex-direction: column;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
      }

      .light-card {
        background-color: #f5f5f5;
        color: black;
        width: 55%; /* Light card width (greater than dark card) */
      }
  
      .card {
       
        margin-bottom: 20px;
      }

      .cta-button {
        width: 180px;
        font-size: 14px;
      }

      .dark-card h2,
      .light-card h2 {
        font-size: 22px;
      }

      .dark-card li,
      .light-card li {
        font-size: 14px;
      }

      .text-content p {
        font-size: 14px;
      }
    }

    @media (max-width: 768px) {
      .section-wrapper {
        margin-left: 10px;
        margin-right: 10px;
      }

      .card {
        width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
      }

      .cta-button {
        width: 160px;
        font-size: 14px;
      }

      .dark-card h2,
      .light-card h2 {
        font-size: 20px;
      }

      .dark-card li,
      .light-card li {
        font-size: 13px;
      }
    }

    @media (max-width: 480px) {
      .section-wrapper {
        margin-left: 5px;
        margin-right: 5px;
      }

      .card {
        width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
      }

      .cta-button {
        width: 150px;
        font-size: 12px;
      }

      .dark-card h2,
      .light-card h2 {
        font-size: 18px;
      }

      .dark-card li,
      .light-card li {
        font-size: 12px;
      }
    }

    /* Remove gap between cards on larger screens (laptop and desktop) */
    @media (min-width: 1025px) {
      .card {
        margin-bottom: 0; /* No gap between the cards */
      }
    }
  `}
</style>

<div className="section-wrapper">
  {/* Left Card */}
  <div className="card dark-card">
    <h2 style={{color:'white'}}>Looking to hire a full-time driver?</h2>
    <div className="card-content">
      <h2 style={{color:'white'}}>What you receive?</h2>
      <ul>
        <li>✅ Full-time professional chauffeur</li>
        <li>✅ Customized schedule that fits your busy lifestyle</li>
        <li>✅ Flexible and transparent pricing</li>
      </ul>
      <a href="Bookingcars" style={{ textDecoration: 'none' }}>
        <button className="cta-button">Get started →</button>
      </a>
    </div>
  </div>

  {/* Right Card */}
  <div className="card light-card" >
    <div className="text-and-images">
      {/* Left Side: Text */}
      <div className="text-content">
        <h2>The easy way to plan any event.</h2>
        <p>
          Partnering with industry-leading event planners, we ensure that
          every aspect of your event logistics, including transportation
          needs, is expertly managed from start to finish.
        </p>
        <ul>
          <li>✅ Stress-free planning</li>
          <li>✅ All logistics and execution are handled by professionals</li>
          <li>✅ We cover your transportation needs at 100%</li>
        </ul>
        <ul>
      <li style={{ marginTop: "10px" }}>
        <Link to="/Bookingcars"></Link>
      </li>
      <li>
        <button className="cta-button" onClick={() => navigate("/Bookingcars")}>
          Get started →
        </button>
      </li>
    </ul>

      </div>
    </div>
  </div>
</div>



{isOpen && (
        <div
          style={{
            position: 'fixed',
           top:"0",
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height:'700px',
              marginTop:'100px',
              width: '700px',
              backgroundColor: 'white',
              borderRadius: '10px',
              display: 'flex',
              overflow: 'hidden',
            }}
          >
            {/* Left Image Section */}
            <div
              style={{
                flex: 1,
                backgroundImage: 'url("/img/backu.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            {/* Right Form Section */}
            <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '1rem' }}>Get in Touch</h3>
              <form>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                  />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
                   Last  Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Email *
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="email"
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                    required />
                </div>
             
                <div className="form-group">
                                        <label>How often do you organize events?</label>
                                        <div className="options">
                                            <button style={{backgroundColor:'blue',   padding: "7px 20px",color:'whitesmoke',borderRadius:'15px',
                    borderradius: "5px"}} type="button">1-3</button>
                                            <button style={{backgroundColor:'blue', padding: "7px 20px",color:'whitesmoke',borderRadius:'15px',}}  type="button">4-6</button>
                                            <button style={{backgroundColor:'blue', padding: "7px 20px",color:'whitesmoke',borderRadius:'15px',}}  type="button">7-10</button>
                                            <button style={{backgroundColor:'blue', padding: "7px 20px",color:'whitesmoke',borderRadius:'15px',}}  type="button">10+</button>
                                        </div>
                                    </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="comment" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    placeholder="Enter your comment"
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      resize: 'none',
                      height: '80px',
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'blue',
                    color: 'white',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Submit
                </button>
              </form>
              <button
                onClick={togglePopup}
                style={{
                  marginTop: '10px',
                  background: 'none',
                  border: 'none',
                  color: 'red',
                  cursor: 'pointer',
                  alignSelf: 'flex-end',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}













        </>
    )
}
