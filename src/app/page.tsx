"use client";

import Image from "next/image";
import imgAdd from "@/icon/add.svg";
import Profile from "@/components/index/Profile";
import ImgField from "@/components/index/ImgField";
import ShadowBox from "@/components/index/ShadowBox";
// import CustomInput from "@/components/index/shadow-box/CustomInput";
// import CustomTextarea from "@/components/index/shadow-box/CustomTextarea";
import ExpField from "@/components/index/ExpField";

export default function Home() {
  return (
    <div>
      <div className="flex gap-x-4 mb-[33px]">
        {/* btn 1 */}
        <div className="cursor-pointer h-12 px-[22px] py-[11px] rounded-lg border border-cyan-600 border-opacity-50 justify-center items-center gap-2 inline-flex">
          <div className="w-6 h-6 relative">
            <Image src={imgAdd} alt="Add" />
          </div>

          <div className="text-cyan-600 text-[15px] font-bold leading-relaxed">
            Add Portofolio
          </div>
        </div>

        {/* btn 2 */}
        <button
          disabled
          className="cursor-not-allowed h-12 px-[22px] py-[11px] bg-gray-400 bg-opacity-25 rounded-lg"
        >
          <span className="text-gray-400 text-opacity-80 text-[15px] font-bold leading-relaxed">
            Simpan Perubahan
          </span>
        </button>
      </div>

      <div className="flex items-start gap-x-[45px]">
        <div className="w-3/5">
          {/* box 1 */}
          <ImgField label="Background Image" />

          {/* box 2 */}
          <ImgField label="Profile Image" />

          {/* box 3 */}
          <ShadowBox label="Profile">
            asd
            {/* <CustomInput placeholder="Nama" />
            <CustomInput placeholder="Title / Posisi" />
            <CustomTextarea placeholder="Deskripsi" /> */}
          </ShadowBox>

          {/* box 4 */}
          <ExpField />
        </div>

        <div className="w-2/5">
          <Profile />
        </div>
      </div>
    </div>
  );
}
