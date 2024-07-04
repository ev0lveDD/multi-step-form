import StepHeader from "../StepHeader/step-header";
import InputSection from "../InputSection/input-section";
import StepFooter from "../StepFooter/step-footer";

export default function PersonalInfo({currentStep, setCurrentStep}){
    return(
        <div className="h-96 w-3/4 m-4 flex justify-center">
            <div className="flex flex-col min-h-96 w-4/6 justify-between items-stretch">
                <StepHeader
                headerName={"Personal Info"}
                headerDescription={"Please provide your name, email address, and phone number."}
                />
                <InputSection />
                <StepFooter nextStep={"Second"} previousStep={null} currentStep={currentStep} setCurrentStep={setCurrentStep}/>
            </div>
        </div>
    );
}