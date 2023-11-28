import { TypeOfElement } from "@/types";

export const sharedSettings = {
  label: {
    value: "",
    label: "Label",
    placeholder: "Type something here",
    key: "label",
    element: TypeOfElement.text,
  },
  placeholder: {
    value: "",
    label: "Placeholder",
    placeholder: "Max: 200 symbol",
    limit: 200,
    key: "placeholder",
    element: TypeOfElement.text,
  },
  width: {
    value: "12",
    label: "Width",
    placeholder: "Set width",
    key: "width",
    element: TypeOfElement.select,
    options: [
      {
        id: "3",
        value: "col-md-3",
      },
      {
        id: "6",
        value: "col-md-6",
      },
      {
        id: "9",
        value: "col-md-9",
      },
      {
        id: "12",
        value: "col-md-12",
      },
    ],
  },
  visibility: {
    value: "visible",
    label: "Visibility",
    placeholder: "Set visibility",
    key: "visibility",
    element: TypeOfElement.select,
    options: [
      {
        id: "visible",
        value: "Visible",
      },
      {
        id: "hidden",
        value: "Hidden",
      },
    ],
  },
  required: {
    value: false,
    label: "Required",
    key: "required",
    element: TypeOfElement.toggle,
  },
  choice: {
    value: "1",
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

    label: "Choices",
    key: "choice",
    element: TypeOfElement.choice,
  },
};
