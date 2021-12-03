import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    backgroundImage:
      "linear-gradient(to right bottom, rgba(0,255,0,0.5), rgba(255,0,0,0.5))",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: "20px 0",
  },
  cardHeader: {
    textAlign: "center",
    margin: 20,
    //backgroundColor: "#f7f7f7",
    background:
      "linear-gradient(to right bottom , rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.1))",
    borderRadius: 20,
  },
}));
