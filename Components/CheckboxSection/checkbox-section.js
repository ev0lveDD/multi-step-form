import CheckboxButton from "./CheckboxButton/checkbox-button";

export default function CheckboxSection() {
    return(
        <ul className="flex flex-col justify-between gap-6">
            <CheckboxButton id="online-service" addonName="Online service" addonDescription="Access to multiplayer games" addonPrice={1}/>
            <CheckboxButton id="larger-storage" addonName="Larger storage" addonDescription="Extra 1TB of cloud save" addonPrice={2}/>
            <CheckboxButton id="customizable-profile" addonName="Customizable profile" addonDescription="Custom theme on your profile" addonPrice={2}/>
        </ul>
    );
}