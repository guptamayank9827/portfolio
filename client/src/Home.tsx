import React from 'react';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


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