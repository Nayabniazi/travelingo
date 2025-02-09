import React from "react";

const InfoSection = ({ sections }) => {
  return (
    <div className="info-container">
      {sections.map((section, index) => (
        <div key={index} className={`info-card ${index % 2 !== 0 ? "reverse" : ""}`}>
          <div className="text-content">
            <h2 className="title">{section.title}</h2>
            <p className="description">{section.text}</p>
          </div>
          <div className="image-container">
            <img src={section.image} alt="info-section" className="info-image" />
          </div>
        </div>
      ))}

      <style jsx>{`
        .info-container {
          display: flex;
          flex-direction: column;
          gap: 90px;
          max-width: 1500px;
          margin: auto;
          padding: 20px;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #fff;
          padding: 30px;
          border-radius: 12px;
        
          max-width: 1400px;
          margin: auto;
        }

        .text-content {
          flex: 1;
          padding: 20px;
        }

        .title {
          font-size: 26px;
          font-weight: bold;
          margin-bottom: 12px;
          color: #000;
        }

        .description {
          font-size: 18px;
          color: #555;
          line-height: 1.5;
        }

        .image-container img {
        width:100%;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .info-image {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 12px;
        }

        /* Reverse layout for every second card */
        .reverse {
          flex-direction: row-reverse;
        }

        /* ✅ Mobile View */
        @media (max-width: 768px) {
          .info-card {
            flex-direction: column;
            text-align: center;
            padding: 20px;
          }

          .reverse {
            flex-direction: column;
          }

          .image-container {
            padding: 0;
            margin-top: 15px;
          }

          .info-image {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default InfoSection;
