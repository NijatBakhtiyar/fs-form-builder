import { Column } from "@/components";
import { useFormBuilder } from "@/hooks";

import { DraggableItem } from "./draggable-item";
import { StyledUl } from "./elements.styles";

export function Elements() {
  const { elements } = useFormBuilder();

  return (
    <Column
      title="Elements"
      css={{
        flex: "calc(320 / 1312)",
      }}
    >
      <StyledUl
        css={{
          position: "relative",
        }}
      >
        {elements.map((element) => (
          <DraggableItem key={element.extension} element={element} />
        ))}
      </StyledUl>
    </Column>
  );
}
