import { create } from "zustand";

interface LoadingState {
  bLoading: boolean;
  setBLoading: (bLoading: boolean) => void;
}

const useLoadingStore = create<LoadingState>()((set) => ({
  bLoading: false,
  setBLoading: (bLoading) => set(() => ({ bLoading })),
}));

export default useLoadingStore;
