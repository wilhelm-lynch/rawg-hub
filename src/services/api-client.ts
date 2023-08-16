import axios, { AxiosRequestConfig, CanceledError } from "axios";

export { CanceledError };

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f76e4f8ff37742d199734894120e1cb0",
  },
});
class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((resp) => resp.data);
}

export default APIClient;
