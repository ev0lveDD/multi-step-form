export default function InputRow({inputLabel, inputPlaceholder, inputId, inputType}){
    return(
        <div className="flex flex-col w-full md:w-full md:mb-0 items-start justify-center">
            <label className="block tracking-wide text-slate-800 text-[10px] font-semibold py-1">
                {inputLabel}
            </label>
            <input className="block w-full text-black text-xs p-2 font-semibold bg-white border border-gray-300 rounded-md focus:outline-none focus:border-violet-800" 
                id={inputId}
                type={inputType}
                placeholder={inputPlaceholder}>
            </input>
        </div>
    );
}