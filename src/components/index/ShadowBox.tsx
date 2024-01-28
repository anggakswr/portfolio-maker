"use client";

import Image from "next/image";
import imgResize from "@/icon/resize.svg";
import imgClose from "@/icon/circle-close.svg";
import { ReactNode } from "react";

interface IShadowBoxProp {
  label: string;
  children: ReactNode;
  onClose?: () => void;
}

const ShadowBox = ({ label, children, onClose }: IShadowBoxProp) => {
  return (
    <div className="font-public-sans p-6 mb-6 bg-white rounded-xl shadow">
      <div className="flex justify-between items-center mb-[18px]">
        <div className="text-gray-800 text-base font-semibold underline leading-normal">
          {label}
        </div>

        <div className="box-equal gap-x-4">
          <button>
            <Image src={imgResize} alt="Resize" />
          </button>

          {onClose ? (
            <button onClick={onClose}>
              <Image src={imgClose} alt="Circle Close" />
            </button>
          ) : null}
        </div>
      </div>

      {children}
    </div>
  );
};

export default ShadowBox;
