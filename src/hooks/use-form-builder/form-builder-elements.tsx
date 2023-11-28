import { IconCaretDown, IconCircleDot, IconEdit, IconInputCheck } from "@/assets/icons";
import { TypeOfElement } from "@/types";

import { choiceInputSettings, selectSettings, textInputSettings } from "./element-settings";
import { textareaSettings } from "./element-settings/textarea-settings";

export const elements = [
  {
    extension: "input",
    settings: textInputSettings,
    config: {
      value: "",
      element: TypeOfElement.text,
      required: false,
      label: "Text input",
      placeholder: "Type something here",
    },
    customization: {
      icon: <IconInputCheck size={24} />,
      iconColor: "$fuchsia100",
      iconBackgroundColor: "$fuchsia50",
      width: "12",
      visibility: "visible",
      minLength: 0,
      maxLength: 200,
    },
  },
  {
    extension: "select",
    settings: selectSettings,
    config: {
      value: "1",
      element: TypeOfElement.select,
      required: false,
      label: "Select",
      placeholder: "Select an option",
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
    customization: {
      icon: <IconCaretDown size={24} />,
      iconColor: "$teal100",
      iconBackgroundColor: "$teal50",
      width: "12",
      visibility: "visible",
    },
  },
  {
    extension: "radio",
    settings: choiceInputSettings,
    config: {
      value: "1",
      element: TypeOfElement.radio,
      required: false,
      label: "Radio group",
      options: [
        {
          id: "1",
          value: "Choice 1",
        },
        {
          id: "2",
          value: "Choice 2",
        },
      ],
    },
    customization: {
      icon: <IconCircleDot size={24} />,
      iconColor: "$blue200",
      iconBackgroundColor: "$blueDark50",
      width: "12",
      visibility: "visible",
    },
  },
  {
    extension: "textarea",
    settings: textareaSettings,
    config: {
      value: "",
      element: TypeOfElement.textarea,
      required: false,
      label: "Textarea",
      placeholder: "Type something here",
    },
    customization: {
      icon: <IconEdit size={24} />,
      iconColor: "$blue100",
      iconBackgroundColor: "$blueLight50",
      width: "12",
      visibility: "visible",
      minLength: 0,
      maxLength: 200,
    },
  },
];
