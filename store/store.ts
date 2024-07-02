import { create } from "zustand";



//sidebar props
type SideBarProps = {
  isCollapsed: boolean;
  setCollapse: (state: boolean) => void;
};

//starter props
type StarterProps = {
  isStarter: boolean;
  toggleStarter: (state: boolean) => void;
};


//export the store for collapsable sidebar
export const useCollapableStore = create<SideBarProps>((set) => ({
  isCollapsed: true,
  setCollapse: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));


//export the store for starter
export const useStarterStore = create<StarterProps>((set) => ({
  isStarter: false,
  toggleStarter: () => set((state) => ({ isStarter: !state.isStarter })),
}));

//push new data to the store
export const useAuthSignupStore = create((set) => ({
  data: [],
  step: 1,
  incrementStep: () => set((state: any) => ({ step: state.step + 1 })),
  addData: (data: []) => set((state: any) => ({...state.data, data})),
}));


//export the store for trigger set
export const useTriggerSet = create((set) => ({
  trigger: "signin",
  setTrigger: (value: string) => set({ trigger: value }),
}));
