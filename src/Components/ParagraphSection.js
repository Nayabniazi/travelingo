import React from "react";

const ParagraphSection = ({ sections, containerStyle }) => {
  return (
    <div className="layout-container" style={containerStyle}>
      {sections.map((section, index) => (
        <div key={index} className="content-section">
          <div className="line"></div>
          <div className="content-row">
            <h2 className="heading">{index + 1}. {section.heading}</h2>
            <p className="paragraph font-md color-grey-900 mb-20">
              {section.content}
            </p>
          </div>
          <div className="line"></div>
        </div>
      ))}
      
      <style jsx>{`
        .layout-container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .content-section {
          margin-bottom: 20px;
        }

        .line {
          height: 1px;
          background-color: lightgray;
          margin: 10px 0;
        }

        .content-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .heading {
          flex: 1;
          font-size: 20px;
          font-weight: bold;
          color: black;
          text-align: left;
        }

        .paragraph {
          flex: 2;
          font-size: 16px;
          color: #333;
          margin-left: 20px;
          text-align: left;
        }

        /* ✅ Mobile: Margin Left = 0px & Centered */
        @media (max-width: 768px) {
        .layout-container {
       
          padding: 20px;
          font-family: Arial, sans-serif;
        }
          .content-row {
            flex-direction: column;
            text-align: center;
          }

          .heading {
            text-align: center;
            font-size: 18px;
          }

          .paragraph {
            margin-left: 0px;  /* 👈 No left margin on mobile */
            margin-top: 10px;
            text-align: center;
            font-size: 15px;
          }
        }

        /* ✅ Laptop Screens: Margin Left = 100px */
        @media (min-width: 1024px) {
          .paragraph {
            margin-left: 100px;  /* 👈 Added left margin for laptops */
          }
            .layout-container {
            margin-left:100px;
            margin-right:100px;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        }
      `}</style>
    </div>
  );
};

export default ParagraphSection;
