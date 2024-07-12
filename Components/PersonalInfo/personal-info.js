import StepHeader from "../StepHeader/step-header";
import InputSection from "../InputSection/input-section";
import StepFooter from "../StepFooter/step-footer";
import { useState } from "react";

export default function PersonalInfo({currentStep, setCurrentStep, piName, setPIName, piEmail, setPIEmail, piNumber, setPINumber}){

    
    const [isPINameEmpty, setIsPINameEmpty] = useState(false);
    const [isPIEmailEmpty, setIsPIEmailEmpty] = useState(false);
    const [isPINumberEmpty, setIsPINumberEmpty] = useState(false);

    function checkInputValues(nextStep) {
        if(!piName && !piEmail && !piNumber){
            setIsPINameEmpty(true);
            setIsPIEmailEmpty(true);
            setIsPINumberEmpty(true);
        } else if(!piName  && !piEmail && piNumber) {
            setIsPINameEmpty(true);
            setIsPIEmailEmpty(true);
            setIsPINumberEmpty(false);
        }  else if(!piName  && piEmail && !piNumber) {
            setIsPINameEmpty(true);
            setIsPIEmailEmpty(false);
            setIsPINumberEmpty(true);
        }  else if(!piName  && piEmail && piNumber) {
            setIsPINameEmpty(true);
            setIsPIEmailEmpty(false);
            setIsPINumberEmpty(false);
        }  else if(piName  && !piEmail && !piNumber) {
            setIsPINameEmpty(false);
            setIsPIEmailEmpty(true);
            setIsPINumberEmpty(true);
        }  else if(piName  && !piEmail && piNumber) {
            setIsPINameEmpty(false);
            setIsPIEmailEmpty(true);
            setIsPINumberEmpty(false);
        }  else if(piName  && piEmail && !piNumber) {
            setIsPINameEmpty(false);
            setIsPIEmailEmpty(false);
            setIsPINumberEmpty(true);
        }  else if(piName && piEmail && piNumber) {
            setIsPINameEmpty(false);
            setIsPIEmailEmpty(false);
            setIsPINumberEmpty(false);
            setCurrentStep(nextStep);
        } else {
            null
        }
    }

    return(
        <div className="h-96 w-3/4 m-4 flex justify-center">
            <div className="flex flex-col min-h-96 w-4/6 justify-between items-stretch">
                <StepHeader
                headerName={"Personal Info"}
                headerDescription={"Please provide your name, email address, and phone number."}
                />
                <InputSection 
                    piName={piName}
                    setPIName={setPIName}
                    piEmail={piEmail}
                    setPIEmail={setPIEmail}
                    piNumber={piNumber}
                    setPINumber={setPINumber}
                    isPINameEmpty={isPINameEmpty}
                    isPIEmailEmpty={isPIEmailEmpty}
                    isPINumberEmpty={isPINumberEmpty}
                />
                <StepFooter nextStep={"Second"} previousStep={null} currentStep={currentStep} setCurrentStep={setCurrentStep} checkFunction={checkInputValues}/>
            </div>
        </div>
    );
}