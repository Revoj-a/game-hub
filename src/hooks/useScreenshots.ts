import { useQuery } from "@tanstack/react-query";
import type { Screenshots } from "../entities/Screenshots";
import APICLient from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClient = new APICLient<Screenshots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
