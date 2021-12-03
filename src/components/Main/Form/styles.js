import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-10px",
  },
  buttonCon: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  button: {
    background:
      "linear-gradient(to right bottom , rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.1))",
    fontWeight: 600,
    borderRadius: 20,
    fontSize: 20,
    display: "flex",
    justifyContent: "space-bettween",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
}));
