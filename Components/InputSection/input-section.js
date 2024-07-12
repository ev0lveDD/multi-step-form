import InputRow from "./InputRow/input-row";

export default function InputSection({piName, setPIName, piEmail, setPIEmail, piNumber, setPINumber, isPINameEmpty, isPIEmailEmpty, isPINumberEmpty}){
    return(
        <>
            <InputRow 
                inputLabel={"Name"} 
                inputPlaceholder={"e.g. Stephen King"}
                inputId={"input-full-name"}
                inputType={"text"}
                inputValue={piName}
                inputFunction={setPIName}
                isInputEmpty={isPINameEmpty}
            />
            <InputRow 
                inputLabel={"Email Address"} 
                inputPlaceholder={"e.g. stephenking@lorem.com"}
                inputId={"input-email"}
                inputType={"email"}
                inputValue={piEmail}
                inputFunction={setPIEmail}
                isInputEmpty={isPIEmailEmpty}
            />
            <InputRow 
                inputLabel={"Phone Number"} 
                inputPlaceholder={"e.g. +1 234 567 890"}
                inputId={"input-phoneNumber"}
                inputType={"text"}
                inputValue={piNumber}
                inputFunction={setPINumber}
                isInputEmpty={isPINumberEmpty}
            />
        </>
    );
}