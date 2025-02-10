import React, { useState } from "react";
import styled from "styled-components";

// Styled Components for Responsive Modern Design
const FAQContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;
  background-color: #f9f9f9;
  margin-top:200px;
  margin-right:130px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width:340px;
    margin-top:0px;
  }
`;

// Left Side - Image Gallery
const FAQLeft = styled.div`
  width: 45%;
  text-align: center;
margin-left:100px;
  h2 {
    font-size: 26px;
    margin-bottom: 20px;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left:0px;
  }
`;

const FAQImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FAQImgMain = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const FAQImgGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const FAQImgSmall = styled.img`
  width: 250px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 80px;
  }
`;

// Right Side - Accordion
const FAQRight = styled.div`
  width: 50%;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FAQItem = styled.div`
  background-color: white;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: 0.3s ease-in-out;
`;

const FAQQuestion = styled.div`
  cursor: pointer;
  background: #000;
  color: white;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #333;
  }
`;

const FAQAnswer = styled.div`
  padding: ${({ isActive }) => (isActive ? "15px" : "0")};
  background: #f8f9fa;
  color: #333;
  font-size: 14px;
  max-height: ${({ isActive }) => (isActive ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
`;

const FAQIcon = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

// Main Component
export default function FAQsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    
    <FAQContainer>
      
      <FAQLeft>
        <h2>Frequently Asked Questions</h2>
        <FAQImages>
          <FAQImgMain src="/imgs/drive2.png" alt="Transport" />
          <FAQImgGroup>
            <FAQImgSmall src="/imgs/drive3.png" alt="Car" />
            <FAQImgSmall src="/imgs/lady.png" alt="Lady" />
          </FAQImgGroup>
        </FAQImages>
      </FAQLeft>

      {/* Right Side - FAQ Accordion */}
      <FAQRight>
        {faqData.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion onClick={() => handleToggle(index)}>
              {faq.question}
              <FAQIcon>{activeIndex === index ? "−" : "+"}</FAQIcon>
            </FAQQuestion>
            <FAQAnswer isActive={activeIndex === index}>{activeIndex === index && faq.answer}</FAQAnswer>
          </FAQItem>
        ))}
      </FAQRight>
    </FAQContainer>
    </>
  );
}

// FAQ Data
const faqData = [
  {
    question: "Do I need to create an account to make reservations?",
    answer: "No! You don't need to create an account to make reservations. However, by registering, you can track live updates from your chauffeurs, modify your reservation, view trip history, and much more."
  },
  {
    question: "How can I edit or update my reservation?",
    answer: "You can easily edit, modify, or update your reservation by logging into your account."
  },
  {
    question: "When will my reservation be confirmed?",
    answer: "For non-last-minute reservations, we typically allow up to 24 hours to process and confirm your chauffeur details."
  },
  {
    question: "What happens if my driver is late?",
    answer: "If your driver is late, please contact customer support immediately. We will provide you with real-time updates or arrange an alternative."
  }
];
