import StepHeader from "../StepHeader/step-header";
import StepFooter from "../StepFooter/step-footer";
import SummarySection from "../SummarySection/summary-section";

export default function Checkout({currentStep, setCurrentStep, yearlyPlanBiling}){
    return(
        <div className="h-96 w-3/4 m-4 flex justify-center">
            <div className="flex flex-col min-h-96 w-4/6 justify-between items-stretch">
                <StepHeader
                headerName={"Finishing up"}
                headerDescription={"Double-check everything looks OK before confirming."}
                />
                <SummarySection />
                <StepFooter nextStep={"Confirm"} previousStep={"Third"} currentStep={currentStep} setCurrentStep={setCurrentStep}/>
            </div>
        </div>
    );
}