import { useState } from "react";
import ShadowBox from "./ShadowBox";
import CustomDate from "./shadow-box/CustomDate";
import CustomInput from "./shadow-box/CustomInput";
import CustomTextarea from "./shadow-box/CustomTextarea";
import axios1 from "@/helpers/axios1";
import dayjs from "dayjs";

const ExpField = () => {
  return <CustomField />;
};

const CustomField = () => {
  const [exp, setExp] = useState({
    name: "",
    position: "",
    company: "",
    description: "ASD",
  });

  const setField = (value: string, prop: string) => {
    setExp((prevExp) => {
      return {
        ...prevExp,
        [prop]: value,
      };
    });
  };

  const today = dayjs().format("YYYY-MM-DD");

  const onSubmit = async () => {
    try {
      await axios1.post("/experiences", {
        ...exp,
        startDate: today,
        endDate: today,
      });
    } catch {}
  };

  return (
    <ShadowBox label="Portfolio 1" onClose={() => {}}>
      <CustomInput
        placeholder="Nama"
        value={exp.name}
        onChange={(e) => setField(e, "name")}
      />

      <CustomInput
        placeholder="Posisi"
        value={exp.position}
        onChange={(e) => setField(e, "position")}
      />

      <CustomInput
        placeholder="Perusahaan"
        value={exp.company}
        onChange={(e) => setField(e, "company")}
      />

      <CustomDate />
      <CustomTextarea placeholder="Deskripsi" />

      <button
        onClick={onSubmit}
        className="px-[22px] py-[11px] rounded-lg bg-cyan-600"
      >
        <span className="text-white text-[15px] font-bold leading-relaxed">
          Save
        </span>
      </button>
    </ShadowBox>
  );
};

export default ExpField;
