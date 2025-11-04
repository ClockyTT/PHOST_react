import classes from './Profile.module.css'

const Profile = () => {
    return (
      <div className={classes.Profile}>
        <img className={classes.avatar} src='avatar.png' alt="profile"/>
        <h1 className={classes.name}>Neytiri12</h1>
      </div>
    );
  }

export default Profile;