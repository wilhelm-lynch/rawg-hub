import useData from "./useData";
import Platform from "../entities/platform";

const usePlatforms = () => useData<Platform | null>("/platforms/lists/parents");

export default usePlatforms;
