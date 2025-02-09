import { Link } from "react-router-dom";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <h2 className="color-black text-center mb-4 wow animate__animated animate__fadeIn">
            
          </h2>
          <form className="contact-form wow animate__animated animate__fadeIn" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="font-md color-grey-900">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="font-md color-grey-900">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="font-md color-grey-900">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Enter your message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-brand-2 wow animate__animated animate__fadeIn" style={{ backgroundColor: 'orange', color: 'black', borderRadius: '25px' }}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

     


      <style jsx>{
  `
 /* General Styles */
.contact-form {
  background: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 1000px; /* Increased width */
  width: 100%;
  margin-left: 300px; /* Left margin for laptops */
}

/* Input and Textarea fields */
.form-control {
  border-radius: 6px;
  padding: 15px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
}

/* Label styles */
label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  font-size: 16px;
}

/* Button styles */
button[type="submit"] {
  padding: 14px 35px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 25px;
  border: none;
  background-color: orange;
  color: black;
  transition: 0.3s ease-in-out;
}

button[type="submit"]:hover {
  background-color: darkorange;
}

/* Laptop Screens (1024px and above) */
@media (min-width: 1024px) {
  .contact-form {
    max-width: 1000px;
    margin-left: 300px; /* Keep left margin */
  }
}

/* Tablets (max-width: 1023px) */
@media (max-width: 1023px) {
  .contact-form {
    max-width: 90%;
    margin: 30px auto; /* Center form */
    padding: 30px;
  }
  .form-control {
    font-size: 15px;
    padding: 12px;
  }
  button[type="submit"] {
    font-size: 17px;
    padding: 12px 30px;
  }
}

/* Mobile Phones (max-width: 768px) */
@media (max-width: 768px) {
  .contact-form {
    max-width: 95%;
   margin-left:30px;/* Center form */
    padding: 25px;
  }
  .form-control {
    font-size: 14px;
    padding: 10px;
  }
  label {
    font-size: 14px;
  }
  button[type="submit"] {
    font-size: 16px;
    padding: 10px 25px;
  }
}

/* Small Mobile Phones (max-width: 480px) */
@media (max-width: 480px) {
  .contact-form {
    max-width: 98%;
    padding: 20px;
  margin-left:30px;/* Center form */
  }
  .form-control {
    font-size: 14px;
    padding: 10px;
  }
  button[type="submit"] {
    font-size: 15px;
    padding: 10px 20px;
  }
}

  
  `}

</style>


        
        
        
        
        
        
       
    </>
  );
};

export default Home;
