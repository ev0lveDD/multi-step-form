import StepHeader from "../StepHeader/step-header";
import SelectPlanSection from "../SelectPlanSection/select-plan-section";
import StepFooter from "../StepFooter/step-footer";

export default function PlanSelect(){
    return(
        <div className="h-96 w-3/4 m-4 flex justify-center">
            <div className="flex flex-col min-h-96 w-4/6 justify-between items-stretch">
                <StepHeader
                headerName={"Select your plan"}
                headerDescription={"You have the option of monthly or yearly billing."}
                />
                <SelectPlanSection />
                <StepFooter nextStep={"Second"} previousStep={null}/>
            </div>
    </div>
    );
}