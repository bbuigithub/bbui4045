import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    <About />
                    <Projects />
                    <Skills />
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default App;
