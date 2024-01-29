"use client";

import Image from "next/image";
import imgResize from "@/icon/resize.svg";
import imgClose from "@/icon/circle-close.svg";
import { ReactNode, useState } from "react";

interface IShadowBoxProp {
  label: string;
  children: ReactNode;
  onClose?: () => void;
}

const ShadowBox = ({ label, children, onClose }: IShadowBoxProp) => {
  const [dropdown, setDropdown] = useState(true);

  return (
    <div className="font-public-sans p-6 mb-6 bg-white rounded-xl shadow">
      <div className="flex justify-between items-center">
        <div className="text-gray-800 text-base font-semibold underline leading-normal">
          {label}
        </div>

        <div className="box-equal gap-x-4">
          <button onClick={() => setDropdown(!dropdown)}>
            <Image src={imgResize} alt="Resize" />
          </button>

          {onClose ? (
            <button onClick={onClose}>
              <Image src={imgClose} alt="Circle Close" />
            </button>
          ) : null}
        </div>
      </div>

      {dropdown ? <div className="mt-[18px]">{children}</div> : null}
    </div>
  );
};

export default ShadowBox;
