import { sharedSettings } from "./shared-settings";

export const selectSettings = [
  { ...sharedSettings.label, value: "Select" },
  { ...sharedSettings.placeholder, value: "Select an option" },
  { ...sharedSettings.visibility },
  { ...sharedSettings.width },
  {
    ...sharedSettings.choice,
    options: [
      {
        id: "1",
        value: "Option 1",
      },
      {
        id: "2",
        value: "Option 2",
      },
    ],
  },
];
