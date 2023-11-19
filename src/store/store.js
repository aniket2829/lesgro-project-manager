import { create } from "zustand";

export const useZustandStore = create((set) => ({
    sidebarOpen: false,
    toggleSidebar: () => set((state) => ({sidebarOpen: !state.sidebarOpen}))
}))