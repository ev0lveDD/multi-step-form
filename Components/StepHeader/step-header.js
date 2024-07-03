export default function StepHeader({headerName, headerDescription}){
    return(
        <div className="text-left my-4">
            <h1 className="text-2xl text-blue-950 font-bold my-2">
                {headerName}
            </h1>
            <p className="text-xs text-slate-400 font-medium">
                {headerDescription}
            </p>
        </div>
    );
}