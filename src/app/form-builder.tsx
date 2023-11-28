import { Editor, Elements, Settings } from "@/containers";
import { useFormBuilder } from "@/hooks";
import { useEditorStore } from "@/stores";
import { generateId } from "@/utils";
import { DndContext } from "@dnd-kit/core";

import { StyledLayoutContainer } from "./app.styles";

export function FormBuilder() {
  const { elements } = useFormBuilder();
  const { editorElements, setEditorElements, setNewAddedElId, setFocusedElId } = useEditorStore();

  return (
    <DndContext
      onDragEnd={({ active, over }) => {
        if (!over) return;
        if (typeof active.id === "string") {
          // initially, active ids are extension names, e.g. "input", "select", "radio"
          // can be added one more input or select element, we should get its element type then add it to the editorElements by new generated id
          const droppedElementType = active.id;
          const droppedElement = elements.filter(
            ({ extension }) => extension === droppedElementType
          )?.[0];
          const newGeneratedId = `${droppedElementType}-${generateId()}`;

          setFocusedElId(newGeneratedId);
          setNewAddedElId(newGeneratedId);
          setEditorElements([...editorElements, { ...droppedElement, id: newGeneratedId }]);
        }
      }}
    >
      <StyledLayoutContainer>
        <Elements />
        <Editor />
        <Settings />
      </StyledLayoutContainer>
    </DndContext>
  );
}
