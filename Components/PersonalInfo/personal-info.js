import StepHeader from "../StepHeader/step-header";
import InputSection from "../InputSection/input-section";
import StepFooter from "../StepFooter/step-footer";

export default function PersonalInfo(){
    return(
        <div className="h-96 w-3/4 m-4 items-center justify-center">
            <div className="flex w-3/5 flex-col items-start justify-center">
                <StepHeader
                headerName={"Personal Info"}
                headerDescription={"Please provide your name, email address, and phone number."}
                />
                <InputSection />
                <StepFooter nextStep={"Second"} previousStep={null}/>
            </div>
        </div>
    );
}