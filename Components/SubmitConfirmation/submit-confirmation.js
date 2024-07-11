import Image from "next/image";

import confirmationIcon from "@/public/icon-thank-you.svg";

export default function SubmitConfirmation(){
    return(
        <div className="h-96 w-3/4 m-4 flex justify-center">
            <div className="flex flex-col min-h-96 w-4/6 justify-center items-center gap-2">
                <Image alt="Confirmation Icon" src={confirmationIcon} height={60} width={60}/>
                <h1 className="text-xl text-blue-950 font-black tracking-wide my-2">Thank you!</h1>
                <p className="text-gray-400 text-xs font-medium text-center">
                    Thanks for confirming your subscription! We hope you have fun using our platform.
                    If you ever need support, please fell free to email us at support@loremgaming.com
                </p>
            </div>
        </div>
    );
}