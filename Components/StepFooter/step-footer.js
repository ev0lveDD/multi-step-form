export default function StepFooter({nextStep, previousStep, currentStep, setCurrentStep}){
    return(
        <div className="w-full flex items-center justify-between pt-6 pb-3">
            {previousStep ? 
                <button className="bg-transparent text-gray-400 hover:text-gray-600 font-medium text-[10px]" onClick={() => setCurrentStep(previousStep)}>
                    Go Back
                </button>
            : null}
            {currentStep === "Fourth" ? 
            <button className="bg-blue-800 hover:bg-violet-400 text-gray-100 font-bold py-2 px-6 rounded-md text-[10px]" onClick={() => setCurrentStep(nextStep)}>
                Confirm
            </button> : 
            <button className="bg-blue-950 hover:bg-blue-900 text-gray-100 font-bold py-2 px-6 rounded-md text-[10px]" onClick={() => setCurrentStep(nextStep)}>
                Next Step
            </button>}
        </div>
    );
}