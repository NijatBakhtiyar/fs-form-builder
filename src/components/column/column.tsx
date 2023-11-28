import type { CSS } from "@/themes";
import React from "react";

import { StyledChildren, StyledContainer, StyledTitle } from "./column.styles";

interface Props {
  title: string;
  children: React.ReactNode;
  css?: CSS;
}

export function Column(props: Props) {
  const { title, children, ...rest } = props;

  return (
    <StyledContainer {...rest}>
      <StyledTitle>{title}</StyledTitle>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  );
}
