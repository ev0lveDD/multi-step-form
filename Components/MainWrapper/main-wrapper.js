'use client';

import { useEffect, useState } from "react";

import Menu from "@/Components/Menu/menu";
import PersonalInfo from "@/Components/PersonalInfo/personal-info";
import PlanSelect from "../PlanSelect/plan-select";

export default function MainWrapper(){
    
    const [selectedPlan, setSelectedPlan] = useState(null);
    
    useEffect(() => {
        console.log(selectedPlan);
    },[selectedPlan])

    return(
        <div className="bg-white rounded-lg h-5/6 w-7/12 flex items-center justify-start">
            <Menu />
            {/* <PersonalInfo /> */}
            <PlanSelect selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
        </div>
    );
}