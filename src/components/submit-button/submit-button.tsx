import { IconCheck } from "@/assets/icons";
import { useEditorStore } from "@/stores";
import { Paragraph } from "@/themes/typography";
import { warn } from "@/utils";

import { StyledButton, StyledButtonContainer } from "./submit-button.styles";

export function SubmitButton() {
  const { editorElements } = useEditorStore();

  return (
    <StyledButtonContainer>
      <StyledButton
        onClick={() => {
          warn(editorElements);
        }}
      >
        <IconCheck size={16} stroke="5" />
        <Paragraph fw="semibold">SAVE FORM</Paragraph>
      </StyledButton>
    </StyledButtonContainer>
  );
}
