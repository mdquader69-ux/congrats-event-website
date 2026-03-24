import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Portfolio() {
    const [filter, setFilter] = useState('All');
    const [lightbox, setLightbox] = useState(null);
    const portfolioItems = [
        {id: 1, category: 'Wedding Stage', image: 'https://images.unsplash.com/photo-1519671482677-504be0ffa492?crop=entropy&cs=srgb&fm=jpg&q=80&w=800'},
        {id: 2, category: 'Decor', image: 'https://images.unsplash.com/photo-1695044834408-b55ac7c38bfc?crop=entropy&cs=srgb&fm=jpg&q=80&w=800'},
        {id: 3, category: 'Venue', image: 'https://images.unsplash.com/photo-1500633356885-2cefd62df270?crop=entropy&cs=srgb&fm=jpg&q=80&w=800'},
        {id: 4, category: 'Wedding Stage', image: 'https://images.unsplash.com/photo-1519167758993-8d4ed1d91dbe?crop=entropy&cs=srgb&fm=jpg&q=80&w=800'},
        {id: 5, category: 'Decor', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=srgb&fm=jpg&q=80&w=800'},
        {id: 6, category: 'Venue', image: 'https://images.unsplash.com/photo-1567621039855-43d5a1666984?crop=entropy&cs=srgb&fm=jpg&q=80&w=800'},
        {id: 7, category: 'Wedding Stage', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=srgb&fm=jpg&q=80&w=800'},
        {id: 8, category: 'Decor', image: 'https://images.unsplash.com/photo-1550707038-9efbd92f4338?crop=entropy&cs=srgb&fm=jpg&q=80&w=800'}
    ];
    const categories = ['All', 'Wedding Stage', 'Decor', 'Venue'];
    const filtered = filter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

    return (
        <section className="section-padding" id="portfolio">
            <div className="container">
                <div className="section-header">
                    <h2 className="heading-1">Our Portfolio</h2>
                    <p className="body-large section-description">Showcase of our finest event creations</p>
                </div>
                <div className="portfolio-filters">
                    {categories.map((cat) => (
                        <button key={cat} className={`filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
                    ))}
                </div>
                <div className="portfolio-grid">
                    {filtered.map((item) => (
                        <div key={item.id} className="portfolio-item" onClick={() => setLightbox(item)}>
                            <img src={item.image} alt={item.category} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-category">{item.category}</div>
                                <div className="portfolio-title">Event {item.id}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {lightbox && (
                <div className="lightbox" onClick={() => setLightbox(null)}>
                    <button className="lightbox-close" onClick={() => setLightbox(null)}><X size={24} /></button>
                    <img src={lightbox.image} alt={lightbox.category} />
                    <div className="lightbox-info">
                        <p>{lightbox.category}</p>
                    </div>
                </div>
            )}
        </section>
    );
}