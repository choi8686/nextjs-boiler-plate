import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
} from "axios";

export interface IapiForm extends AxiosRequestConfig {
  method: Method | undefined;
  url: string;
  data?: any;
  tk?: string;
  headers?: AxiosRequestHeaders;
}
export type TapiRes = AxiosResponse;
export type TapiError = Error | AxiosError;

const fetchData = async (config: IapiForm): Promise<unknown> => {
  const { method, url, data, tk } = config;
  try {
    const res: AxiosResponse = await axios({
      method,
      url,
      data,
      headers: { ...(tk && { Authorization: `Bearer ${tk}` }) },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
export default fetchData;
