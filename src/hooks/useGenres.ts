
import Genre from "../entities/genres";
import useData from './useData';

const useGenres = () => useData<Genre>("/genres")
  
export default useGenres
