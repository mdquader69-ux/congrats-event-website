import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import CTASection from './CTASection';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;