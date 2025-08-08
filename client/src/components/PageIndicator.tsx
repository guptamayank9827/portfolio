import { useState } from 'react';
import { Steps, LinkOverlay } from '@chakra-ui/react';


interface PageIndicatorProps {
    view: string,
    componentView: string
}

const STEPS = [
    { key:"introduction" },
    { key:"experience" },
    { key:"skills" },
    { key:"projects" },
    { key:"contact" }
];



function PageIndicator(props:PageIndicatorProps) {
    let { componentView } = props;
    
    let activeStepIndex = STEPS.map(step => step.key).indexOf(componentView);
    if(activeStepIndex === -1) activeStepIndex = 0;

    const [ activeStep, setActiveStep ] = useState(0);

    if(activeStepIndex !== activeStep && activeStepIndex >= 0) {
        setActiveStep(activeStepIndex);
    }

    return(
        <div className='overlay-stepper'>

            <Steps.Root
                orientation={"vertical"}
                count={STEPS.length}
                // defaultStep={0}
                step={activeStepIndex}
                height="400px"
                colorPalette="teal"
                variant={"solid"}
                size={{base:"xs", md:"xs"}}
                mx={{base:1, md:2}}
                display={{base:"none", md:"flex"}}
            >
                <Steps.List>
                    {STEPS.map((step, index) => (
                        <Steps.Item key={index} index={index} title={step.key}>

                            <Steps.Indicator borderColor={"teal"} borderWidth="1px">
                                <LinkOverlay href={`/#${step.key}`} />
                            </Steps.Indicator>

                            <Steps.Separator borderColor={"teal"} borderWidth="1px" />
                        </Steps.Item>
                    ))}
                </Steps.List>

            </Steps.Root>

        </div>
    );
}

export default PageIndicator;