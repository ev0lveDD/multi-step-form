export default function CheckboxButton({id, addonName, addonDescription, addonPrice, yearlyPlanBiling, hookValue, hookFunction}){
    return(
        <li className="flex items-center w-full relative">
            <input type="checkbox" id={id} value="" className="my-6 mx-4 md:mx-6 peer z-10" required="" checked={hookValue} onChange={()=>hookFunction(!hookValue)}></input>
            <label for={id} className="py-3 pl-2 md:pl-6 pr-1 z-0 absolute inline-flex items-center justify-between w-full p-5 bg-white border border-gray-300 rounded-md cursor-pointer hover:border-violet-800 peer-checked:border-violet-800 peer-checked:bg-slate-100">                           
                <div className="flex items-center justify-between w-full pl-8 pr-2 md:pr-4"> 
                    <div className="flex flex-col">
                        <p className="text-sky-950 text-[10px] md:text-sm font-bold">{addonName}</p>
                        <p className="text-slate-400 text-[9px] md:text-xs font-medium">{addonDescription}</p>
                    </div>
                    <div>
                        <p className="text-violet-800 text-[10px] md:text-xs font-medium">+${addonPrice}/{yearlyPlanBiling ? "yr" : "mo"}</p>
                    </div>
                </div>
            </label>
        </li>
    );
}