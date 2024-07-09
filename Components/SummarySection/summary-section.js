export default function SummarySection(){
    return(
        <div>
            <div className="flex flex-col w-full justify-center items-center rounded-md bg-slate-100">
                <div className="p-4 flex w-full justify-between items-center">
                    <div className="flex flex-col">
                        <p className="text-sky-950 text-xs font-bold">Selected Plan</p>
                        <p className="text-sky-950 text-xs font-bold">Change</p>
                    </div>
                    <p className="text-sky-950 text-xs font-bold">Plan Price</p>
                </div>
                <hr className="mx-4 w-4/5 h-px my-4 bg-gray-300 border-0" />
                <div className="p-4 w-full flex flex-col gap-2">
                    <div className="flex justify-between">
                        <p className="text-slate-400 text-xs font-medium">Addon Selected</p>
                        <p className="text-slate-400 text-xs font-medium">Addon Price</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-slate-400 text-xs font-medium">Addon Selected</p>
                        <p className="text-slate-400 text-xs font-medium">Addon Price</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}