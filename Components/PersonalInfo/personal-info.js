export default function PersonalInfo(){
    return(
        <div className="h-96 w-4/5 m-4">
            <div className="flex flex-col items-center justify-center">
                <div className="text-left my-4">
                    <h1 className="text-2xl text-slate-900 font-bold my-2">Personal Info</h1>
                    <p className="text-xs text-slate-400 font-medium">Please provide your name, email address, and phone number.</p>
                </div>
            </div>
        </div>
    );
}