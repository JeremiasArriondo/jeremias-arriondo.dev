import { atom } from "jotai";

export const categoriesState = atom<{ selected: string[]; active: string[] }>({
  selected: [],
  active: [],
});
