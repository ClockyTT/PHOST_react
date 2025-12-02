import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import DefaultInputs from "./DefaultInputs";
import ExtendedInputs from "./ExtendedInputs";
import { authorization } from "../../Services/authService";
import { createUser, getMyProfile } from "../../Services/userService";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.modal.isLogModalOpen);

  const [dialogType, setDialogType] = useState(false);
  // const [email, setEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("userAvatar.png");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const changeDialogType = () => {
    setDialogType((prev) => !prev);
    setErrors({});
    setSubmitError(null);
  };

  const validate = () => {
    const newErrors = {};
    let valid = true;

    // if (!email) {
    //   newErrors.email = "Enter the email";
    //   valid = false;
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   newErrors.email = "Invalid email";
    //   valid = false;
    // }
    if (!userName) {
      newErrors.userName = "Enter the user userName";
      valid = false;
    } else if (userName.length < 5) {
      newErrors.userName = "The userName is too short";
      valid = false;
    } else if (userName.length > 12) {
      newErrors.userName = "The userName is too long";
      valid = false;
    }

    if (!userPass) {
      newErrors.userPass = "Enter the userPass";
      valid = false;
    } else if (userPass.length < 6) {
      newErrors.userPass = "The userPass is too short";
      valid = false;
    }

    if (dialogType) {
      if (userDescription.length > 60) {
        newErrors.userDescription = "The userName is too long";
        valid = false;
      }
    }
    setErrors(newErrors);
    return valid;
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_LOG_MODAL" });
    setSubmitError(null);
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    setSubmitError(null);

    try {
      // const payload = dialogType
      //   ? { userName, userDescription, userAvatar, userPass }
      //   : { userName, userPass };
      const authPayload = { userName, userPass };
      const createPayload = { userName, userDescription, userAvatar, userPass };

      await authorization(authPayload); //from authService

      if (dialogType) await createUser(createPayload); //from userService

      const profile = await getMyProfile(); //from userService

      const token = localStorage.getItem("accessToken");

      dispatch({
        type: "LOG_IN",
        payload: {
          accessToken: token,
          userProfile: profile,
        },
      });

      dispatch({ type: "CLOSE_LOG_MODAL" });
    } catch (err) {
      setSubmitError(err.message || "Authentication failed");
    } finally {
      setLoading(false);
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
          {dialogType ? "Registration" : "Authorization"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <DefaultInputs
            userName={userName}
            userPass={userPass}
            errors={errors}
            setUserName={setUserName}
            setUserPass={setUserPass}
          />

          {dialogType && (
            <ExtendedInputs
              userDescription={userDescription}
              userAvatar={userAvatar}
              errors={errors}
              setUserDescription={setUserDescription}
              setUserAvatar={setUserAvatar}
            />
          )}

          {submitError && (
            <p style={{ color: "red", marginTop: "8px" }}>{submitError}</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={changeDialogType} disabled={loading}>
            {dialogType ? "have an account" : "create account"}
          </Button>
          <Button
            variant="contained"
            autoFocus
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
