export default function PersonalInfo(){
    return(
        <div className="h-96 w-4/5 m-4">
            <div className="flex flex-col items-start justify-center">
                <div className="text-left my-4">
                    <h1 className="text-2xl text-slate-900 font-bold my-2">Personal Info</h1>
                    <p className="text-xs text-slate-400 font-medium">Please provide your name, email address, and phone number.</p>
                </div>
                <div className="flex flex-col w-full md:w-2/3 md:mb-0 items-start justify-center">
                    <label className="block tracking-wide text-slate-800 text-[10px] font-semibold py-1">Name</label>
                    <input className="block w-full text-black text-xs p-2 font-semibold bg-white border border-gray-300 rounded-md focus:outline-none focus:border-violet-800" id="input-full-name" type="text" placeholder="e.g. Stephen King"></input>
                </div>
                <div className="flex flex-col w-full md:w-2/3 md:mb-0 items-start justify-center">
                    <label className="block tracking-wide text-slate-800 text-[10px] font-semibold py-1">Email Address</label>
                    <input className="block w-full text-black text-xs p-2 font-semibold bg-white border border-gray-300 rounded-md focus:outline-none focus:border-violet-800" id="input-email" type="email" placeholder="e.g. stephenking@lorem.com"></input>
                </div>
                <div className="flex flex-col w-full md:w-2/3 md:mb-0 items-start justify-center">
                    <label className="block tracking-wide text-slate-800 text-[10px] font-semibold py-1">Phone Number</label>
                    <input className="block w-full text-black text-xs p-2 font-semibold bg-white border border-gray-300 rounded-md focus:outline-none focus:border-violet-800" id="input-number" type="text" placeholder="e.g. +1 234 567 890"></input>
                </div>
            </div>
        </div>
    );
}