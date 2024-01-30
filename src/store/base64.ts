import { Base64Type } from "@/components/index/ImgFields";
import { create } from "zustand";

interface Base64State {
  base1: Base64Type;
  setBase1: (base1: Base64Type) => void;
  base2: Base64Type;
  setBase2: (base2: Base64Type) => void;
}

const useBase64Store = create<Base64State>()((set) => ({
  base1: "",
  setBase1: (base1) => set(() => ({ base1 })),
  base2: "",
  setBase2: (base2) => set(() => ({ base2 })),
}));

export default useBase64Store;
