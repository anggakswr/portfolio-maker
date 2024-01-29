import axios1 from "@/helpers/axios1";
import { useQuery } from "react-query";

export interface IExp {
  createdAt: string;
  name: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  id: string;
}

const getExps = () => {
  return axios1.get("/experiences");
};

const useExps = () => {
  const query = useQuery("exps", getExps, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const exps: IExp[] = query.data?.data ?? [];

  return { ...query, exps };
};

export default useExps;
