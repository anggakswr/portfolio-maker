import { useEffect, useState } from "react";
import ShadowBox from "./ShadowBox";
import CustomInput from "./shadow-box/CustomInput";
import CustomTextarea from "./shadow-box/CustomTextarea";
import Btn1 from "../form/Btn1";
import axios1 from "@/helpers/axios1";
import useProfile, { IProfile } from "@/hooks/useProfile";

interface IError {
  name: string[];
  title: string[];
  description: string[];
}

const ProfileField = () => {
  const { profile: apiProfile } = useProfile();
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

  const defaultError = {
    name: [],
    title: [],
    description: [],
  };

  // local state
  const [profile, setProfile] = useState(defaultProfile);
  const [oError, setOError] = useState<IError>(defaultError);

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
    setOError(defaultError);

    const aFields = ["name", "title", "description"];
    const allFilled = aFields.every(
      (sField) => profile[sField as keyof typeof profile]
    );

    if (allFilled) {
      try {
        await axios1.put(`/profile/${profile.id}`, profile);
        refetch();
      } catch {}
    } else {
      aFields.forEach((sField) => {
        if (!profile[sField as keyof typeof profile]) {
          setOError((prevErr) => {
            return {
              ...prevErr,
              [sField]: ["Kotak wajib diisi"],
            };
          });
        }
      });
    }
  };

  return (
    <ShadowBox label="Profile">
      <CustomInput
        placeholder="Nama"
        value={profile.name}
        onChange={(e) => setField(e, "name")}
        aErrors={oError.name}
      />

      <CustomInput
        placeholder="Title / Posisi"
        value={profile.title}
        onChange={(e) => setField(e, "title")}
        aErrors={oError.title}
      />

      <CustomTextarea
        placeholder="Deskripsi"
        value={profile.description}
        onChange={(e) => setField(e, "description")}
        aErrors={oError.description}
      />

      <Btn1 onClick={onSubmit} text="Simpan" />
    </ShadowBox>
  );
};

export default ProfileField;
