'use client';

import { useEffect, useState } from "react";

import arcadeIcon from "@/public/icon-arcade.svg";
import advancedIcon from "@/public/icon-advanced.svg";
import proIcon from "@/public/icon-pro.svg";
import PlanButton from "./PlanButton/plan-button";


export default function SelectPlanSection({selectedPlan, setSelectedPlan, yearlyPlanBiling, setYearlyPlanBiling, isPlanSelected}) {

    function onChangeCheckBox(){
        setYearlyPlanBiling(!yearlyPlanBiling);
    }

    const planBilingTextActive = "text-blue-950 text-xs font-bold mx-4";
    const planBilingTextNotActive = "text-slate-400 text-xs font-bold mx-4";

    return(
        <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-center gap-2">   
            <PlanButton icon={arcadeIcon} planName={"Arcade"} planPrice={yearlyPlanBiling ? 90 : 9} planActive={false} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} yearlyPlanBiling={yearlyPlanBiling}/>
            <PlanButton icon={advancedIcon} planName={"Advanced"} planPrice={yearlyPlanBiling ? 120 : 12} planActive={false} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} yearlyPlanBiling={yearlyPlanBiling}/>
            <PlanButton icon={proIcon} planName={"Pro"} planPrice={yearlyPlanBiling ? 150 : 15} planActive={false} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} yearlyPlanBiling={yearlyPlanBiling}/>
        </div>
        {!isPlanSelected ? 
        <p className="tracking-wide text-red-500 text-xs font-semibold w-full text-center">Please select your plan</p>
        : null}
        <div className="flex w-full h-10 justify-center items-center rounded-md bg-slate-100">
            <label className="flex items-center cursor-pointer">
                <span className={yearlyPlanBiling ? planBilingTextNotActive : planBilingTextActive}>Monthly</span>
                <input type="checkbox" checked={yearlyPlanBiling} onChange={onChangeCheckBox} className="sr-only peer"></input>
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-blue-950 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[5.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-950"></div>
                <span className={yearlyPlanBiling ? planBilingTextActive : planBilingTextNotActive}>Yearly</span>
            </label>
        </div>
        </div>
    );
}