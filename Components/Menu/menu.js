import MenuRow from "./MenuRow/menu-row";

export default function Menu(){
    return(
        <div className="h-96 w-1/4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded m-4">
            <MenuRow number={1} description={"YOUR INFO"} active={true}/>
            <MenuRow number={2} description={"SELECT PLAN"} active={false}/>
            <MenuRow number={3} description={"ADD-ONS"} active={false}/>
            <MenuRow number={4} description={"SUMMARY"} active={false}/>
        </div>
    );
}