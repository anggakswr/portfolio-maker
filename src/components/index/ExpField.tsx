import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ShadowBox from "./ShadowBox";
import CustomDate from "./shadow-box/CustomDate";
import CustomInput from "./shadow-box/CustomInput";
import CustomTextarea from "./shadow-box/CustomTextarea";
import axios1 from "@/helpers/axios1";
import useExps, { IExp } from "@/hooks/useExps";
import DeletePopup from "./exp-field/DeletePopup";
import Btn1 from "../form/Btn1";

const ExpField = () => {
  // local state
  const [deletePopup, setDeletePopup] = useState("");

  // hooks
  const { exps } = useExps();

  return (
    <>
      <DeletePopup deletePopup={deletePopup} setDeletePopup={setDeletePopup} />

      {exps.map((exp, i) => (
        <CustomField
          key={`custom-field-${exp.id}`}
          apiExp={exp}
          index={i}
          setDeletePopup={setDeletePopup}
        />
      ))}
    </>
  );
};

const CustomField = ({
  apiExp,
  index,
  setDeletePopup,
}: {
  apiExp: IExp;
  index: number;
  setDeletePopup: Dispatch<SetStateAction<string>>;
}) => {
  // local state
  const [exp, setExp] = useState({
    id: "",
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
    <ShadowBox
      label={`Portfolio ${index + 1}`}
      onClose={() => setDeletePopup(exp.id)}
    >
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

      <Btn1 onClick={onSubmit} text="Save" />
    </ShadowBox>
  );
};

export default ExpField;
