import * as zustand from "zustand";
import type { FormEditorElement } from "@/types";

interface EditorStore {
  newAddedElId: string;
  setNewAddedElId: (newAddedElId: string) => void;

  focusedElId: string;
  setFocusedElId: (focusedElId: string) => void;

  editorElements: FormEditorElement[];
  setEditorElements: (editorElements: FormEditorElement[]) => void;
}

export const useEditorStore = zustand.create<EditorStore>((set) => ({
  newAddedElId: "",
  setNewAddedElId: (newAddedElId) => set({ newAddedElId }),

  focusedElId: "",
  setFocusedElId: (focusedElId) => set({ focusedElId }),

  editorElements: [],
  setEditorElements: (editorElements) => set({ editorElements }),
}));
