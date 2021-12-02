import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-10px",
  },
  buttonCon: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    width: "40%",
    height: "100%",
    backgroundColor: "rgba(0,255,0,0.5)",
    fontWeight: 600,
    borderRadius: 20,
    fontSize: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
