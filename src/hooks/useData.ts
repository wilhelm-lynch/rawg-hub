import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

import FetchResponse from '../entities/fetchResponse';

const useData = <T>(endpoint: string) => {
const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true)
    apiClient
      .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
      .then((resp) => {
        setData(resp.data.results);
        setLoading(false)
      })
      .catch((err: Error) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)});

      return () => controller.abort()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return {data, error, isLoading}
}

export default useData;