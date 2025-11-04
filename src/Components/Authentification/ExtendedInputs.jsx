import classes from './ModalAuth.module.css'
import React, { useRef } from 'react';

const ExtendedInputs = (props) => {

    const fileInputRef = useRef(null);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                props.setAvatar(ev.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <div>
            <div>
                <input
                    className={classes.input}
                    type="text"
                    placeholder="User name"
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
                    required
                />
                {props.errors.name && <p className={classes.errors}>{props.errors.name}</p>}
            </div>

            <div>
                <input
                    className={classes.input}
                    type="text"
                    placeholder="Description"
                    value={props.description}
                    onChange={(e) => props.setDescription(e.target.value)}
                />
            </div>

            <div className={classes.avatarSection}>
                <div
                    className={classes.avatarPreview}
                    onClick={() => fileInputRef.current.click()}
                    title="Click to change avatar"
                >
                    <img
                        src={props.avatar || 'avatar.png'}
                        alt="avatar preview"
                        className={classes.avatarImage}
                    />
                </div>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleAvatarChange}
                />
            </div>
        </div>      
 )
}

export default ExtendedInputs;