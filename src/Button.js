import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  to, // Link path (optional)
  text, // Button text
  backgroundColor = "orange", // Default color
  color = "black", // Text color
  width = "", // Default width
  margin="",
  padding = "10px 20px", // Default padding
  borderRadius = "5px", // Default border-radius
  disabled = false, // Disabled state
  type = "button", // Default button type
  className = "account-btn",
  children, // Fallback to children if text is not provided
  onClick,
}) => {
  const buttonStyle = {
    backgroundColor,
    color,
    padding,
    border: "none",
    borderRadius,
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: "16px",
    width,
    margin,
   // Default margin
    opacity: disabled ? 0.6 : 1,
    transition: "0.3s",
  };

  if (to) {
    return (
      <Link to={to} style={{ textDecoration: "none" }}>
        <button type={type} className={`account-btn ${className}`} style={buttonStyle} onClick={onClick} disabled={disabled}>
          {text || children}
        </button>
      </Link>
    );
  }

  return (
    <button type={type} className={`account-btn ${className}`} style={buttonStyle} onClick={onClick} disabled={disabled}>
      {text || children}
    </button>
  );
};

export default Button;
