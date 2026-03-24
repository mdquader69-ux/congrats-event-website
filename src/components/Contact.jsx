import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({name: '', phone: '', eventType: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Hi Congrats Events! I'm ${formData.name} interested in planning a ${formData.eventType} event. Please contact me at ${formData.phone}`;
        window.open(`https://wa.me/917601043817?text=${encodeURIComponent(message)}`, '_blank');
        setFormData({name: '', phone: '', eventType: ''});
    };

    return (
        <section className="section-padding" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="heading-1">Get In Touch</h2>
                    <p className="body-large section-description">Let's discuss your event and make it unforgettable</p>
                </div>
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="heading-3">Location</p>
                                <p className="body-small">Hyderabad, Telangana, India</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="heading-3">Phone</p>
                                <a href="tel:+917601043817" className="contact-link">+91 76010 43817</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="heading-3">Email</p>
                                <a href="mailto:hello@congratsevents.com" className="contact-link">hello@congratsevents.com</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <Clock size={24} />
                            </div>
                            <div>
                                <p className="heading-3">Hours</p>
                                <p className="body-small">Available 24/7 for inquiries</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <p className="heading-3">WhatsApp</p>
                                <a href="https://wa.me/917601043817" className="contact-link" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Your Name</label>
                                <input type="text" className="form-input" placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" className="form-input" placeholder="+91" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Event Type</label>
                                <input type="text" className="form-input" placeholder="Wedding, Corporate, etc." value={formData.eventType} onChange={(e) => setFormData({...formData, eventType: e.target.value})} required />
                            </div>
                            <button type="submit" className="btn-primary" style={{width: '100%'}}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}