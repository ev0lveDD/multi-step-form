import StepHeader from "../StepHeader/step-header";
import StepFooter from "../StepFooter/step-footer";
import CheckboxSection from "../CheckboxSection/checkbox-section";

export default function Addons({currentStep, setCurrentStep}) {
    return(
        <div className="h-96 w-3/4 m-4 flex justify-center">
            <div className="flex flex-col min-h-96 w-4/6 justify-between items-stretch">
                <StepHeader
                headerName={"Pick add-ons"}
                headerDescription={"Add-ons help enhance your gaming experience."}
                />
                <CheckboxSection />
                <StepFooter nextStep={"Fourth"} previousStep={"Second"} currentStep={currentStep} setCurrentStep={setCurrentStep}/>
            </div>
        </div>
    );
}