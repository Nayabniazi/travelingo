import { Link } from "react-router-dom";
// Make sure to import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section about"style={{marginTop:'0px',marginRight:'0px'}}>
          <div className="logo" >
            <img src="./imgs/logo.png" alt="Company Logo" />
          </div>
          <p style={{marginLeft:'70px',marginRight:'50px'}}>
          Providing world-class logistics solutions, including air freight, 
          ocean freight, warehousing, and e-commerce fulfillment.
          </p>
          
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="#">Top Destinations</Link></li>
            <li><Link to="#">Support</Link></li>
            <li><Link to="#">FAQ</Link></li>
            <li><Link to="#">Solutions</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
          <ul>
            <li><Link to="#">Top Destinations</Link></li>
            <li><Link to="#">Support</Link></li>
            <li><Link to="#">FAQ</Link></li>
            <li><Link to="#">Solutions</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
         
            
          </ul>
            
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      
      <style jsx>{
        `
        
        /* General Footer Styles */
.footer {
  background: black;
  color: white;
  padding: 50px 20px;
  font-family: "Arial", sans-serif;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1500px;
    margin: auto;
  }
  
  .footer-section {
  
    flex: 1;
    min-width: 200px;
    margin: 20px;
  }
  
  .footer-section h4 {
    font-size: 18px;
    margin-bottom: 1px;
    color: #ffa825;
    border-bottom: 2px solid #ffa825;
    padding-bottom: 5px;
    display: inline-block;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin: 10px 0;
  }
  
  .footer-section ul li a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

.footer-section ul li a:hover {
  color: #ffa825;
}

/* About Section */
.about p {
  font-size: 14px;
  line-height: 1.6;
  color: #ddd;
}

.logo img {
  width: 150px;
  margin-bottom: 15px;
}

/* Social Icons */
.social-icons {
  margin-top: 15px;
  color:red;
}

.social-icons a {
color:red;
  display: inline-block;
  color: white;
  font-size: 16px;
  margin-right: 15px;
  transition: transform 0.3s ease-in-out;
}

.social-icons a:hover {
  transform: scale(1.2);
  color: #ffa825;
}

/* Footer Bottom */
.footer-bottom {

  text-align: center;
  padding: 15px;
  border-top: 1px solid #333;
  margin-top: 20px;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }

  .footer-section {
    margin: 10px 0;
  }

  .social-icons {
    justify-content: center;
  }
}

        
        
        
        `}

      </style>
    </footer>
  );
}
