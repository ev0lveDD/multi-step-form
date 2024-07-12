'use client';

import { useEffect, useState } from "react";

import Menu from "@/Components/Menu/menu";
import PersonalInfo from "@/Components/PersonalInfo/personal-info";
import PlanSelect from "../PlanSelect/plan-select";
import Addons from "../Addons/add-ons";
import Checkout from "../Checkout/checkout";
import SubmitConfirmation from "../SubmitConfirmation/submit-confirmation";

export default function MainWrapper(){

    const [piName, setPIName] = useState("");
    const [piEmail, setPIEmail] = useState("");
    const [piNumber, setPINumber] = useState("");
    
    const [currentStep, setCurrentStep] = useState("First")
    const [selectedPlan, setSelectedPlan] = useState("");
    const [yearlyPlanBiling, setYearlyPlanBiling] = useState(false);
    const [selectedPlanValue, setSelectedPlanValue] = useState(null);

    const [firstAddonSelected, setFirstAddonSelected] = useState(false);
    const [firstAddonValue, setFirstAddonValue] = useState(null);

    const [secondAddonSelected, setSecondAddonSelected] = useState(false);
    const [secondAddonValue, setSecondAddonValue] = useState(null);

    const [thirdAddonSelected, setThirdAddonSelected] = useState(false);
    const [thirdAddonValue, setThirdAddonValue] = useState(null);

    const [totalValue, setTotalValue] = useState(null);

    useEffect(() => {
        if(selectedPlan === "Arcade" && yearlyPlanBiling===true){
            setSelectedPlanValue(90)
        }   else if(selectedPlan === "Arcade" && yearlyPlanBiling===false){
            setSelectedPlanValue(9)
        } else if(selectedPlan === "Advanced" && yearlyPlanBiling===true){
            setSelectedPlanValue(120)
        } else if(selectedPlan === "Advanced" && yearlyPlanBiling===false){
            setSelectedPlanValue(12)
        } else if(selectedPlan === "Pro" && yearlyPlanBiling===true){
            setSelectedPlanValue(150)
        } else if(selectedPlan === "Pro" && yearlyPlanBiling===false){
            setSelectedPlanValue(15)
        } else {
            null;
        }
    },[selectedPlan, yearlyPlanBiling])

    useEffect(() => {
        if(yearlyPlanBiling===true && firstAddonSelected===true){
            setFirstAddonValue(10)
        } else if (yearlyPlanBiling===false && firstAddonSelected===true){
            setFirstAddonValue(1)
        } else if (yearlyPlanBiling===true && firstAddonSelected===false){
            setFirstAddonValue(0)
        } else if (yearlyPlanBiling===false && firstAddonSelected===false){
            setFirstAddonValue(0)
        } else {
            null
        }
    }, [selectedPlanValue, firstAddonSelected, yearlyPlanBiling])

    useEffect(() => {
        if (yearlyPlanBiling===true && secondAddonSelected===true){
            setSecondAddonValue(20)
        } else if (yearlyPlanBiling===false && secondAddonSelected===true){
            setSecondAddonValue(2)
        } else if (yearlyPlanBiling===true && secondAddonSelected===false){
            setSecondAddonValue(0)
        } else if (yearlyPlanBiling===false && secondAddonSelected===false){
            setSecondAddonValue(0)
        } else {
            null
        }
    }, [selectedPlanValue, secondAddonSelected, yearlyPlanBiling])

    useEffect(() => {
        if (yearlyPlanBiling===true && thirdAddonSelected===true){
            setThirdAddonValue(20)
        } else if (yearlyPlanBiling===false && thirdAddonSelected===true){
            setThirdAddonValue(2)
        } else if (yearlyPlanBiling===true && thirdAddonSelected===false){
            setThirdAddonValue(0)
        } else if (yearlyPlanBiling===false && thirdAddonSelected===false){
            setThirdAddonValue(0)
        } else {
            null;
        }
    }, [selectedPlanValue, thirdAddonSelected, yearlyPlanBiling])

    useEffect(() => {
        setTotalValue(selectedPlanValue + firstAddonValue + secondAddonValue + thirdAddonValue)
        console.log(firstAddonValue)
        console.log(secondAddonValue)
        console.log(thirdAddonValue)
    }, [selectedPlanValue, firstAddonValue, secondAddonValue, thirdAddonValue, yearlyPlanBiling,])

    return(
        <div className="bg-white rounded-lg h-5/6 w-7/12 flex items-center justify-start">
            <Menu currentStep={currentStep} />
            {/* <PersonalInfo /> */}
            {currentStep === "First" ? <PersonalInfo
            piName={piName}
            setPIName={setPIName}
            piEmail={piEmail}
            setPIEmail={setPIEmail}
            piNumber={piNumber}
            setPINumber={setPINumber}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            /> :

            currentStep === "Second" ? <PlanSelect 
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan} 
            yearlyPlanBiling={yearlyPlanBiling} 
            setYearlyPlanBiling={setYearlyPlanBiling}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            /> :

            currentStep === "Third" ? <Addons
            yearlyPlanBiling={yearlyPlanBiling}
            firstAddonSelected={firstAddonSelected}
            setFirstAddonSelected={setFirstAddonSelected}
            secondAddonSelected={secondAddonSelected}
            setSecondAddonSelected={setSecondAddonSelected}
            thirdAddonSelected={thirdAddonSelected}
            setThirdAddonSelected={setThirdAddonSelected}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            /> :

            currentStep === "Fourth" ? <Checkout
            selectedPlan={selectedPlan}
            selectedPlanValue={selectedPlanValue}
            yearlyPlanBiling={yearlyPlanBiling}
            firstAddonSelected={firstAddonSelected}
            secondAddonSelected={secondAddonSelected}
            thirdAddonSelected={thirdAddonSelected}
            currentStep={currentStep}
            totalValue={totalValue}
            setCurrentStep={setCurrentStep}
            /> :

            currentStep === "Submit" ? <SubmitConfirmation /> : null}

        </div>
    );
}