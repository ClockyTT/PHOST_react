import TextField from '@mui/material/TextField';
import classes from './ModalAuth.module.css'

const DefaultInputs = (props) => {

  return (
    <div>
      <div>
        <input
          className={classes.input}
          type="email"
          placeholder="Email"
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
          required
        />
        {props.errors.email && <p className={classes.errors}>{props.errors.email}</p>}
      </div>

      <div>
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
          required
        />
        {props.errors.password && <p className={classes.errors}>{props.errors.password}</p>}
      </div>
    </div>
  )
}

export default DefaultInputs;