import { useState } from 'react';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageIndicator from './components/PageIndicator';
import ComingSoon from './components/ComingSoon';


interface HomeProps {
    view: string
};

function Home(props:HomeProps) {
    const { view } = props;
    const [componentView, setComponentView] = useState<string>("");

    const updateComponentView = (newComponentView:string) => {
        if(newComponentView && newComponentView !== componentView)
            setComponentView(newComponentView);
    }

    return (
        <>
            <NavBar view={view} />

            {view === "photography" ?
                <>
                    <ComingSoon />
                    <Contact view={view} />
                </>
                :
                <>
                    <PageIndicator view={view} componentView={componentView} />
                    <Introduction updateComponentView={updateComponentView} />
                    <Experience updateComponentView={updateComponentView} />
                    <Skills updateComponentView={updateComponentView} />
                    <Projects updateComponentView={updateComponentView} />
                    <Contact view={view} updateComponentView={updateComponentView} />
                </>
            }
        </>
    );
}

export default Home;