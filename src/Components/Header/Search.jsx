import React from "react";
import classes from './Header.module.css';

const Search = () => {
  return (
    <div>
      <input className={classes.search} type="text" placeholder="Search"></input>
    </div>
  )
}

export default Search;