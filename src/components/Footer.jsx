import React from 'react';
import { MessageCircle, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h2 className="footer-title">Congrats Events</h2>
            <p className="footer-tagline">Crafting extraordinary moments since 2015</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li>Wedding Planning</li>
              <li>Stage & Decor</li>
              <li>Corporate Events</li>
              <li>Theme Events</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact">
              <li><MapPin size={16} /> <span>Hyderabad, Telangana</span></li>
              <li><Phone size={16} /> <a href="tel:+917601043817">+91 76010 43817</a></li>
              <li><MessageCircle size={16} /> <a href="https://wa.me/917601043817" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="body-small">© 2026 Congrats Event Management. All rights reserved.</p>
          <div className="footer-credit">
            <span>Designed & Developed by</span> <strong>Modern Web Solutions</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}