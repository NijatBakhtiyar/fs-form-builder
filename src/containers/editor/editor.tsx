import { Column } from "@/components";
import { Box } from "@/themes/layout";
import { useDroppable } from "@dnd-kit/core";

import { SortableList } from "./sortable-list";

export function Editor() {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  return (
    <Column
      title="Editor"
      css={{
        flex: "calc(592 / 1312)",
      }}
    >
      <Box
        ref={setNodeRef}
        css={{
          p: "$24 $16",
          m: "-$24 -$16",
          height: "100%",
          backgroundColor: isOver ? "$white100" : undefined,
        }}
      >
        <SortableList />
      </Box>
    </Column>
  );
}
