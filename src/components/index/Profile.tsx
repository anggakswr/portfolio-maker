import Image from "next/image";

const Profile = () => {
  return (
    <div className="font-inter w-full h-[1184px] relative bg-white rounded-xl overflow-hidden shadow">
      <div className="relative w-full h-60 bg-gray-200">
        <Image
          src="https://picsum.photos/500/200"
          alt="Cover"
          fill
          objectFit="cover"
        />
      </div>

      <div className="box-center -mt-20 mb-5">
        <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden">
          <Image
            src="https://picsum.photos/100/100"
            alt="Profile"
            fill
            objectFit="cover"
          />
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

        <Exp />
        <Exp />
        <Exp />
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
