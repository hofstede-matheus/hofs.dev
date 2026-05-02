import { useQuery } from "@tanstack/react-query";
import { getNoun } from "../actions/getNoun";
import { sleep } from "../utils";

const USE_GET_NOUM_QUERY_KEY = "noun";
const USE_GET_NOUM_QUERY_DEBOUNCE = 1000;

export const useGetNoumQuery = (dutchNoun: string) => {
  return useQuery({
    enabled: !!dutchNoun,
    queryKey: [USE_GET_NOUM_QUERY_KEY, dutchNoun],
    queryFn: async ({ signal }) => {
      await sleep(USE_GET_NOUM_QUERY_DEBOUNCE);
      if (!signal?.aborted) {
        return getNoun(dutchNoun);
      }
    },
    staleTime: Infinity,
  });
};
