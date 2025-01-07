import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', lineHeight: '1.8', fontSize: '18px' }}>
                <h1 style={{ textAlign: 'center', color: '#2c3e50', fontSize: '36px' }}>About Us</h1>
                <p style={{ marginTop: '30px', fontSize: '20px' }}>
                    Welcome to EquiSports! We are a dedicated team passionate about providing high-quality sports equipment to athletes and enthusiasts worldwide. Our goal is to inspire and empower individuals to achieve their best performance by offering reliable, innovative, and durable products.
                </p>
                <p style={{ marginTop: '30px', fontSize: '20px' }}>
                    Since our inception, we have been committed to excellence, ensuring that every product meets the highest standards of quality and functionality. We believe in the transformative power of sports and strive to support athletes at every level, from beginners to professionals.
                </p>
                <p style={{ marginTop: '30px', fontSize: '20px' }}>
                    At EquiSports, we prioritize customer satisfaction and are constantly working to enhance your experience. Thank you for choosing us as your trusted partner in sports. Together, let's push boundaries and achieve greatness.
                </p>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default AboutUs;
