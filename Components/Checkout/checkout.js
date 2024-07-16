import StepHeader from "../StepHeader/step-header";
import StepFooter from "../StepFooter/step-footer";
import SummarySection from "../SummarySection/summary-section";

export default function Checkout({currentStep, setCurrentStep, yearlyPlanBiling, firstAddonSelected, secondAddonSelected, thirdAddonSelected, selectedPlan, selectedPlanValue, totalValue}){

    function proceedCheckout(nextStep) {
        setCurrentStep(nextStep);
    }

    return(
        <div className="h-96 w-5/6 md:w-3/4 m-4 bg-white rounded-xl flex justify-center">
            <div className="flex flex-col min-h-96 w-5/6 md:w-4/6 justify-start md:justify-between items-stretch gap-4 md:gap-0 p-4 md:p-0">
                <StepHeader
                headerName={"Finishing up"}
                headerDescription={"Double-check everything looks OK before confirming."}
                />
                <SummarySection firstAddonSelected={firstAddonSelected} secondAddonSelected={secondAddonSelected} thirdAddonSelected={thirdAddonSelected} selectedPlan={selectedPlan} yearlyPlanBiling={yearlyPlanBiling} selectedPlanValue={selectedPlanValue} totalValue={totalValue} setCurrentStep={setCurrentStep}/>
                <StepFooter nextStep={"Submit"} previousStep={"Third"} currentStep={currentStep} setCurrentStep={setCurrentStep}  checkFunction={proceedCheckout}/>
            </div>
        </div>
    );
}