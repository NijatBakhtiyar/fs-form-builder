export interface FormBuilderElement {
  extension: string;
  config: Config;
  customization: Customization;
  settings: Settings[];
}

export interface FormEditorElement extends FormBuilderElement {
  id: string;
}

export interface Config {
  value: string;
  element: TypeOfElementTypes;
  required?: boolean;
  label: string;
  placeholder?: string;
  options?: {
    id: string;
    value: string;
  }[];
}

export const TypeOfElement = {
  select: "select",
  radio: "radio",
  textarea: "textarea",
  text: "text",
  number: "number",
  toggle: "toggle",
  choice: "choice",
} as const;

/**
 * Type that represents the possible values of config types. It is a union
 * of the values of the "TypeOfElement" object.
 */
export type TypeOfElementTypes = (typeof TypeOfElement)[keyof typeof TypeOfElement];

export interface Customization {
  icon: React.ReactNode;
  iconColor: string;
  iconBackgroundColor: string;
  width: string;
  visibility: string;
  minLength?: number;
  maxLength?: number;
}

export interface Settings {
  value: string | number | boolean;
  label: string;
  placeholder?: string;
  key: string;
  element: TypeOfElementTypes;
  options?: {
    id: string;
    value: string;
  }[];
}

export interface Option {
  id: string;
  value: string;
}

/**
 * unique identifier of an object. It can be either a number or a string.
 */
export type ID = number | string;
