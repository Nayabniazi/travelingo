
import React, { useState } from "react";

export default function Slider() {
    const [activeTab, setActiveTab] = useState("airport");

    // Data for each tab
    const servicesData = {
        intercity: {
            title: "Innercity and Intercity Rides",
            description: "Enjoy smooth and reliable transportation within and between cities.",
            image: "/imgs/inte.png",
        },
        corporate: {
            title: "Corporate Travel",
            description: "Streamline your corporate travel with premium, punctual services.",
            image: "/imgs/cop.png",
        },
        airport: {
            title: "Airport Transfers",
            description: "Enjoy smooth and hassle-free rides to and from the airport with precise timing.",
            image: "/imgs/flight.png",
        },
        tours: {
            title: "Special Tours",
            description: "Explore your destination with tailor-made special tours for unique experiences.",
            image: "/imgs/tour.png",
        },
    };

    return (
        <>
            <section className="section d-block">
                <div className="box-swiper">
                    <div className="swiper-container swiper-group-1 swiper-banner-1">
                     
                    </div>
                </div>

                <section style={{ padding: "50px 20px", marginTop: '80px' }}>
                    {/* Navigation Tabs */}
                    <div style={{
                        display: "flex", 
                        justifyContent: "center", 
                          
                        marginBottom: "20px", 
                        flexWrap: "wrap"
                    }}>
                        {Object.keys(servicesData).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                style={{
                                    
                                    padding: "10px 20px",
                                    margin: "5px",
                                    borderRadius: "10px",
                                    border: "none",
                                    cursor: "pointer",
                                    background: activeTab === key ? "#E3D7FE" : "#F3F3F3",
                                    color: activeTab === key ? "#000" : "#666",
                                    boxShadow: activeTab === key ? "0px 4px 8px rgba(0,0,0,0.1)" : "none",
                                }}
                            >
                                {servicesData[key].title.split(" ")[0]} {/* Show the first word */}
                            </button>
                        ))}
                    </div>

                    {/* Content Section */}
                    <div style={{
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "200px"
                    }}>
                        {/* Left: Text Content */}
                        <div style={{
                            flex: "1", 
                            maxWidth: "500px", 
                            padding: "20px", 
                            textAlign: "center"
                        }}>
                            <h2 style={{
                                fontSize: "28px", 
                                marginBottom: "20px", 
                                fontWeight: "bold"
                            }}>
                                {servicesData[activeTab].title}
                            </h2>
                            <p style={{
                                fontSize: "16px", 
                                marginBottom: "20px", 
                                color: "#555"
                            }}>
                                {servicesData[activeTab].description}
                            </p>
                            <button style={{
                                padding: "10px 20px", 
                                background: "orange", 
                                color: "black", 
                                borderRadius: "25px", 
                                border: "none", 
                                cursor: "pointer",
                                fontSize: "16px"
                            }}>
                                Read on
                            </button>
                        </div>

                        {/* Right: Image */}
                        <div style={{
                            flex: "1", 
                            maxWidth: "500px", 
                            padding: "20px", 
                            textAlign: "center"
                        }}>
                            <img
                                src={servicesData[activeTab].image}
                                alt={servicesData[activeTab].title}
                                style={{
                                    width: "100%", 
                                    height: "auto", 
                                    borderRadius: "10px", 
                                    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
                                }}
                            />
                        </div>
                    </div>
                </section>




                <style jsx>{
                  `
                  
                  @media (max-width: 768px) {
    .section {
       
    }

    .swiper-container {
        margin-bottom: 40px;
    }

    .image-row {
        flex-direction: column;
    }

    .image {
        width: 80%;
    }

    button {
        padding: 8px 15px;
    }
}

@media (max-width: 480px) {
    .section h2 {
        font-size: 22px;
    }

    .section p {
        font-size: 14px;
    }

    .image {
        width: 90%;
    }
}

                  
                  `}


                </style>
            </section>
        </>
    );
}
