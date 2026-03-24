import React from 'react';
import { Sparkles, TrendingUp, Clock, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {icon: Sparkles, title: 'Bespoke Designs', description: 'Custom-tailored designs that reflect your unique style'},
    {icon: TrendingUp, title: 'Budget Optimization', description: 'Luxury events without breaking the bank'},
    {icon: Clock, title: '24/7 Support', description: 'Round-the-clock availability for peace of mind'},
    {icon: MapPin, title: 'Local Expertise', description: 'Deep knowledge of Hyderabad venues and vendors'}
  ];
  return (
    <section className="section-padding" id="why-us" style={{backgroundColor: '#f6f5e8'}}>
      <div className="container">
        <div className="section-header">
          <h2 className="heading-1">Why Choose Us</h2>
          <p className="body-large section-description">Excellence in every detail, guaranteed</p>
        </div>
        <div className="why-grid">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="why-card">
                <div className="why-icon">
                  <Icon size={32} />
                </div>
                <h3>{benefit.title}</h3>
                <p className="body-small">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}