"use client";

import useSnackbarStore from "@/store/snackbar";
import { useEffect } from "react";

const GlobalSnackbar = () => {
  const { snackbar, setSnackbar } = useSnackbarStore((state) => state);
  const sPosition = snackbar ? "right-4" : "-right-[999px]";
  const sColor = snackbar?.type === "success" ? "bg-green-500" : "bg-red-500";

  useEffect(() => {
    if (snackbar) {
      setTimeout(() => {
        setSnackbar(null);
      }, 5000);
    }
  }, [setSnackbar, snackbar]);

  return (
    <div
      className={`fixed bottom-4 ${sPosition} ${sColor} py-2 px-4 box-equal gap-x-4 text-white shadow-xl`}
    >
      <p className="text-sm">{snackbar?.message}</p>

      <button className="text-xl" onClick={() => setSnackbar(null)}>
        &times;
      </button>
    </div>
  );
};

export default GlobalSnackbar;
