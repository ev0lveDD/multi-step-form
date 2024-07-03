export default function StepFooter({nextStep, previousStep}){
    return(
        <div className="w-full flex items-center justify-between py-6">
            <button className="bg-transparent text-gray-400 hover:text-gray-600 font-bold text-sm">
                Go Back
            </button>
            <button className="bg-sky-950 hover:bg-sky-900 text-gray-100 font-bold py-2 px-4 rounded-md text-sm">
                Next Step
            </button>
        </div>
    );
}