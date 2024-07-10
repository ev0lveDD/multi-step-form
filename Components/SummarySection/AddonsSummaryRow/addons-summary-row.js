export default function AddonsSummaryRow({yearlyPlanBiling, addonName, yearlyValue, monthlyValue}) {
    return(
        <div className="flex justify-between">
            <p className="text-slate-400 text-[10px] font-medium">{addonName}</p>
            <p className="text-sky-950 text-[10px] font-medium">+${yearlyPlanBiling ? yearlyValue : monthlyValue}/{yearlyPlanBiling ? "yr" : "mo"}</p>
        </div>
    );
}