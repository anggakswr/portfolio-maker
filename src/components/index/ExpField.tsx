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

interface IError {
  position: string[];
  company: string[];
  description: string[];
  startDate: string[];
  endDate: string[];
}

const defaultError = {
  position: [],
  company: [],
  description: [],
  startDate: [],
  endDate: [],
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
  // hooks
  const { refetch } = useExps();

  // local state
  const [oError, setOError] = useState<IError>(defaultError);
  const [exp, setExp] = useState({
    id: "",
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
    setOError(defaultError);

    const aFields = [
      "position",
      "company",
      "startDate",
      "endDate",
      "description",
    ];

    const allFilled = aFields.every(
      (sField) => exp[sField as keyof typeof exp]
    );

    if (allFilled) {
      try {
        await axios1.put(`/experiences/${exp.id}`, exp);
        refetch();
      } catch {}
    } else {
      aFields.forEach((sField) => {
        if (!exp[sField as keyof typeof exp]) {
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
    <ShadowBox
      label={`Portfolio ${index + 1}`}
      onClose={() => setDeletePopup(exp.id)}
    >
      <CustomInput
        placeholder="Posisi"
        value={exp.position}
        onChange={(e) => setField(e, "position")}
        aErrors={oError.position}
      />

      <CustomInput
        placeholder="Perusahaan"
        value={exp.company}
        onChange={(e) => setField(e, "company")}
        aErrors={oError.company}
      />

      <div className="mb-6 last:mb-0 grid grid-cols-2 gap-x-3.5 ">
        <div>
          <div className="mb-1 text-sm text-gray-800 font-semibold leading-normal">
            Start Date
          </div>

          <CustomInput
            placeholder=""
            type="date"
            value={exp.startDate}
            onChange={(e) => setField(e, "startDate")}
            aErrors={oError.startDate}
          />
        </div>

        <div>
          <div className="mb-1 text-sm text-gray-800 font-semibold leading-normal">
            End Date
          </div>

          <CustomInput
            placeholder=""
            type="date"
            value={exp.endDate}
            onChange={(e) => setField(e, "endDate")}
            aErrors={oError.endDate}
          />
        </div>
      </div>

      {/* <CustomDate
        startDate={exp.startDate}
        endDate={exp.endDate}
        startDateChange={(e) => setField(e, "startDate")}
        endDateChange={(e) => setField(e, "endDate")}
        aStartDateErrors={oError.startDate}
        aEndDateErrors={oError.endDate}
      /> */}

      <CustomTextarea
        placeholder="Deskripsi"
        value={exp.description}
        onChange={(e) => setField(e, "description")}
        aErrors={oError.company}
      />

      <Btn1 onClick={onSubmit} text="Simpan" />
    </ShadowBox>
  );
};

export default ExpField;
