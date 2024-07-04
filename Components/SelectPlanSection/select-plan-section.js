'use client';

import { useEffect, useState } from "react";

import arcadeIcon from "@/public/icon-arcade.svg";
import advancedIcon from "@/public/icon-advanced.svg";
import proIcon from "@/public/icon-pro.svg";
import PlanButton from "./PlanButton/plan-button";


export default function SelectPlanSection({selectedPlan, setSelectedPlan}){

    return(
        <>
        <div className="flex w-full justify-between">   
            <PlanButton icon={arcadeIcon} planName={"Arcade"} planPrice={9} planActive={false} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
            <PlanButton icon={advancedIcon} planName={"Advanced"} planPrice={12} planActive={false} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
            <PlanButton icon={proIcon} planName={"Pro"} planPrice={15} planActive={false} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
        </div>
        <div className="flex w-full h-10 justify-center items-center rounded-md bg-slate-100">
            <label className="inline-flex items-center cursor-pointer">
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Monthly</span>
                <input type="checkbox" value="" className="sr-only peer"></input>
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus-ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yearly</span>
            </label>
        </div>
        </>
    );
}