import { Step, StepIndicator, StepSeparator, StepStatus, Stepper, useSteps, LinkOverlay } from '@chakra-ui/react'

interface PageIndicatorProps {
    view: string,
    componentView: string
}

const steps = [
    { key:"introduction" },
    { key:"experience" },
    { key:"skills" },
    { key:"projects" },
    { key:"contact" }
];


function PageIndicator(props:PageIndicatorProps) {

    let { componentView } = props;
    let activeStepIndex = steps.map(step => step.key).indexOf(componentView);
    
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length
    })

    if(activeStepIndex !== activeStep) {
        setActiveStep(activeStepIndex);
    }

    return(
        <div className='overlay-stepper'>
            <Stepper index={activeStep} size="sm" colorScheme='teal' orientation='vertical' height='30vh' gap='0' style={{alignItems:"flex-end", marginRight:"10px"}}>
                {steps.map((step, index) => (
                    <Step key={index} onClick={() => setActiveStep(index)}>

                        <LinkOverlay href={`/#${step.key}`}>
                            <StepIndicator>
                                <StepStatus />
                            </StepIndicator>
                        </LinkOverlay>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default PageIndicator;