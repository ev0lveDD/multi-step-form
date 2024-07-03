import arcadeIcon from "@/public/icon-arcade.svg";
import advancedIcon from "@/public/icon-advanced.svg";
import proIcon from "@/public/icon-pro.svg";
import PlanButton from "./PlanButton/plan-button";


export default function SelectPlanSection(){
    return(
        <>
        <div className="flex w-full justify-between">   
            <PlanButton icon={arcadeIcon} planName={"Arcade"} planPrice={9}/>
            <PlanButton icon={advancedIcon} planName={"Advanced"} planPrice={12}/>
            <PlanButton icon={proIcon} planName={"Pro"} planPrice={15}/>
        </div>
        </>
    );
}