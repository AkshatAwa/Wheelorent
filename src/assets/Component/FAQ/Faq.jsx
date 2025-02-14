import React, { useState } from "react";
import "./FAQ.css";
import carImage from "./jeep.png"; // Ensure car image is in the same folder

const FAQ = () => {
    const faqs = [
        {
            question: "Is Driver's Licence Required?",
            answer:
                "Yes, a valid driver's license is mandatory for renting any vehicle. International renters may need an International Driving Permit (IDP) along with their home country license.",
        },
        {
            question: "Type of Vehicles Available",
            answer: "We offer a variety of vehicles including sedans, SUVs, and luxury cars.",
        },
        {
            question: "What are the rental charges?",
            answer: "Rental charges depend on the vehicle type and duration of the rental.",
        },
        {
            question: "Are there any hidden fees?",
            answer: "No, we maintain transparency, and there are no hidden charges.",
        },
        {
            question: "How long can I rent a car?",
            answer: "Yes, we offer flexible rental durations, including hourly rentals.",
        },
        {
            question: "Document Verification policy",
            answer: "You need a valid driver's license and an ID proof for verification.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {/* Left Side: FAQ Section */}
            <div className="faq-content">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-box">
                    <div className="faq-grid">
                        {/* Left Column */}
                        <div className="faq-column">
                            {faqs.slice(0, 3).map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${openIndex === index ? "open" : ""}`}
                                >
                                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                        <span>{faq.question}</span>
                                        <button className="faq-toggle-btn">
                                            {openIndex === index ? "−" : "+"}
                                        </button>
                                    </div>
                                    <div className="faq-answer">
                                        {openIndex === index && <p>{faq.answer}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="faq-column">
                            {faqs.slice(3, 6).map((faq, index) => (
                                <div
                                    key={index + 3}
                                    className={`faq-item ${openIndex === index + 3 ? "open" : ""}`}
                                >
                                    <div className="faq-question" onClick={() => toggleFAQ(index + 3)}>
                                        <span>{faq.question}</span>
                                        <button className="faq-toggle-btn">
                                            {openIndex === index + 3 ? "−" : "+"}
                                        </button>
                                    </div>
                                    <div className="faq-answer">
                                        {openIndex === index + 3 && <p>{faq.answer}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Car Image */}
            <div className="faq-image">
                <img src={carImage} alt="Car" />
            </div>
        </div>
    );
};

export default FAQ;
