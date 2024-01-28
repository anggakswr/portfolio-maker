// import { useQuery } from "react-query";
// import ImageFull from "../ImageFull";
// import axios1 from "@/helpers/axios1";

// const getExps = () => {
//   return axios1.get("/experiences");
// };

const Profile = () => {
  // const { data } = useQuery("exps", getExps);
  // console.log({ data });

  return (
    <div className="font-inter w-full pb-96 relative bg-white rounded-xl overflow-hidden shadow">
      <div className="relative w-full h-60 bg-gray-200">
        {/* <ImageFull src="https://picsum.photos/500/200" alt="Cover" /> */}
      </div>

      <div className="box-center -mt-20 mb-5">
        <div className="relative z-10 w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
          {/* <ImageFull src="https://picsum.photos/100/100" alt="Profile" /> */}
        </div>
      </div>

      {/* profile */}
      <div className="text-center mb-5">
        <div className="text-gray-900 text-2xl font-bold">Nama</div>
        <div className="text-zinc-500 text-base font-bold">Title</div>

        <div className="w-1/2 mx-auto text-gray-900 text-xs font-normal leading-tight">
          Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
          ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
        </div>
      </div>

      {/* exp */}
      <div className="w-3/4 mx-auto">
        <div className="text-gray-900 text-base font-bold mb-3">Portofolio</div>

        <p className="text-sm">No data.</p>

        {/* <Exp />
        <Exp />
        <Exp /> */}
      </div>
    </div>
  );
};

const Exp = () => {
  return (
    <div className="rounded-md shadow border pt-0.5 pb-8 px-6 font-poppins mb-9 last:mb-0">
      <div className="text-black text-base font-medium">
        Front End Developer
      </div>

      <div className="text-gray-500 text-xs font-medium">MySkill</div>

      <div className="text-gray-500 text-xs font-normal mb-[7px]">
        Januari 2023 - Desember 2023
      </div>

      <div className="text-gray-900 text-xs font-normal font-inter leading-[18px]">
        Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
        ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
      </div>
    </div>
  );
};

export default Profile;
