import CheckboxButton from "./CheckboxButton/checkbox-button";

export default function CheckboxSection({yearlyPlanBiling}) {
    return(
        <ul className="flex flex-col justify-between gap-4">
            <CheckboxButton id="online-service" addonName="Online service" addonDescription="Access to multiplayer games" addonPrice={yearlyPlanBiling ? 10 : 1} yearlyPlanBiling={yearlyPlanBiling}/>
            <CheckboxButton id="larger-storage" addonName="Larger storage" addonDescription="Extra 1TB of cloud save" addonPrice={yearlyPlanBiling ? 20 : 2} yearlyPlanBiling={yearlyPlanBiling}/>
            <CheckboxButton id="customizable-profile" addonName="Customizable profile" addonDescription="Custom theme on your profile" addonPrice={yearlyPlanBiling ? 20: 2} yearlyPlanBiling={yearlyPlanBiling}/>
        </ul>
    );
}