import { blue } from "@material-ui/core/colors";
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
  buttonEdit: {
    //backgroundColor: blue[300],

    backgroundImage:
      "linear-gradient(to right bottom, rgba(0,0,255,0.9), rgba(0,0,0,0.1))",
    color: "rgba(0,0,255,0.8)",
    fontWeight: 600,
    borderRadius: 20,
    fontSize: 20,
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  button: {
    color:
      "linear-gradient(to right bottom, rgba(0,255,0,0.9), rgba(255,0,0,0.9))",
    background:
      "linear-gradient(to right bottom , rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.1))",
    fontWeight: 600,
    borderRadius: 20,
    fontSize: 20,
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
}));
