"use client";

import Profile from "@/components/index/Profile";
import ExpField from "@/components/index/ExpField";
import ProfileField from "@/components/index/ProfileField";
import AddPortoBtn from "@/components/index/AddPortoBtn";
import ImgFields from "@/components/index/ImgFields";

export default function Home() {
  return (
    <div>
      <AddPortoBtn />

      <div className="flex items-start gap-x-[45px]">
        <div className="w-3/5">
          {/* box 1 & box 2 */}
          <ImgFields />

          {/* box 3 */}
          <ProfileField />

          {/* box 4 (portos) */}
          <ExpField />
        </div>

        <div className="w-2/5">
          <Profile />
        </div>
      </div>
    </div>
  );
}
