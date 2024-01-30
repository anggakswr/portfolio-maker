import { useEffect, useState } from "react";
import ShadowBox from "./ShadowBox";
import CustomInput from "./shadow-box/CustomInput";
import CustomTextarea from "./shadow-box/CustomTextarea";
import Btn1 from "../form/Btn1";
import axios1 from "@/helpers/axios1";
import useProfile, { IProfile } from "@/hooks/useProfile";

const ProfileField = () => {
  const { profile: apiProfile, refetch } = useProfile();
  return <CustomField apiProfile={apiProfile} />;
};

const CustomField = ({ apiProfile }: { apiProfile: IProfile }) => {
  // hooks
  const { refetch } = useProfile();

  const defaultProfile = {
    name: "",
    avatar: "",
    cover: "",
    title: "",
    description: "",
    id: "",
  };

  // local state
  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    setProfile(apiProfile);
  }, [apiProfile]);

  const setField = (value: string, prop: string) => {
    setProfile((prevProfile) => {
      return {
        ...prevProfile,
        [prop]: value,
      };
    });
  };

  const onSubmit = async () => {
    try {
      await axios1.put(`/profile/${profile.id}`, profile);
      refetch();
    } catch {}
  };

  return (
    <ShadowBox label="Profile">
      <CustomInput
        placeholder="Nama"
        value={profile.name}
        onChange={(e) => setField(e, "name")}
      />

      <CustomInput
        placeholder="Title / Posisi"
        value={profile.title}
        onChange={(e) => setField(e, "title")}
      />

      <CustomTextarea
        placeholder="Deskripsi"
        value={profile.description}
        onChange={(e) => setField(e, "description")}
      />

      <Btn1 onClick={onSubmit} text="Simpan" />
    </ShadowBox>
  );
};

export default ProfileField;
