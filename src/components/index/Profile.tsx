// import ImageFull from "../ImageFull";
import useExps, { IExp } from "@/hooks/useExps";
import useProfile from "@/hooks/useProfile";
import dayjs from "dayjs";

const Profile = () => {
  const { exps } = useExps();
  const { profile } = useProfile();

  return (
    <div className="font-inter w-full pb-96 relative bg-white rounded-xl overflow-hidden shadow">
      <div className="relative w-full h-60 bg-gray-200 rounded-b-none">
        {/* <ImageFull src="https://picsum.photos/500/200" alt="Cover" /> */}
      </div>

      <div className="box-center -mt-20 mb-5">
        <div className="relative z-10 w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
          {/* <ImageFull src="https://picsum.photos/100/100" alt="Profile" /> */}
        </div>
      </div>

      {/* profile */}
      <div className="text-center mb-5">
        <div className="text-gray-900 text-2xl font-bold">{profile.name}</div>
        <div className="text-zinc-500 text-base font-bold">{profile.title}</div>

        <div className="w-1/2 mx-auto text-gray-900 text-xs font-normal leading-tight">
          {profile.description}
        </div>
      </div>

      {/* exp */}
      <div className="w-3/4 mx-auto">
        <div className="text-gray-900 text-base font-bold mb-3">Portofolio</div>

        {!exps?.length ? <p className="text-sm">No data.</p> : null}

        {exps.map((exp) => (
          <Exp key={`exp-${exp.id}`} exp={exp} />
        ))}
      </div>
    </div>
  );
};

const Exp = ({ exp }: { exp: IExp }) => {
  return (
    <div className="rounded-md shadow border p-4 font-poppins mb-9 last:mb-0">
      <div className="text-black text-base font-medium">
        {/* Front End Developer */}
        {exp.position}
      </div>

      <div className="text-gray-500 text-xs font-medium">
        {/* MySkill */}
        {exp.company}
      </div>

      <div className="text-gray-500 text-xs font-normal mb-[7px]">
        {/* Januari 2023 - Desember 2023 */}
        {dayjs(exp.startDate).format("MMMM YYYY")} -{" "}
        {dayjs(exp.endDate).format("MMMM YYYY")}
      </div>

      <div className="text-gray-900 text-xs font-normal font-inter leading-[18px]">
        {exp.description}
      </div>
    </div>
  );
};

export default Profile;
