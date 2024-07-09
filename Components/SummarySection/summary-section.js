export default function SummarySection(){
    return(
        <div>
            <div className="flex flex-col w-full justify-center items-center rounded-md bg-slate-100">
                <div className="p-4 flex w-full justify-between items-center">
                    <div className="flex flex-col">
                        <p className="text-sky-950 text-xs font-bold">Arcade (Monthly)</p>
                        <p className="text-slate-400 text-[10px] font-normal underline mt-1">Change</p>
                    </div>
                    <p className="text-sky-950 text-xs font-extrabold">$9/mo</p>
                </div>
                <hr className="mx-4 w-11/12 h-px my-1 bg-gray-200 border-0" />
                <div className="p-4 w-full flex flex-col gap-2">
                    <div className="flex justify-between">
                        <p className="text-slate-400 text-[10px] font-medium">Online service</p>
                        <p className="text-sky-950 text-[10px] font-medium">+$1/mo</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-slate-400 text-[10px] font-medium">Local storage</p>
                        <p className="text-sky-950 text-[10px] font-medium">+$2/mo</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full p-4">
                <p className="text-slate-400 text-xs font-medium">Total (per month)</p>
                <p className="text-blue-700 text-sm font-extrabold">+$12/mo</p>
            </div>
            <div>

            </div>
        </div>
    );
}