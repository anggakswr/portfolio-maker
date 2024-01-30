import { useCallback, useEffect, useState } from "react";
import ImgField from "./ImgField";
import getBase64 from "@/helpers/getBase64";
// import axios1 from "@/helpers/axios1";
import useProfile from "@/hooks/useProfile";
import useBase64Store from "@/store/base64";

export type Base64Type = string | ArrayBuffer | null;

const ImgFields = () => {
  // global state
  const { base1, base2, setBase1, setBase2 } = useBase64Store((state) => state);

  // local state
  // const [base1, setBase1] = useState<Base64Type>("");
  // const [base2, setBase2] = useState<Base64Type>("");
  const [file1, setFile1] = useState<null | FileList>(null);
  const [file2, setFile2] = useState<null | FileList>(null);

  // hooks
  const { profile } = useProfile();

  useEffect(() => {
    // local storage
    const lsBase1 = localStorage.getItem("base1");

    if (lsBase1) {
      setBase1(lsBase1);
    }
  }, [setBase1]);

  useEffect(() => {
    // local storage
    const lsBase2 = localStorage.getItem("base2");

    if (lsBase2) {
      setBase2(lsBase2);
    }
  }, [setBase2]);

  const imgUploader = useCallback(
    async (type: "file1" | "file2") => {
      const isFile1 = type === "file1";
      const file = isFile1 ? file1 : file2;
      const base = isFile1 ? "base1" : "base2";

      if (file) {
        try {
          const res = await getBase64(file[0]);
          const base64 = res as Base64Type;

          // cannot send to mockAPI because error 413 (payload too large)
          // await axios1.put(`/profile/${profile.id}`, {
          //   ...profile,
          //   cover: base64,
          // });

          // so i decided to use localStorage
          localStorage.setItem(base, base64 as string);

          if (isFile1) {
            setBase1(base64);
          } else {
            setBase2(base64);
          }
        } catch {}
      }
    },
    [file1, file2, setBase1, setBase2]
  );

  useEffect(() => {
    imgUploader("file1");
  }, [file1, imgUploader, profile]);

  useEffect(() => {
    imgUploader("file2");
  }, [file2, imgUploader, profile]);

  return (
    <>
      {/* box 1 */}
      <ImgField
        label="Background Image"
        base64={base1}
        setFile={setFile1}
        onClose={() => {
          setBase1("");
          localStorage.setItem("base1", "");
        }}
      />

      {/* box 2 */}
      <ImgField
        label="Profile Image"
        base64={base2}
        setFile={setFile2}
        onClose={() => {
          setBase2("");
          localStorage.setItem("base2", "");
        }}
      />
    </>
  );
};

export default ImgFields;
