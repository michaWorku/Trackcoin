import { Snackbar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import MuiAlert from "@material-ui/lab/Alert";

export default function ConsecutiveSnackbars() {
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  const { snackPack, setSnackPack } = useGlobalContext();
  useEffect(() => {
    if (snackPack.length && !messageInfo && snackPack[0].type !== "edit") {
      setMessageInfo({ ...snackPack[0] });

      setSnackPack((prev) => prev.slice(1));

      setOpen(true);
    }
    if (
      (snackPack.length && messageInfo && open) ||
      (snackPack.length && snackPack[0].type === "edit")
    ) {
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
      >
        <>
          <MuiAlert
            onClose={handleClose}
            severity={messageInfo ? messageInfo.type : undefined}
            elevation={6}
            variant="filled"
          >
            {messageInfo ? messageInfo.message : undefined}
          </MuiAlert>
        </>
      </Snackbar>
    </div>
  );
}
