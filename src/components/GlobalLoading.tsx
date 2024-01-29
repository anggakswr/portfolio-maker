"use client";

import useLoadingStore from "@/store/loading";

const GlobalLoading = () => {
  const { bLoading } = useLoadingStore((state) => state);

  if (!bLoading) {
    return null;
  }

  return (
    <div className="rounded-none w-screen h-screen fixed z-30 inset-0 bg-black/50 box-center flex-col gap-4">
      <div
        className="animate-spin w-20 h-20 rounded-full border-4 border-cyan-600"
        style={{
          borderBottomColor: "white",
        }}
      />

      <p className="text-white">Loading ...</p>
    </div>
  );
};

export default GlobalLoading;
