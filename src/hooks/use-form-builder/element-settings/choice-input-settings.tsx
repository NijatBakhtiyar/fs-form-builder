import { sharedSettings } from "./shared-settings";

export const choiceInputSettings = [
  { ...sharedSettings.label, value: "Radio group" },
  { ...sharedSettings.visibility },
  { ...sharedSettings.required },
  { ...sharedSettings.choice },
];
