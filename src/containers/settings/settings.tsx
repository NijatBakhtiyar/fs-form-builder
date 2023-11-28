import { Column, FieldGenerator } from "@/components";
import { useEditorStore } from "@/stores";
import { Box } from "@/themes/layout";

import { StyledLi, StyledUl } from "./settings.styles";

export function Settings() {
  const { editorElements, focusedElId, setEditorElements } = useEditorStore();

  const targetSettingsElement =
    editorElements.filter(({ id }) => id === focusedElId)[0]?.settings ?? [];

  function onChange(value: string | number | boolean, key: string) {
    const newSettingsElement = targetSettingsElement.map((element) => {
      if (element.key === key) {
        return {
          ...element,
          value,
        };
      }
      return element;
    });

    const newLabelValue = newSettingsElement.filter(({ key }) => key === "label")[0]?.value;
    const newPlaceholderValue = newSettingsElement.filter(({ key }) => key === "placeholder")[0]
      ?.value;
    const newWidthValue = newSettingsElement.filter(({ key }) => key === "width")[0]?.value;
    const newVisibilityValue = newSettingsElement.filter(({ key }) => key === "visibility")[0]
      ?.value;
    const newMaxLengthValue = newSettingsElement.filter(({ key }) => key === "max_length")[0]
      ?.value;
    const newMinLengthValue = newSettingsElement.filter(({ key }) => key === "min_length")[0]
      ?.value;
    const newRequiredValue = newSettingsElement.filter(({ key }) => key === "required")[0];

    const newEditorElements = editorElements.map((element) => {
      if (element.id === focusedElId) {
        const newElementData = {
          ...element,
          config: {
            ...element.config,
            label: String(newLabelValue),
            placeholder: String(newPlaceholderValue),
            required: Boolean(newRequiredValue?.value),
          },
          customization: {
            ...element.customization,
            width: String(newWidthValue || element.customization.width),
            visibility: String(newVisibilityValue || element.customization.visibility),
            maxLength: Number(newMaxLengthValue || element.customization.maxLength),
            minLength: Number(newMinLengthValue || element.customization.minLength),
          },

          settings: newSettingsElement,
        };

        return newElementData;
      }
      return element;
    });

    setEditorElements(newEditorElements);
  }

  return (
    <Column
      title="Settings"
      css={{
        flex: "calc(400 / 1312)",
      }}
    >
      <Box
        css={{
          p: "$24 $16",
          m: "-$24 -$16",
          height: "100%",
        }}
      >
        <StyledUl>
          {targetSettingsElement.map((element) => (
            <StyledLi key={element.key}>
              <FieldGenerator
                label={element.label}
                onChange={(value) => onChange(value as string | number | boolean, element.key)}
                element={element.element}
                value={element.value}
                options={element.options}
                placeholder={element.placeholder}
                key={element.key}
              />
            </StyledLi>
          ))}
        </StyledUl>
      </Box>
    </Column>
  );
}
