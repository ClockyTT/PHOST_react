import classes from "./Header.module.css";
import { usePostSearch } from "../../Context/PostSearch/usePostSearch";

const Search = () => {
  const { query, setQuery } = usePostSearch();

  return (
    <div>
      <input
        className={classes.search}
        type="text"
        value={query}
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
