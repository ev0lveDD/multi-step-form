'use client';

import { useEffect, useState } from "react";

import arcadeIcon from "@/public/icon-arcade.svg";
import advancedIcon from "@/public/icon-advanced.svg";
import proIcon from "@/public/icon-pro.svg";
import PlanButton from "./PlanButton/plan-button";


export default function SelectPlanSection({selectedPlan, setSelectedPlan, planBiling, setPlanBiling}){

    function onChangeCheckBox(){
        setPlanBiling(!planBiling);
    }

    const planBilingTextActive = "text-blue-950 text-xs font-bold mx-4";
    const planBilingTextNotActive = "text-slate-400 text-xs font-bold mx-4";

    return(
        <>
        <div className="flex w-full justify-between">   
            <PlanButton icon={arcadeIcon} planName={"Arcade"} planPrice={planBiling ? 90 : 9} planActive={false} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} planBiling={planBiling}/>
            <PlanButton icon={advancedIcon} planName={"Advanced"} planPrice={planBiling ? 120 : 12} planActive={false} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} planBiling={planBiling}/>
            <PlanButton icon={proIcon} planName={"Pro"} planPrice={planBiling ? 150 : 15} planActive={false} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} planBiling={planBiling}/>
        </div>
        <div className="flex w-full h-10 justify-center items-center rounded-md bg-slate-100">
            <label className="flex items-center cursor-pointer">
                <span className={planBiling ? planBilingTextNotActive : planBilingTextActive}>Monthly</span>
                <input type="checkbox" checked={planBiling} onChange={onChangeCheckBox} className="sr-only peer"></input>
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-blue-950 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[5.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-950"></div>
                <span className={planBiling ? planBilingTextActive : planBilingTextNotActive}>Yearly</span>
            </label>
        </div>
        </>
    );
}