import AddonsSummaryRow from "./AddonsSummaryRow/addons-summary-row";

export default function SummarySection({firstAddonSelected, secondAddonSelected, thirdAddonSelected, selectedPlan, yearlyPlanBiling, selectedPlanValue, totalValue, setCurrentStep}){
    return(
        <div>
            <div className="flex flex-col w-full justify-center items-center rounded-md bg-slate-100">
                <div className="p-4 flex w-full justify-between items-center">
                    <div className="flex flex-col">
                        <p className="text-sky-950 text-xs font-bold">{selectedPlan} ({yearlyPlanBiling ? "Yearly" : "Monthly"})</p>
                        <button className="bg-transparent text-slate-400 hover:text-slate-600 text-[10px] font-normal underline w-min mt-1" onClick={() => setCurrentStep("Second")}>
                            Change
                        </button>
                    </div>
                    <p className="text-sky-950 text-xs font-extrabold">
                        ${selectedPlanValue}/{yearlyPlanBiling ? "yr" : "mo"}
                    </p>
                </div>
                <hr className="mx-4 w-11/12 h-px my-1 bg-gray-200 border-0" />
                <div className="p-4 w-full flex flex-col gap-2">
                    {firstAddonSelected ? 
                        <AddonsSummaryRow 
                        yearlyPlanBiling={yearlyPlanBiling}
                        addonName="Online service" 
                        yearlyValue={10}
                        monthlyValue={1}
                        />
                    : null }
                    {secondAddonSelected ?
                        <AddonsSummaryRow 
                        yearlyPlanBiling={yearlyPlanBiling}
                        addonName="Larger storage" 
                        yearlyValue={20}
                        monthlyValue={2}
                        />
                    : null}
                    {thirdAddonSelected ? 
                        <AddonsSummaryRow 
                        yearlyPlanBiling={yearlyPlanBiling}
                        addonName="Customizable profile" 
                        yearlyValue={20}
                        monthlyValue={2}
                        />
                    : null}
                </div>
            </div>
            <div className="flex justify-between w-full p-4">
                <p className="text-slate-400 text-xs font-medium">Total (per {yearlyPlanBiling ? "year" : "month"})</p>
                <p className="text-blue-700 text-sm font-extrabold">+${totalValue}/{yearlyPlanBiling ? "yr" : "mo"}</p>
            </div>
            <div>

            </div>
        </div>
    );
}