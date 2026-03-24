import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

export default function About() {
    const stats = [
        {icon: Award, value: '200+', label: 'Events Planned'},
        {icon: Users, value: '500+', label: 'Happy Clients'},
        {icon: CheckCircle, value: '4.8★', label: 'Rating'},
        {icon: Clock, value: '24/7', label: 'Support'},
    ];
    return (
        <section className="section-padding" id="about" style={{backgroundColor: '#f6f5e8'}}>
            <div className="container">
                <div className="grid-two-column">
                    <div className="about-content">
                        <h2 className="heading-1">Our Story</h2>
                        <p className="body-large">Since 2015, Congrats Event Management has been crafting unforgettable moments for Hyderabad's most discerning clientele. We believe every event tells a unique story.</p>
                        <p className="body-large">Our team of expert designers, coordinators, and planners work tirelessly to transform your vision into reality with precision and elegance.</p>
                    </div>
                    <div className="about-stats">
                        <div className="stats-grid">
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={idx} className="stat-card">
                                        <div className="stat-icon"><Icon size={32} /></div>
                                        <div className="stat-value">{stat.value}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}