import Image from "next/image";

export default function PlanButton({icon, planName, planPrice, selectedPlan, setSelectedPlan, yearlyPlanBiling}) {

    const active = "w-full lg:w-24 h-16 lg:h-32 rounded-md bg-slate-100 flex items-center justify-self-center justify-center border border-violet-800 cursor-pointer";
    const notActive= "w-full lg:w-24 h-16 lg:h-32 rounded-md bg-transparent flex items-center justify-self-center justify-center border border-gray-300 cursor-pointer hover:border-violet-800";
    
    return(
        <div className={selectedPlan === planName ? active : notActive} onClick={() => setSelectedPlan(planName)}>
            <div className="w-4/5 h-4/5 flex flex-row lg:flex-col justify-start lg:justify-between items-center lg:items-start gap-4">
                <Image src={icon} width={30} height={30} alt={`${planName} Icon`}/>
                <div className="flex flex-col lg:flex">
                    <p className="text-sky-950 text-xs font-bold">{planName}</p>
                    <p className="text-slate-400 text-[10px] font-medium">${planPrice}/{yearlyPlanBiling ? "yr" : "mo"}</p>
                    {yearlyPlanBiling ? 
                    <p className="text-blue-950 text-[10px] font-medium">2 months free</p>
                     : null}
                </div>
            </div>
        </div>
    );
}