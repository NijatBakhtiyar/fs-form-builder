import { IconPlus, IconX } from "@/assets/icons";
import { useEditorStore } from "@/stores";
import { Box } from "@/themes/layout";
import { type ID, type Option, TypeOfElement } from "@/types";
import { generateId } from "@/utils";
import { Input } from "@uvodohq/planum";

import { StyledAddBtn, StyledLi, StyledRemoveBtn, StyledUl } from "./choice-group.styles";

interface Props {
  label: string;
  options?: Option[];
  onChange: (value?: ID | string[] | boolean | null) => void;
}

export function ChoiceGroup(props: Props) {
  const { label, options = [] } = props;
  const { focusedElId, editorElements, setEditorElements } = useEditorStore();

  function getNewSettingsElement(options: Option[]) {
    const targetSettingsElement =
      editorElements.filter(({ id }) => id === focusedElId)[0].settings ?? [];

    const newSettingsElement = targetSettingsElement.map((element) => {
      if (element.key === TypeOfElement.choice) {
        return {
          ...element,
          options,
        };
      }
      return element;
    });

    return newSettingsElement;
  }

  function onInputChange(value: string, id: string) {
    const newOptions = options.map((option) => {
      if (option.id === id) {
        return {
          ...option,
          value,
        };
      }

      return option;
    });

    const newSettingsElement = getNewSettingsElement(newOptions);
    const newEditorElements = editorElements.map((element) => {
      if (element.id === focusedElId) {
        const newElementData = {
          ...element,
          config: {
            ...element.config,
            options: newOptions,
          },
          settings: newSettingsElement,
        };

        return newElementData;
      }

      return element;
    });

    setEditorElements(newEditorElements);
  }

  function onChoiceRemove(id: string) {
    const newOptions = options.filter((option) => option.id !== id);

    const newSettingsElement = getNewSettingsElement(newOptions);
    const newEditorElements = editorElements.map((element) => {
      if (element.id === focusedElId) {
        const newElementData = {
          ...element,
          config: {
            ...element.config,
            options: newOptions,
          },
          settings: newSettingsElement,
        };

        return newElementData;
      }

      return element;
    });

    setEditorElements(newEditorElements);
  }

  function onChoiceAdd() {
    const newOptions = [
      ...options,
      {
        id: generateId(),
        value: "",
      },
    ];

    const newSettingsElement = getNewSettingsElement(newOptions);
    const newEditorElements = editorElements.map((element) => {
      if (element.id === focusedElId) {
        const newElementData = {
          ...element,
          config: {
            ...element.config,
            options: newOptions,
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
    <Box>
      <StyledUl>
        {options.map((option) => {
          return (
            <StyledLi key={option.id}>
              <Input
                aria-label={label}
                value={option.value}
                onChange={(value) => onInputChange(value, option.id)}
              />
              <StyledRemoveBtn onClick={() => onChoiceRemove(option.id)}>
                <IconX size={20} />
              </StyledRemoveBtn>
            </StyledLi>
          );
        })}
      </StyledUl>

      <StyledAddBtn onClick={onChoiceAdd}>
        <IconPlus size={20} />
      </StyledAddBtn>
    </Box>
  );
}
