// import React from 'react';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


interface HomeProps {
    view: string
};

function Home(props:HomeProps) {
    const { view } = props;

    return (
        <>
            <NavBar view={view} />

            {view === "photography" ?
                <>
                    <Contact view={view} />
                </>
                :
                <>
                    <Introduction />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Contact view={view} />
                </>
            }
        </>
    );
}

export default Home;