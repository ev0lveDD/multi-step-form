'use client';

import { useEffect, useState } from "react";

import Menu from "@/Components/Menu/menu";
import PersonalInfo from "@/Components/PersonalInfo/personal-info";
import PlanSelect from "../PlanSelect/plan-select";
import Addons from "../Addons/add-ons";

export default function MainWrapper(){
    
    const [currentStep, setCurrentStep] = useState("First")
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [planBiling, setPlanBiling] = useState(false);

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
            planBiling={planBiling} 
            setPlanBiling={setPlanBiling}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}/> :

            currentStep === "Third" ? <Addons
            currentStep={currentStep}
            setCurrentStep={setCurrentStep} /> :

            null}

        </div>
    );
}