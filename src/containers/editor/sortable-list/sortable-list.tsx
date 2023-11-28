import { useEditorStore } from "@/stores/index.ts";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  restrictToFirstScrollableAncestor,
  restrictToParentElement,
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { SortableListItem } from "./sortable-list-item.tsx";
import { StyledUl } from "./sortable-list.styles.ts";

export function SortableList() {
  const { editorElements, setEditorElements } = useEditorStore();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={({ active, over }) => {
        if (over && active.id !== over?.id) {
          const activeIndex = editorElements.findIndex(({ id }) => id === active.id);
          const overIndex = editorElements.findIndex(({ id }) => id === over.id);

          setEditorElements(arrayMove(editorElements, activeIndex, overIndex));
        }
      }}
      modifiers={[
        restrictToVerticalAxis,
        restrictToWindowEdges,
        restrictToFirstScrollableAncestor,
        restrictToParentElement,
      ]}
      collisionDetection={closestCenter}
    >
      <SortableContext items={editorElements.map((item) => item.id)}>
        <StyledUl className="SortableList" role="application">
          {editorElements.map((item) => (
            <SortableListItem key={item.id} id={item.id} element={item} />
          ))}
        </StyledUl>
      </SortableContext>
    </DndContext>
  );
}
