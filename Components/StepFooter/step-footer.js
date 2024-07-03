export default function StepFooter({nextStep, previousStep}){
    return(
        <div className="w-full flex items-center justify-between pt-6 pb-3">
            <button className="bg-transparent text-gray-400 hover:text-gray-600 font-medium text-xs">
                Go Back
            </button>
            <button className="bg-blue-950 hover:bg-blue-900 text-gray-100 font-bold py-2 px-4 rounded-md text-xs">
                Next Step
            </button>
        </div>
    );
}