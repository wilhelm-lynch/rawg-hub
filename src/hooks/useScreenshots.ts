import { useQuery } from "@tanstack/react-query";
import { ScreenShot } from "../entities";
import APIClient from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiCLient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiCLient.getAll,
  });
};

export default useScreenshots;
