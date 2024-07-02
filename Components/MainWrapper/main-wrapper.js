
import Menu from "@/Components/Menu/menu";
import PersonalInfo from "@/Components/PersonalInfo/personal-info";

export default function MainWrapper(){
    return(
        <div className="bg-white rounded-lg h-5/6 w-4/6 flex items-center justify-center">
            <Menu />
            <PersonalInfo />
        </div>
    );
}