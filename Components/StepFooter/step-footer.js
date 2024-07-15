export default function StepFooter({nextStep, previousStep, currentStep, setCurrentStep, checkFunction}){
    return(
        <div className="w-full bg-white h-36 md:h-auto fixed md:static bottom-0 left-0 md:bottom-auto md:left-auto md:pt-6 m-0 p-0 md:pb-3 flex items-center justify-center">
            <div className="w-5/6 md:w-full h-auto flex items-center justify-between">
                {previousStep ? 
                    <button className="bg-transparent text-gray-400 hover:text-gray-600 font-medium text-[10px]" onClick={() => setCurrentStep(previousStep)}>
                        Go Back
                    </button>
                : null}
                {currentStep === "Fourth" ? 
                <button className="bg-blue-800 hover:bg-violet-400 text-gray-100 font-bold py-2 px-6 rounded-md text-[10px]" onClick={() => setCurrentStep(nextStep)}>
                    Confirm
                </button> : 
                <button className="bg-blue-950 hover:bg-blue-900 text-gray-100 font-bold py-2 px-6 rounded-md text-[10px]" onClick={() => checkFunction(nextStep)}>
                    Next Step
                </button>}
            </div>
        </div>
    );
}