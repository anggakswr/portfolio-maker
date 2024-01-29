import Btn1 from "@/components/form/Btn1";
import axios1 from "@/helpers/axios1";
import { Dispatch, SetStateAction } from "react";

const DeletePopup = ({
  deletePopup,
  setDeletePopup,
}: {
  deletePopup: string;
  setDeletePopup: Dispatch<SetStateAction<string>>;
}) => {
  const closePopup = () => setDeletePopup("");

  const onOk = async () => {
    try {
      await axios1.delete(`/experiences/${deletePopup}`);
      closePopup();
    } catch {}
  };

  if (!deletePopup) {
    return null;
  }

  return (
    <div className="fixed z-20 inset-0 box-center">
      {/* bg */}
      <div className="absolute inset-0 bg-black/50" onClick={closePopup} />

      {/* content */}
      <div className="relative z-10 p-4 rounded-xl bg-white">
        {/* header */}
        <div className="pb-2 border-b box-between">
          <p className="font-bold">Peringatan</p>
          <button className="text-3xl text-red-500" onClick={closePopup}>
            &times;
          </button>
        </div>

        <p className="p-4">Anda yakin ingin menghapus portfolio?</p>

        {/* footer */}
        <div className="pt-4 box-end border-t">
          <div>
            <Btn1 onClick={onOk} text="Ya" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
