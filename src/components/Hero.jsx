import React, { useState, useEffect } from 'react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';

export default function Hero() {
    const [activeImage, setActiveImage] = useState(0);
    const heroImages = [
        'https://images.unsplash.com/photo-1519671482677-504be0ffa492?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nfGVufDB8fHx8MTc3NDMxOTMwNXww&ixlib=rb-4.1.0&q=85',
        'https://images.unsplash.com/photo-1695044834408-b55ac7c38bfc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVjb3J8ZW58MHx8fHwxNzc0MzE5MzA1fDA&ixlib=rb-4.1.0&q=85'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % heroImages.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const handleWhatsApp = () => {
        window.open('https://wa.me/917601043817?text=Hi%20Congrats%20Events!%20I%20want%20to%20book%20for%20my%20event', '_blank');
    };

    return (
        <section className="hero-section" id="home">
            <div className="hero-background">
                {heroImages.map((img, idx) => (
                    <div key={idx} className={`hero-image ${activeImage === idx ? 'active' : ''}`} style={{backgroundImage: `url(${img})`}}></div>
                ))}
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <div className="trust-badge">
                        <span>⭐ 4.8 Rating</span><span>•</span><span>Trusted by Clients</span>
                    </div>
                    <h1 className="hero-large">Your Dream Event<br />Perfectly Executed</h1>
                    <p className="hero-subtitle">Premium event planning & management for Hyderabad's elite</p>
                    <div className="urgency-text">Limited bookings available for upcoming wedding season</div>
                    <div className="hero-cta">
                        <button className="btn-primary" onClick={handleWhatsApp}><MessageCircle size={18} /> Book Your Dream Event</button>
                        <a href="tel:+917601043817" className="btn-secondary"><Phone size={18} /> Call Now</a>
                    </div>
                </div>
            </div>
            <div className="hero-scroll-indicator">
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}