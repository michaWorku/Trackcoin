import { makeStyles } from "@material-ui/core";

export default makeStyles({
  income: {
    borderBottom: "10px solid rgba(0,255,0,0.5)",
    backgroundColor: "rgba(245,245,245,1)",

    // color: "white",
  },
  expense: {
    borderBottom: "10px solid rgba(255,0,0,0.5)",
    backgroundColor: "rgba(245,245,245,1)",
  },
  cardHeader: {
    textAlign: "center",
    margin: "20px 0",
  },
});
