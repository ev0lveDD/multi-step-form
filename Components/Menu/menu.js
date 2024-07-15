import MenuRow from "./MenuRow/menu-row";

export default function Menu({currentStep}){
    return(
        <div className="h-40 md:h-96 w-full md:w-1/4 bg-pattern-desktop bg-auto md:bg-cover bg-center md:rounded m-0 md:m-4 flex md:flex-col justify-center md:justify-start gap-3 md:gap-0">
            <MenuRow number={1} description={"YOUR INFO"} active={currentStep === "First" ? true : false}/>
            <MenuRow number={2} description={"SELECT PLAN"} active={currentStep === "Second" ? true : false}/>
            <MenuRow number={3} description={"ADD-ONS"} active={currentStep === "Third" ? true : false}/>
            <MenuRow number={4} description={"SUMMARY"} active={currentStep === "Fourth" || currentStep === "Submit" ? true : false}/>
        </div>
    );
}

// bg-gradient-to-r from-sky-500 to-indigo-500