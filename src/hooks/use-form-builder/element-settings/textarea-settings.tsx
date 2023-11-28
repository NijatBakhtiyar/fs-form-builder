import { TypeOfElement } from "@/types";

import { sharedSettings } from "./shared-settings";

export const textareaSettings = [
  { ...sharedSettings.label, value: "Textarea" },
  { ...sharedSettings.placeholder, value: "Type something here" },
  { ...sharedSettings.visibility },
  { ...sharedSettings.width },
  {
    value: 0,
    label: "Min length",
    placeholder: "Min count of symbols",
    key: "min_length",
    element: TypeOfElement.number,
  },
  {
    value: 200,
    label: "Max length",
    placeholder: "Max count of symbols",
    key: "max_length",
    element: TypeOfElement.number,
  },
  { ...sharedSettings.required },
];
