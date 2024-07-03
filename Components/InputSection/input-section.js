import InputRow from "./InputRow/input-row";

export default function InputSection(){
    return(
        <>
            <InputRow 
                inputLabel={"Name"} 
                inputPlaceholder={"e.g. Stephen King"}
                inputId={"input-full-name"}
                inputType={"text"}
            />
            <InputRow 
                inputLabel={"Email Address"} 
                inputPlaceholder={"e.g. stephenking@lorem.com"}
                inputId={"input-email"}
                inputType={"email"}
            />
            <InputRow 
                inputLabel={"Phone Number"} 
                inputPlaceholder={"e.g. +1 234 567 890"}
                inputId={"input-phoneNumber"}
                inputType={"text"}
            />
        </>
    );
}