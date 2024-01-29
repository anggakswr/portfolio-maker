import useLoadingStore from "@/store/loading";
import useSnackbarStore from "@/store/snackbar";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axios1 = axios.create({
  baseURL: "https://65b49b3041db5efd2866ab3c.mockapi.io/api/v1",
});

const oMessage = {
  post: "tambah",
  put: "edit",
  patch: "edit",
  delete: "hapus",
};

const aMethods = "post,put,patch,delete".split(",");

const { setBLoading } = useLoadingStore.getState();
const { setSnackbar } = useSnackbarStore.getState();

const onRequest = (
  req: InternalAxiosRequestConfig<any>
):
  | InternalAxiosRequestConfig<any>
  | Promise<InternalAxiosRequestConfig<any>> => {
  setBLoading(true);
  return req;
};

const onResponse = (res: AxiosResponse<any, any>): AxiosResponse<any, any> => {
  setBLoading(false);

  const { config, status } = res;
  const { method } = config;
  const sMessage = oMessage[method as keyof typeof oMessage];

  if (method && aMethods.includes(method)) {
    if ([200, 201].includes(status)) {
      // if success
      setSnackbar({
        type: "success",
        message: `Berhasil ${sMessage} data`,
      });
    } else {
      // if error
      setSnackbar({
        type: "error",
        message: `Gagal ${sMessage} data`,
      });
    }
  }

  return res;
};

const onResponseError = (err: any) => {
  setBLoading(false);

  const { config } = err;
  const { method } = config;
  const sMessage = oMessage[method as keyof typeof oMessage];

  if (method && aMethods.includes(method)) {
    // if error
    setSnackbar({
      type: "error",
      message: `Gagal ${sMessage} data`,
    });
  }

  return Promise.reject(err);
};

axios1.interceptors.request.use(onRequest);
axios1.interceptors.response.use(onResponse, onResponseError);

export default axios1;
