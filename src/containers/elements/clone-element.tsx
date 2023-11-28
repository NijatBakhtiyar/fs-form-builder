import { Paragraph } from "@/themes/typography";
import type { FormBuilderElement } from "@/types";

import { StyledIcon, StyledLi } from "./elements.styles";

interface Props {
  height: number;
  element: FormBuilderElement;
}

export function CloneElement({ height, element }: Props) {
  return (
    <StyledLi
      css={{
        marginTop: `-${height}px`,
      }}
    >
      <StyledIcon
        css={{
          backgroundColor: element.customization.iconBackgroundColor,
          color: element.customization.iconColor,
        }}
      >
        {element.customization.icon}
      </StyledIcon>

      <Paragraph fw="medium">{element.config.label}</Paragraph>
    </StyledLi>
  );
}
