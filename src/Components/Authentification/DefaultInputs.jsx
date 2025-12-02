import TextField from "@mui/material/TextField";
import classes from "./ModalAuth.module.css";

const DefaultInputs = (props) => {
  return (
    <div>
      <div>
        <input
          className={classes.input}
          type="userName"
          placeholder="User Name"
          value={props.userName}
          onChange={(e) => props.setUserName(e.target.value)}
          required
        />
        {props.errors.userName && (
          <p className={classes.errors}>{props.errors.userName}</p>
        )}
      </div>

      <div>
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
          value={props.userPass}
          onChange={(e) => props.setUserPass(e.target.value)}
          required
        />
        {props.errors.userPass && (
          <p className={classes.errors}>{props.errors.userPass}</p>
        )}
      </div>
    </div>
  );
};

export default DefaultInputs;
