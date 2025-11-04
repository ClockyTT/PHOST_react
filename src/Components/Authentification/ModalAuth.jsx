import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DefaultInputs from './DefaultInputs';
import ExtendedInputs from './ExtendedInputs';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {

  const [dialogType, setDialogType] = useState(false);  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState('avatar.png');
  const [errors, setErrors] = useState({});

  const changeDialogType = () => {
    setDialogType(prev => !prev);
  }

  const validate = () => {
    const newErrors = {};
    let valid = true;

    if (!email) {
      newErrors.email = "Enter the email";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Enter the password";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "The password is too short";
      valid = false;
    }

    if (!name) {
      newErrors.name = "Enter the user name";
      valid = false;
    } else if (name.length < 5) {
      newErrors.name = "The name is too short";
      valid = false;
    } else if (name.length > 12) {
      newErrors.name = "The name is too long";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const dispatch = useDispatch()

  const isOpen = useSelector(state => state.auth.isModalOpen)

  const handleClose = () => {
    dispatch({type: "CLOSE_LOG_MODAL"})
  };

  const handleSubmit = () => {
    if (validate()){
      dispatch({type: "CHANGE_AUTH_STATE"})
    }
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {dialogType ? 'Registration' : 'Authorization'}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>

          {dialogType && 
          <ExtendedInputs
            name = {name}
            description = {description}
            avatar = {avatar}
            errors = {errors}
            setName = {setName}
            setDescription = {setDescription}
            setAvatar = {setAvatar}
          />}
          
          <DefaultInputs
            email = {email}
            password = {password}
            errors = {errors}
            setEmail = {setEmail}
            setPassword = {setPassword}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={changeDialogType}>
            {dialogType ? 'have an account' : 'create account'}
          </Button>
          <Button variant='contained' autoFocus onClick={handleSubmit}>
            submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}