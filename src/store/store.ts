import { create } from "zustand";

type StoreState = {
    sidebarOpen: boolean,
    toggleSidebar: () => void
}

export const useZustandStore = create<StoreState>()((set) => ({
    sidebarOpen: false,
    toggleSidebar: () => set((state) => ({sidebarOpen: !state.sidebarOpen}))
}))