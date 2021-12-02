import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./styles";
import { useGlobalContext } from "../../context/context";

const CustomSnackbar = () => {
  const classes = useStyles();

  const { open, setOpen, alertType, setAlertType } = useGlobalContext();
  let severity;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(!open);
    setAlertType("SUCCESS");
  };

  const alertMessage = (alertType) => {
    let message = "created";
    switch (alertType) {
      case "SUCCESS":
        severity = "success";
        message = "created";
        break;
      case "EDIT":
        severity = "info";
        message = "edited";
        break;
      case "DELETE":
        severity = "error";
        message = "delete";
        break;
      default:
        break;
    }

    return `Transaction successfully ${message}.`;
  };

  const message = alertMessage(alertType);

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity={severity}
          elevation={6}
          variant="filled"
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackbar;
