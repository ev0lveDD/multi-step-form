import StepHeader from "../StepHeader/step-header";
import StepFooter from "../StepFooter/step-footer";
import CheckboxSection from "../CheckboxSection/checkbox-section";

export default function Addons({currentStep, setCurrentStep, yearlyPlanBiling, firstAddonSelected, setFirstAddonSelected, secondAddonSelected, setSecondAddonSelected, thirdAddonSelected, setThirdAddonSelected}) {

    function checkAddons(nextStep) {
        setCurrentStep(nextStep);
    }

    return(
        <div className="h-96 w-5/6 md:w-3/4 m-4 bg-white rounded-xl flex justify-center">
            <div className="flex flex-col min-h-96 w-5/6 md:w-4/6 justify-start md:justify-between items-stretch gap-4 md:gap-0 p-4 md:p-0">
                <StepHeader
                headerName={"Pick add-ons"}
                headerDescription={"Add-ons help enhance your gaming experience."}
                />
                <CheckboxSection 
                firstAddonSelected={firstAddonSelected}
                setFirstAddonSelected={setFirstAddonSelected}
                secondAddonSelected={secondAddonSelected}
                setSecondAddonSelected={setSecondAddonSelected}
                thirdAddonSelected={thirdAddonSelected}
                setThirdAddonSelected={setThirdAddonSelected}
                yearlyPlanBiling={yearlyPlanBiling}/>
                <StepFooter nextStep={"Fourth"} previousStep={"Second"} currentStep={currentStep} setCurrentStep={setCurrentStep} checkFunction={checkAddons}/>
            </div>
        </div>
    );
}