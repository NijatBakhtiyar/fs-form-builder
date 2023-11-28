import { FieldGenerator } from "@/components";
import { useEditorStore } from "@/stores";
import { Box } from "@/themes/layout";
import type { FormBuilderElement } from "@/types";
import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { PropsWithChildren } from "react";
import { createContext, useEffect, useMemo, useRef } from "react";

import { DragButton } from "./drag-button";
import { RemoveButton } from "./remove-button";
import { StyledFieldContainer, StyledIconContainer, StyledLiInner } from "./sortable-list.styles";

interface Props {
  id: string;
  element: FormBuilderElement;
}

interface Context {
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
}

export const SortableListItemContext = createContext<Context>({
  attributes: {},
  listeners: undefined,
  ref() {},
});

export function SortableListItem({ id, element }: PropsWithChildren<Props>) {
  const { newAddedElId, focusedElId, setFocusedElId, editorElements, setEditorElements } =
    useEditorStore();
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  );

  // used to scroll to the bottom of the list when a new item is added
  const scrollElRef = useRef<HTMLDivElement>(null);
  // used to focus the item when it is clicked or focused
  const focusElRef = useRef<HTMLDivElement>(null);

  // when a new item added to the list, should scroll to the bottom
  const isActive = useMemo(() => {
    return newAddedElId === id;
  }, [newAddedElId, id]);

  useEffect(() => {
    if (isActive) {
      scrollElRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
    }
  }, [isActive]);

  // when an item is focused or clicked, should focus item
  const isFocused = useMemo(() => {
    return focusedElId === id;
  }, [focusedElId, id]);

  function onFocus() {
    if (!isFocused) {
      setFocusedElId(id);
    }
  }

  function onChange(value: string) {
    const newEditorElements = editorElements.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          config: {
            ...element.config,
            value,
          },
        };
      }
      return element;
    });

    setEditorElements(newEditorElements);
  }

  return (
    <SortableListItemContext.Provider value={context}>
      <li
        ref={setNodeRef}
        style={{
          opacity: isDragging ? 0.5 : undefined,
          transform: CSS.Translate.toString(transform),
          transition,
        }}
      >
        <StyledLiInner ref={focusElRef} onFocus={onFocus} onClick={onFocus}>
          <StyledFieldContainer
            isFocused={isFocused}
            css={{
              width: `calc(${Number(element.customization.width) / 12} * 100%)`,
              opacity: element.customization.visibility === "visible" ? 1 : 0,
              transition: "opacity 0.3s cubic-bezier(0.65,0.05,0.36,1)",
            }}
          >
            <FieldGenerator
              label={element.config.label}
              onChange={(value) => onChange(value as string)}
              element={element.config.element}
              value={element.config.value}
              options={element.config.options}
              placeholder={element.config.placeholder}
              maxLength={element.customization.maxLength}
              minLength={element.customization.minLength}
              width={element.customization.width}
              visible={element.customization.visibility === "visible"}
            />
          </StyledFieldContainer>

          {isFocused && (
            <StyledIconContainer>
              <RemoveButton removableElId={id} />
              <DragButton />
              <Box as="span" />
            </StyledIconContainer>
          )}
        </StyledLiInner>
      </li>

      {isActive && <Box ref={scrollElRef} />}
    </SortableListItemContext.Provider>
  );
}
