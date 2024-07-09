import MenuRow from "./MenuRow/menu-row";

export default function Menu({currentStep}){
    return(
        <div className="h-96 w-1/4 bg-pattern-desktop bg-cover bg-center rounded m-4">
            <MenuRow number={1} description={"YOUR INFO"} active={currentStep === "First" ? true : false}/>
            <MenuRow number={2} description={"SELECT PLAN"} active={currentStep === "Second" ? true : false}/>
            <MenuRow number={3} description={"ADD-ONS"} active={currentStep === "Third" ? true : false}/>
            <MenuRow number={4} description={"SUMMARY"} active={currentStep === "Fourth" ? true : false}/>
        </div>
    );
}

// bg-gradient-to-r from-sky-500 to-indigo-500