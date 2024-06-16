import React from 'react';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Introduction from './components/Introduction';
import Skills from './components/Skills';

function Home() {
    return (
        <>
            <Introduction />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;