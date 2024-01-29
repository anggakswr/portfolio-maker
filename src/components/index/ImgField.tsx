import Image from "next/image";
import imgResize from "@/icon/resize.svg";
import imgFile from "@/icon/file.svg";
import { useState } from "react";

const ImgField = ({ label }: { label: string }) => {
  const [dropdown, setDropdown] = useState(true);

  return (
    <div className="p-6 mb-6 bg-white rounded-xl shadow">
      <div className="flex justify-between items-center">
        <div className="text-gray-800 text-base font-semibold underline leading-normal">
          {label}
        </div>

        <button onClick={() => setDropdown(!dropdown)}>
          <Image src={imgResize} alt="Resize" />
        </button>
      </div>

      {dropdown ? (
        <div className="mt-[18px] font-poppins h-[234px] flex flex-col gap-1 items-center justify-center bg-gray-200 rounded-lg">
          <div>
            <Image src={imgFile} alt="File" />
          </div>

          <div>
            <span className="text-neutral-500 text-sm font-medium text-poppins underline">
              Drag and drop files, or{" "}
            </span>
            <span className="text-sky-500 text-sm font-medium text-poppins underline">
              Browse
            </span>
          </div>

          <div className="text-neutral-400 text-xs font-normal text-poppins underline">
            Support formats : png, jpg, jpeg, mp4.
          </div>

          <div className="text-neutral-400 text-xs font-normal text-poppins underline">
            Max size : 500Mb
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ImgField;
