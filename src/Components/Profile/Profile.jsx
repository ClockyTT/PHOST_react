import classes from "./Profile.module.css";
import { useSelector } from "react-redux";

const Profile = () => {
  const profile = useSelector((state) => state.auth.userProfile);

  // console.log(profile);

  return (
    <div className={classes.Profile}>
      <img className={classes.avatar} src={profile?.userAvatar} alt="profile" />
      <h1 className={classes.name}>{profile?.userName}</h1>
    </div>
  );
};

export default Profile;
