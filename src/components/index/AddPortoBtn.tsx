import Image from "next/image";
import imgAdd from "@/icon/add.svg";
import axios1 from "@/helpers/axios1";
import useExps from "@/hooks/useExps";

const AddPortoBtn = () => {
  const { refetch } = useExps();

  const addExp = async () => {
    const exp = {
      name: "",
      position: "",
      company: "",
      description: "",
      startDate: "",
      endDate: "",
    };

    try {
      await axios1.post("/experiences", exp);
      refetch();
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } catch {}
  };

  return (
    <div className="flex gap-x-4 mb-[33px]">
      {/* btn 1 */}
      <div
        onClick={addExp}
        className="cursor-pointer h-12 px-[22px] py-[11px] rounded-lg border border-cyan-600 border-opacity-50 justify-center items-center gap-2 inline-flex"
      >
        <div className="w-6 h-6 relative">
          <Image src={imgAdd} alt="Add" />
        </div>

        <div className="text-cyan-600 text-[15px] font-bold leading-relaxed">
          Add Portofolio
        </div>
      </div>

      {/* btn 2 (backup old ui) */}
      {/* <button
          disabled
          className="cursor-not-allowed h-12 px-[22px] py-[11px] bg-gray-400 bg-opacity-25 rounded-lg"
        >
          <span className="text-gray-400 text-opacity-80 text-[15px] font-bold leading-relaxed">
            Simpan Perubahan
          </span>
        </button> */}
    </div>
  );
};

export default AddPortoBtn;
