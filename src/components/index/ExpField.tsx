import { useEffect, useState } from "react";
import ShadowBox from "./ShadowBox";
import CustomDate from "./shadow-box/CustomDate";
import CustomInput from "./shadow-box/CustomInput";
import CustomTextarea from "./shadow-box/CustomTextarea";
import axios1 from "@/helpers/axios1";
import useExps, { IExp } from "@/hooks/useExps";

const ExpField = () => {
  const { exps } = useExps();

  return (
    <>
      {exps.map((exp, i) => (
        <CustomField key={`custom-field-${exp.id}`} apiExp={exp} index={i} />
      ))}
    </>
  );
};

const CustomField = ({ apiExp, index }: { apiExp: IExp; index: number }) => {
  // local state
  const [exp, setExp] = useState({
    name: "",
    position: "",
    company: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    setExp(apiExp);
  }, [apiExp]);

  const setField = (value: string, prop: string) => {
    setExp((prevExp) => {
      return {
        ...prevExp,
        [prop]: value,
      };
    });
  };

  const onSubmit = async () => {
    try {
      await axios1.post("/experiences", exp);
    } catch {}
  };

  return (
    <ShadowBox label={`Portfolio ${index + 1}`} onClose={() => {}}>
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

      <CustomDate
        startDate={exp.startDate}
        endDate={exp.endDate}
        startDateChange={(e) => setField(e, "startDate")}
        endDateChange={(e) => setField(e, "endDate")}
      />

      <CustomTextarea
        placeholder="Deskripsi"
        value={exp.description}
        onChange={(e) => setField(e, "description")}
      />

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
