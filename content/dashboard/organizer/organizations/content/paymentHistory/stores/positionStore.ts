import { create } from "zustand";

type UIState = {
  position: "panel" | "plans";
  setPosition: (p: "panel" | "plans") => void;
};

export const usePositionStore = create<UIState>((set) => ({
  position: "panel",
  setPosition: (p: "panel" | "plans") => set({ position: p }),
}));
