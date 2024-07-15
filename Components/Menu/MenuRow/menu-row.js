export default function MenuRow({number, description, active}){

    const buttonActive = "rounded-full bg-cyan-200 h-10 w-10 md:h-6 md:w-6 flex items-center justify-center";
    const buttonNotActive= "rounded-full bg-transparent border border-white h-10 w-10 md:h-6 md:w-6 flex items-center justify-center";
    const buttonTextActive = "text-black text-xs md:text-[10px] font-bold";
    const buttonTextNotActive = "text-white text-xs md:text-[10px] font-bold";

    return(
        <div className="flex items-center justify-start gap-x-3 md:w-4/5 pt-5 md:pl-6">
            <div className={active ? buttonActive : buttonNotActive}>
                <p className={active ? buttonTextActive : buttonTextNotActive}>{number}</p>
            </div>
            <div className="hidden md:block">
                <p className="text-[10px] text-slate-100 font-thin">STEP {number}</p>
                <p className="text-[10px] text-white font-medium">{description}</p>
            </div>
        </div>
    );
}