export default function CheckboxButton({id, addonName, addonDescription, addonPrice}){
    return(
        <li className="flex items-center w-full relative">
            <input type="checkbox" id={id} value="" className="m-6 peer z-10" required=""></input>
            <label for={id} className="py-3 px-6 z-0 absolute inline-flex items-center justify-between w-full p-5 bg-white border border-gray-300 rounded-md cursor-pointer hover:border-violet-800 peer-checked:border-violet-800 peer-checked:bg-slate-100">                           
                <div className="flex items-center justify-between w-full px-8"> 
                    <div className="flex flex-col">
                        <p className="text-sky-950 text-md font-bold">{addonName}</p>
                        <p className="text-slate-400 text-sm font-medium">{addonDescription}</p>
                    </div>
                    <div>
                        <p className="text-violet-800 text-sm font-medium">+${addonPrice}/mo</p>
                    </div>
                </div>
            </label>
        </li>
    );
}