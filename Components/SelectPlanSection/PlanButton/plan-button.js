import Image from "next/image";

export default function PlanButton({icon, planName, planPrice, selectedPlan, setSelectedPlan}) {

    const active = "w-24 h-28 rounded-md bg-transparent flex items-center justify-center border border-violet-800 cursor-pointer";
    const notActive= "w-24 h-28 rounded-md bg-transparent flex items-center justify-center border border-gray-300 cursor-pointer hover:border-violet-800";
    
    return(
        <div className={selectedPlan === planName ? active : notActive} onClick={() => setSelectedPlan(planName)}>
            <div className="w-4/5 h-4/5 flex flex-col justify-between">
                <Image src={icon} width={30} height={30} alt={`${planName} Icon`}/>
                <div>
                    <p className="text-blue-950 text-xs font-bold">{planName}</p>
                    <p className="text-slate-400 text-[10px] font-medium">${planPrice}/mo</p>
                </div>
            </div>
        </div>
    );
}