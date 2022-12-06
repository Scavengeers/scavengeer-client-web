import React, { type FC, type ReactElement, useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";

const HowToPlayPopup: FC = (): ReactElement => {
    const [open, setOpen] = useState<boolean>(true);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <h1 className="self-center p-5 text-3xl text-center uppercase font-heading">
                        How to Play
                    </h1>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p className="text-left font-body1">
                            This is a welcome message for you the kind player.
                            <br />
                            <br />
                            Here we will need to think of our instructions. It needs to in
                            simple words explain the &quot;go somewhere, resolve a
                            challenge&quot; principle we are going with.
                            <br />
                            <br />
                            Also explain that some interactions will require user to grant
                            authorisation for geolocation, webcam and/or gyrometer.
                        </p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button
                        onClick={handleClose}
                        id="themeButton"
                        className="my-5 font-body2"
                        type="button"
                    >
                        I understand
                    </button>
                </DialogActions>
            </Dialog>
        </div>)
};

export default HowToPlayPopup;