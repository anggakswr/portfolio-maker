import Image from "next/image";
import imgResize from "@/icon/resize.svg";
import imgFile from "@/icon/file.svg";
import { DragEvent, useState } from "react";
import { Base64Type } from "./ImgFields";

const ImgField = ({
  label,
  base64,
  setFile,
}: {
  label: string;
  base64: Base64Type;
  setFile: (e: FileList) => void;
}) => {
  // local state
  const [dropdown, setDropdown] = useState(true);
  const [drag, setDrag] = useState(false);

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setFile(e.dataTransfer.files);
  };

  const onDragOver = () => setDrag(true);
  const onDragLeave = () => setDrag(false);

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

      {/* gray box */}
      {dropdown ? (
        <div
          onDrop={(e) => onDrop(e)}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          className={`${
            drag ? "border-4" : "border-0"
          } border-dashed border-gray-400 mt-[18px] font-poppins h-[234px] flex flex-col gap-1 items-center justify-center bg-gray-200 rounded-lg`}
        >
          {base64 ? (
            <div>asd</div>
          ) : (
            <>
              <div>
                <Image src={imgFile} alt="File" />
              </div>

              <div>
                {drag ? (
                  <span className="text-neutral-500 text-sm font-medium text-poppins underline">
                    Release the file to upload
                  </span>
                ) : (
                  <div>
                    <span className="text-neutral-500 text-sm font-medium text-poppins underline">
                      Drag and drop files, or{" "}
                    </span>

                    <label
                      htmlFor={label}
                      className="text-sky-500 text-sm font-medium text-poppins underline"
                    >
                      Browse
                    </label>
                  </div>
                )}

                <input
                  className="hidden"
                  type="file"
                  id={label}
                  onChange={(e) => {
                    const { files } = e.target;

                    if (files) {
                      setFile(files);
                    }
                  }}
                />
              </div>

              <div className="text-neutral-400 text-xs font-normal text-poppins underline">
                Support formats : png, jpg, jpeg, mp4.
              </div>

              <div className="text-neutral-400 text-xs font-normal text-poppins underline">
                Max size : 500Mb
              </div>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ImgField;
