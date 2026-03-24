import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <nav className="navigation-header">
            <div className="container">
                <div className="nav-content">
                    <div className="navigation-logo">Congrats Events</div>
                    <ul className="navigation-menu">
                        <li><button className="navigation-link" onClick={() => scrollToSection('about')}>About</button></li>
                        <li><button className="navigation-link" onClick={() => scrollToSection('services')}>Services</button></li>
                        <li><button className="navigation-link" onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
                        <li><button className="navigation-link" onClick={() => scrollToSection('contact')}>Contact</button></li>
                    </ul>
                    <div className="navigation-utilities">
                        <a href="tel:+917601043817" className="btn-icon"><Phone size={18} /> Call</a>
                        <button className="btn-primary" onClick={() => scrollToSection('contact')}>Book Now</button>
                    </div>
                    <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <button className="mobile-menu-link" onClick={() => scrollToSection('about')}>About</button>
                    <button className="mobile-menu-link" onClick={() => scrollToSection('services')}>Services</button>
                    <button className="mobile-menu-link" onClick={() => scrollToSection('portfolio')}>Portfolio</button>
                    <button className="mobile-menu-link" onClick={() => scrollToSection('contact')}>Contact</button>
                    <a href="tel:+917601043817" className="mobile-menu-link">Call Now</a>
                </div>
            )}
        </nav>
    );
}