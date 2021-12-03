import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  income: {
    backgroundImage:
      "linear-gradient(to right bottom, rgba(0,255,0,0.6), rgba(255,0,0,0.4))",
    borderRadius: 20,
  },
  expense: {
    borderRadius: 20,
    backgroundImage:
      "linear-gradient(to right bottom, rgba(255,0,0,0.6), rgba(0,255,0,0.4))",
  },
  cardHeader: {
    textAlign: "center",
    margin: "20px 160px 5px 160px",
    lineHeight: 2,
    background:
      "linear-gradient(to right bottom , rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.1))",
    borderRadius: 20,
    fontSize: 30,
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      margin: "20px 20px 5px 20px",
      fontSize: 20,
      fontWeight: 500,
    },
  },
}));
