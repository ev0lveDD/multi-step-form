import StepHeader from "../StepHeader/step-header";
import SelectPlanSection from "../SelectPlanSection/select-plan-section";
import StepFooter from "../StepFooter/step-footer";
import { useState } from "react";

export default function PlanSelect({selectedPlan, setSelectedPlan, yearlyPlanBiling, setYearlyPlanBiling, currentStep, setCurrentStep}){

    const [isPlanSelected, setIsPlanSelected] = useState(true);

    function checkPlan(nextStep) {
        if(!selectedPlan){
            setIsPlanSelected(false);
        } else {
            setIsPlanSelected(true);
            setCurrentStep(nextStep);
        }
    }

    return(
        <div className="h-fit lg:h-96 w-5/6 lg:w-3/4 m-4 bg-white md:bg-transparent rounded-xl flex justify-center">
            <div className="flex flex-col min-h-96 w-5/6 md:w-4/6 justify-start md:justify-between items-stretch gap-4 md:gap-0 p-4 md:p-0">
                <StepHeader
                headerName={"Select your plan"}
                headerDescription={"You have the option of monthly or yearly billing."}
                />
                <SelectPlanSection selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} yearlyPlanBiling={yearlyPlanBiling} setYearlyPlanBiling={setYearlyPlanBiling} isPlanSelected={isPlanSelected}/>
                <StepFooter nextStep={"Third"} previousStep={"First"} currentStep={currentStep} setCurrentStep={setCurrentStep} checkFunction={checkPlan}/>
            </div>
        </div>
    );
}