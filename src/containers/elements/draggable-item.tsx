import { Paragraph } from "@/themes/typography";
import type { FormBuilderElement } from "@/types";
import { useDraggable } from "@dnd-kit/core";
import { Box } from "@uvodohq/planum";
import { useEffect, useRef, useState } from "react";

import { CloneElement } from "./clone-element";
import { StyledIcon, StyledLi } from "./elements.styles";

interface Props {
  element: FormBuilderElement;
}

export function DraggableItem({ element }: Props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: element.extension,
  });
  const [elementHeight, setElementHeight] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const bounds = element.getBoundingClientRect();
      setElementHeight(bounds.height);
    }

    return () => {
      setElementHeight(0);
    };
  }, []);

  return (
    <Box ref={elementRef}>
      <StyledLi
        key={element.extension}
        ref={setNodeRef}
        css={{
          transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
          opacity: isDragging ? 0.5 : 1,
        }}
        {...listeners}
        {...attributes}
      >
        <StyledIcon
          ref={elementRef}
          css={{
            backgroundColor: element.customization.iconBackgroundColor,
            color: element.customization.iconColor,
          }}
        >
          {element.customization.icon}
        </StyledIcon>

        <Paragraph fw="medium">{element.config.label}</Paragraph>
      </StyledLi>

      {isDragging && <CloneElement height={elementHeight} element={element} />}
    </Box>
  );
}
