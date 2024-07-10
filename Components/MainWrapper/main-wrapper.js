'use client';

import { useEffect, useState } from "react";

import Menu from "@/Components/Menu/menu";
import PersonalInfo from "@/Components/PersonalInfo/personal-info";
import PlanSelect from "../PlanSelect/plan-select";
import Addons from "../Addons/add-ons";
import Checkout from "../Checkout/checkout";

export default function MainWrapper(){
    
    const [currentStep, setCurrentStep] = useState("First")
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [yearlyPlanBiling, setYearlyPlanBiling] = useState(false);

    const [firstAddonSelected, setFirstAddonSelected] = useState(false);
    const [secondAddonSelected, setSecondAddonSelected] = useState(false);
    const [thirdAddonSelected, setThirdAddonSelected] = useState(false);

    useEffect(() => {
        console.log(selectedPlan);
    },[selectedPlan])

    return(
        <div className="bg-white rounded-lg h-5/6 w-7/12 flex items-center justify-start">
            <Menu currentStep={currentStep} />
            {/* <PersonalInfo /> */}
            {currentStep === "First" ? <PersonalInfo 
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}/> :

            currentStep === "Second" ? <PlanSelect 
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan} 
            yearlyPlanBiling={yearlyPlanBiling} 
            setYearlyPlanBiling={setYearlyPlanBiling}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}/> :

            currentStep === "Third" ? <Addons
            yearlyPlanBiling={yearlyPlanBiling}
            firstAddonSelected={firstAddonSelected}
            setFirstAddonSelected={setFirstAddonSelected}
            secondAddonSelected={secondAddonSelected}
            setSecondAddonSelected={setSecondAddonSelected}
            thirdAddonSelected={thirdAddonSelected}
            setThirdAddonSelected={setThirdAddonSelected}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep} /> :

            currentStep === "Fourth" ? <Checkout
            selectedPlan={selectedPlan}
            yearlyPlanBiling={yearlyPlanBiling}
            firstAddonSelected={firstAddonSelected}
            secondAddonSelected={secondAddonSelected}
            thirdAddonSelected={thirdAddonSelected}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep} /> :

            null}

        </div>
    );
}