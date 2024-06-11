import { create } from "zustand";

type State = {
  toggle: boolean;
};
type Actions = {
  setToogle: (val: boolean) => void;
};

export const useToggleCookie = create<State & Actions>((set) => ({
  toggle: true,
  setToogle: (val) => set(() => ({ toggle: val })),
}));
