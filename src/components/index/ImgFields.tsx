import { useEffect, useState } from "react";
import ImgField from "./ImgField";
import getBase64 from "@/helpers/getBase64";

export type Base64Type = string | ArrayBuffer | null;

const ImgFields = () => {
  const [base1, setBase1] = useState<Base64Type>("");
  const [base2, setBase2] = useState<Base64Type>("");
  const [file1, setFile1] = useState<null | FileList>(null);
  const [file2, setFile2] = useState<null | FileList>(null);

  useEffect(() => {
    console.log({ file1 });

    if (file1) {
      (async () => {
        try {
          const res = await getBase64(file1[0]);
          setBase1(res as Base64Type);
        } catch {}
      })();
    }
  }, [file1]);

  return (
    <>
      {/* box 1 */}
      <ImgField label="Background Image" base64={base1} setFile={setFile1} />

      {/* box 2 */}
      <ImgField label="Profile Image" base64={base2} setFile={setFile2} />
    </>
  );
};

export default ImgFields;
