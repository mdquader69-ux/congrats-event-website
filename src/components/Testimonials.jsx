import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonials = [
        {name: 'Priya & Arjun', text: 'Congrats Events made our wedding day absolutely magical. Every detail was perfect!', rating: 5},
        {name: 'Divya Sharma', text: 'Professional, creative, and incredibly responsive. Highly recommend for any occasion!', rating: 5},
        {name: 'Rahul & Isha', text: 'The team transformed our vision into reality. Simply outstanding work!', rating: 5},
        {name: 'Neha Kapoor', text: 'Best event planners in Hyderabad. Worth every penny!', rating: 5}
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section-padding" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 className="heading-1">What Clients Say</h2>
                    <p className="body-large section-description">Real stories from happy couples and event hosts</p>
                </div>
                <div className="testimonial-carousel">
                    <div className="testimonial-content">
                        <div className="testimonial-stars">
                            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                <Star key={i} size={20} fill="currentColor" style={{color: '#D4AF37'}} />
                            ))}
                        </div>
                        <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
                        <div className="testimonial-author">
                            <p className="heading-3">{testimonials[activeIndex].name}</p>
                        </div>
                    </div>
                    <button className="carousel-btn prev" onClick={prevTestimonial}><ChevronLeft size={24} /></button>
                    <button className="carousel-btn next" onClick={nextTestimonial}><ChevronRight size={24} /></button>
                </div>
                <div className="carousel-dots">
                    {testimonials.map((_, idx) => (
                        <button key={idx} className={`dot ${activeIndex === idx ? 'active' : ''}`} onClick={() => setActiveIndex(idx)}></button>
                    ))}
                </div>
            </div>
        </section>
    );
}