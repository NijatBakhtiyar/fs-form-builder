import { IconGripVertical } from "@/assets/icons";
import { useContext } from "react";

import { SortableListItemContext } from "./sortable-list-item";

export function DragButton() {
  const { attributes, listeners, ref } = useContext(SortableListItemContext);

  return (
    <button {...attributes} {...listeners} ref={ref}>
      <IconGripVertical />
    </button>
  );
}
