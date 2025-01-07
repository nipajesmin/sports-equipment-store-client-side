import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const FAQs = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "What is EquiSports?",
            answer: "EquiSports is a premier provider of high-quality sports equipment for athletes and enthusiasts worldwide."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to many countries. Shipping costs and times vary by location."
        },
        {
            question: "What is your return policy?",
            answer: "We accept returns within 30 days of purchase, provided the item is in its original condition. Please visit our Returns page for more details."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach our customer support team via email at support@equisports.com."
        },
        {
            question: "Do you offer discounts for bulk orders?",
            answer: "Yes, we offer special discounts for bulk orders. Please contact us for more details."
        }
    ];

    return (
        <div>
            <Navbar></Navbar>
            <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', lineHeight: '1.8', fontSize: '18px' }}>
                <h1 style={{ textAlign: 'center', color: '#2c3e50', fontSize: '36px' }}>Frequently Asked Questions</h1>
                <div style={{ marginTop: '30px', fontSize: '20px' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <div
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    cursor: 'pointer',
                                    color: '#34495e',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '22px',
                                    fontWeight: 'bold'
                                }}
                            >
                                {faq.question}
                                <span>{openFAQ === index ? '-' : '+'}</span>
                            </div>
                            {openFAQ === index && (
                                <p style={{ marginTop: '10px', color: '#555', fontSize: '18px' }}>{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default FAQs;
