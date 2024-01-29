import axios1 from "@/helpers/axios1";
import { useQuery } from "react-query";

export interface IProfile {
  name: string;
  avatar: string;
  cover: string;
  title: string;
  description: string;
  id: string;
}

const getProfile = () => {
  return axios1.get("/profile");
};

const useProfile = () => {
  const query = useQuery("profile", getProfile, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const profiles: IProfile[] = query.data?.data ?? [];
  const defaultProfile = {
    name: "Nama",
    title: "Programmer",
    description: "I am a programmer based in Indonesia!",
    avatar: "",
    cover: "",
    id: "1",
  };

  return {
    ...query,
    profile: profiles?.length ? profiles[0] : defaultProfile,
  };
};

export default useProfile;
