import classes from "./Header.module.css";
import UserNav from "./Navigation/UserNav";
import GuestNav from "./Navigation/GuestNav";
import Search from "./Search";
import { usePostSearch } from "../../Context/PostSearch/usePostSearch";

const Header = (props) => {
  const { findAll } = usePostSearch();

  return (
    <div className={classes.Header}>
      <div>
        <img
          className={classes.image}
          src="logo.png"
          alt="logo"
          onClick={findAll}
        />
      </div>
      <Search />
      {props.isAuth ? <UserNav /> : <GuestNav />}
    </div>
  );
};

export default Header;
