import classes from "./ModalAuth.module.css";
import React, { useRef } from "react";

const ExtendedInputs = (props) => {
  const fileInputRef = useRef(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        props.setUserAvatar(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="Description"
          value={props.userDescription}
          onChange={(e) => props.setUserDescription(e.target.value)}
        />
      </div>

      <div className={classes.avatarSection}>
        <div
          className={classes.avatarPreview}
          onClick={() => fileInputRef.current.click()}
          title="Click to change avatar"
        >
          <img
            src={props.userAvatar || "avatar.png"}
            alt="avatar preview"
            className={classes.avatarImage}
          />
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleAvatarChange}
        />
      </div>
    </div>
  );
};

export default ExtendedInputs;
