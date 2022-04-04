import { useMemo } from "react";
import useApiResult from "./useApiResult";
import { getPokemons } from "./request";

const usePokemons = () => {
  const request = useMemo(() => getPokemons(), []);
  return useApiResult(request);
};

export default usePokemons;