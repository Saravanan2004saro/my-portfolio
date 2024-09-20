import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './App.css'

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );

};

export default App;
