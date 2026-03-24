import React from 'react';
export default function Services() {
    const services = [
        {title: 'Luxury Wedding Planning', image: 'https://images.unsplash.com/photo-1519671482677-504be0ffa492?crop=entropy&cs=srgb&fm=jpg&q=80&w=600', description: 'Complete wedding planning from concept to execution'},
        {title: 'Designer Stage & Decor', image: 'https://images.unsplash.com/photo-1695044834408-b55ac7c38bfc?crop=entropy&cs=srgb&fm=jpg&q=80&w=600', description: 'Bespoke stage designs and premium decoration'},
        {title: 'Engagement & Reception', image: 'https://images.unsplash.com/photo-1500633356885-2cefd62df270?crop=entropy&cs=srgb&fm=jpg&q=80&w=600', description: 'Elegant engagement and reception styling'},
        {title: 'Corporate Events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=srgb&fm=jpg&q=80&w=600', description: 'Professional corporate gatherings and conferences'},
        {title: 'Theme Events', image: 'https://images.unsplash.com/photo-1519167758993-8d4ed1d91dbe?crop=entropy&cs=srgb&fm=jpg&q=80&w=600', description: 'Unique themed celebrations and parties'},
    ];
    return (
        <section className="section-padding" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="heading-1">Our Services</h2>
                    <p className="body-large section-description">Comprehensive event management solutions tailored to your vision</p>
                </div>
                <div className="services-grid">
                    {services.map((service, idx) => (
                        <div key={idx} className="service-card">
                            <div className="service-image-wrapper">
                                <img src={service.image} alt={service.title} className="service-image" />
                                <div className="service-overlay"></div>
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p className="body-small">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}