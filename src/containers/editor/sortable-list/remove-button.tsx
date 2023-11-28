import { IconTrash } from "@/assets/icons";
import { useEditorStore } from "@/stores";

interface Props {
  removableElId: string;
}

export function RemoveButton({ removableElId }: Props) {
  const { editorElements, setEditorElements, setFocusedElId } = useEditorStore();

  function onRemove() {
    const newEditorElements = editorElements.filter(({ id }) => id !== removableElId);
    const lastElId = newEditorElements[newEditorElements.length - 1]?.id;

    setEditorElements(newEditorElements);
    setFocusedElId(lastElId);
  }

  return (
    <button onClick={onRemove}>
      <IconTrash />
    </button>
  );
}
