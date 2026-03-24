import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function CTASection() {
    const handleWhatsApp = () => {
        window.open('https://wa.me/917601043817?text=Hi%20Congrats%20Events!%20Id%20like%20to%20discuss%20my%20event', '_blank');
    }; 
    return (
        <section className="cta-section">
            <div className="cta-overlay"></div>
            <div className="cta-content container">
                <h2 className="hero-medium">Let's Create Something Extraordinary</h2>
                <p className="body-large">Ready to plan your dream event? Get in touch with our expert team today</p>
                <div className="cta-buttons">
                    <button className="btn-primary" onClick={handleWhatsApp}><MessageCircle size={18} /> Chat on WhatsApp</button>
                    <a href="tel:+917601043817" className="btn-secondary"><Phone size={18} /> Call Now</a>
                </div>
            </div>
        </section>
    );
}