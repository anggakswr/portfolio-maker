import { create } from "zustand";

interface ISnackbar {
  type: "success" | "error";
  message: string;
}

type SnackbarType = ISnackbar | null;

interface SnackbarState {
  snackbar: SnackbarType;
  setSnackbar: (obj: SnackbarType) => void;
}

const useSnackbarStore = create<SnackbarState>()((set) => ({
  snackbar: null,
  setSnackbar: (snackbar) => set(() => ({ snackbar })),
}));

export default useSnackbarStore;
