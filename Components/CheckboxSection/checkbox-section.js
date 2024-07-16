import CheckboxButton from "./CheckboxButton/checkbox-button";

export default function CheckboxSection({yearlyPlanBiling, firstAddonSelected, setFirstAddonSelected, secondAddonSelected, setSecondAddonSelected, thirdAddonSelected, setThirdAddonSelected}) {
    return(
        <ul className="flex flex-col justify-between gap-2 md:gap-4 my-4 md:my-0">
            <CheckboxButton id="online-service" addonName="Online service" addonDescription="Access to multiplayer games" addonPrice={yearlyPlanBiling ? 10 : 1} yearlyPlanBiling={yearlyPlanBiling} hookValue={firstAddonSelected} hookFunction={setFirstAddonSelected}/>
            <CheckboxButton id="larger-storage" addonName="Larger storage" addonDescription="Extra 1TB of cloud save" addonPrice={yearlyPlanBiling ? 20 : 2} yearlyPlanBiling={yearlyPlanBiling} hookValue={secondAddonSelected} hookFunction={setSecondAddonSelected}/>
            <CheckboxButton id="customizable-profile" addonName="Customizable profile" addonDescription="Custom theme on your profile" addonPrice={yearlyPlanBiling ? 20: 2} yearlyPlanBiling={yearlyPlanBiling} hookValue={thirdAddonSelected} hookFunction={setThirdAddonSelected}/>
        </ul>
    );
}